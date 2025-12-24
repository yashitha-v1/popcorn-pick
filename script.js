document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     TMDB CONFIG
  ===================================================== */
  const TMDB_KEY = "8dd19f897799957dab98b123ccd611d2";
  const TMDB = "https://api.themoviedb.org/3";
  const IMG = "https://image.tmdb.org/t/p/w500";

  /* =====================================================
     ELEMENTS (With Null-Checks to prevent crashes)
  ===================================================== */
  const trendingRow = document.getElementById("trendingRow");
  const continueRow = document.getElementById("continueRow");
  const recommendedRow = document.getElementById("recommendedRow");
  const grid = document.querySelector(".grid");
  const infoOverlay = document.getElementById("infoOverlay");

  const searchBox = document.getElementById("searchBox");
  const genreFilter = document.getElementById("genreFilter");
  const ratingFilter = document.getElementById("ratingFilter");
  const languageFilter = document.getElementById("languageFilter");
  const moodFilter = document.getElementById("moodFilter");

  const navMovies = document.getElementById("navMovies");
  const navShows = document.getElementById("navShows");
  const navWatchlist = document.getElementById("navWatchlist");

  /* =====================================================
     STATE
  ===================================================== */
  let currentMode = "movies"; 
  let currentPage = 1;
  let isLoading = false;
  let hasMore = true;
  let isSearching = false;
  let searchQuery = "";

  /* =====================================================
     ROUTER
  ===================================================== */
  function renderRoute() {
    const hash = location.hash || "#/movies";
    currentMode = hash === "#/shows" ? "shows" : "movies";

    // Update Nav UI
    document.querySelectorAll(".nav a").forEach(a => a.classList.remove("active"));
    if (hash === "#/shows" && navShows) navShows.classList.add("active");
    else if (hash === "#/watchlist" && navWatchlist) navWatchlist.classList.add("active");
    else if (navMovies) navMovies.classList.add("active");

    resetBrowse();
    loadTrending();
    loadRecommended();
    loadContinueWatching();
    loadGrid();
  }

  window.addEventListener("hashchange", renderRoute);

  /* =====================================================
     HELPERS
  ===================================================== */
  function resetBrowse() {
    currentPage = 1;
    hasMore = true;
    isLoading = false;
    if (grid) grid.innerHTML = "";
  }

  function createCard(item, isTV) {
    if (!item.poster_path) return null;

    const card = document.createElement("div");
    card.className = "card";
    const type = isTV ? "tv" : "movie";

    card.innerHTML = `
      <img src="${IMG}${item.poster_path}" alt="${item.title || item.name}">
      <div class="cardLinks">
        <a target="_blank" href="https://www.youtube.com/results?search_query=${encodeURIComponent((item.title || item.name) + " trailer")}">
          ▶ Trailer
        </a>
        <a target="_blank" href="https://www.themoviedb.org/${type}/${item.id}/watch">
          📺 OTT
        </a>
      </div>
    `;

    card.addEventListener("click", (e) => {
      // Don't open details if clicking the sub-links
      if (e.target.tagName !== 'A') {
        openDetails(item.id, isTV);
      }
    });

    return card;
  }

  /* =====================================================
     DATA FETCHING
  ===================================================== */
  async function loadTrending() {
    if (!trendingRow) return;
    trendingRow.innerHTML = "";
    const type = currentMode === "shows" ? "tv" : "movie";
    try {
      const res = await fetch(`${TMDB}/trending/${type}/day?api_key=${TMDB_KEY}`);
      const data = await res.json();
      data.results.slice(0, 10).forEach(item => {
        const card = createCard(item, currentMode === "shows");
        if (card) trendingRow.appendChild(card);
      });
    } catch (err) { console.error("Trending Error:", err); }
  }

  function loadContinueWatching() {
    if (!continueRow) return;
    continueRow.innerHTML = "";
    const history = JSON.parse(localStorage.getItem("continueWatching")) || [];
    history.slice(0, 10).forEach(item => {
      const card = createCard(item, item.isTV);
      if (card) continueRow.appendChild(card);
    });
  }

  async function loadRecommended() {
    if (!recommendedRow) return;
    recommendedRow.innerHTML = "";
    const type = currentMode === "shows" ? "tv" : "movie";
    try {
      const res = await fetch(`${TMDB}/discover/${type}?api_key=${TMDB_KEY}&sort_by=vote_average.desc&vote_count.gte=500`);
      const data = await res.json();
      data.results.slice(0, 10).forEach(item => {
        const card = createCard(item, currentMode === "shows");
        if (card) recommendedRow.appendChild(card);
      });
    } catch (err) { console.error("Recommended Error:", err); }
  }

  async function loadGrid() {
    if (isLoading || !hasMore || !grid) return;
    isLoading = true;

    const type = currentMode === "shows" ? "tv" : "movie";
    let url = "";

    if (isSearching) {
      url = `${TMDB}/search/${type}?api_key=${TMDB_KEY}&query=${encodeURIComponent(searchQuery)}&page=${currentPage}`;
    } else {
      url = `${TMDB}/discover/${type}?api_key=${TMDB_KEY}&page=${currentPage}&sort_by=popularity.desc`;
      if (genreFilter?.value) url += `&with_genres=${genreFilter.value}`;
      if (ratingFilter?.value) url += `&vote_average.gte=${ratingFilter.value}`;
      if (languageFilter?.value) url += `&with_original_language=${languageFilter.value}`;
      if (moodFilter?.value === "feelgood") url += "&with_genres=35,10751";
      if (moodFilter?.value === "thriller") url += "&with_genres=53,27";
      if (moodFilter?.value === "romantic") url += "&with_genres=10749";
      if (moodFilter?.value === "family") url += "&with_genres=10751";
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data.results || data.results.length === 0) {
        hasMore = false;
      } else {
        data.results.forEach(item => {
          const card = createCard(item, currentMode === "shows");
          if (card) grid.appendChild(card);
        });
        currentPage++;
      }
    } catch (err) { console.error("Grid Load Error:", err); }
    isLoading = false;
  }

  /* =====================================================
     SEARCH & FILTERS
  ===================================================== */
  let searchTimer = null;
  if (searchBox) {
    searchBox.addEventListener("input", () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        const value = searchBox.value.trim();
        resetBrowse();
        if (!value) {
          isSearching = false;
          searchQuery = "";
        } else {
          isSearching = true;
          searchQuery = value;
        }
        loadGrid();
      }, 400);
    });
  }

  function reloadBrowse() {
    if (isSearching) return;
    resetBrowse();
    loadGrid();
  }

  [genreFilter, ratingFilter, languageFilter, moodFilter].forEach(el => {
    if (el) el.onchange = reloadBrowse;
  });

  /* =====================================================
     DETAILS MODAL
  ===================================================== */
  async function openDetails(id, isTV = false) {
    if (!infoOverlay) return;
    const type = isTV ? "tv" : "movie";

    try {
      const [details, credits, videos, providers] = await Promise.all([
        fetch(`${TMDB}/${type}/${id}?api_key=${TMDB_KEY}`).then(r => r.json()),
        fetch(`${TMDB}/${type}/${id}/credits?api_key=${TMDB_KEY}`).then(r => r.json()),
        fetch(`${TMDB}/${type}/${id}/videos?api_key=${TMDB_KEY}`).then(r => r.json()),
        fetch(`${TMDB}/${type}/${id}/watch/providers?api_key=${TMDB_KEY}`).then(r => r.json())
      ]);

      const director = credits.crew?.find(p => p.job === "Director")?.name || "N/A";
      const cast = credits.cast?.slice(0, 6).map(c => c.name).join(", ") || "N/A";
      const trailer = videos.results?.find(v => v.site === "YouTube" && (v.type === "Trailer" || v.type === "Teaser"));

      let ottHTML = "<p><b>Available on:</b> Not available in India</p>";
      const india = providers.results?.IN;
      if (india?.flatrate) {
        ottHTML = `<p><b>Available on:</b></p><div style="display:flex;gap:10px;flex-wrap:wrap;">` +
          india.flatrate.map(p => `<a class="ottBadge" target="_blank" href="${india.link}">${p.provider_name}</a>`).join("") +
          `</div>`;
      }

      // Save to History
      let history = JSON.parse(localStorage.getItem("continueWatching")) || [];
      history = history.filter(m => m.id !== id);
      history.unshift({ id, poster_path: details.poster_path, isTV });
      localStorage.setItem("continueWatching", JSON.stringify(history.slice(0, 20)));

      infoOverlay.innerHTML = `
        <div class="infoCard" onclick="event.stopPropagation()">
          <img src="${IMG}${details.poster_path}">
          <div>
            <h2>${details.title || details.name}</h2>
            <p>${details.overview}</p>
            <p><b>Director:</b> ${director}</p>
            <p><b>Cast:</b> ${cast}</p>
            <p><b>Rating:</b> ⭐ ${details.vote_average}</p>
            ${ottHTML}
            ${trailer ? `<a class="cta" target="_blank" href="https://www.youtube.com/watch?v=${trailer.key}">▶ Watch Trailer</a>` : ""}
          </div>
        </div>`;
      infoOverlay.style.display = "flex";
      loadContinueWatching();
    } catch (err) { console.error("Details Error:", err); }
  }

  if (infoOverlay) {
    infoOverlay.addEventListener("click", () => {
      infoOverlay.style.display = "none";
      infoOverlay.innerHTML = "";
    });
  }

  /* =====================================================
     INFINITE SCROLL
  ===================================================== */
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
      loadGrid();
    }
  });

  /* =====================================================
     AUTH LOGIC
  ===================================================== */
  let authMode = "login";
  const API = "http://localhost:3000/api";

  const authModal = document.getElementById("authModal");
  const authArea = document.getElementById("authArea");
  const authTitle = document.getElementById("authTitle");
  const authName = document.getElementById("authName");
  const authEmail = document.getElementById("authEmail");
  const authPassword = document.getElementById("authPassword");
  const authMsg = document.getElementById("authMsg");

  document.body.addEventListener("click", async (e) => {
    if (e.target.closest("#openAuth") && authModal) authModal.style.display = "flex";
    if (e.target.closest("#closeAuth") && authModal) authModal.style.display = "none";

    if (e.target.closest("#authToggle")) {
      authMode = authMode === "login" ? "signup" : "login";
      if (authTitle) authTitle.textContent = authMode === "login" ? "Sign In" : "Create Account";
      if (authName) authName.style.display = authMode === "signup" ? "block" : "none";
      e.target.textContent = authMode === "login" ? "Don’t have an account? Create one" : "Already have an account? Sign in";
    }

    if (e.target.closest("#authSubmit")) {
      if (authMsg) authMsg.textContent = "";
      const payload = {
        email: authEmail?.value.trim(),
        password: authPassword?.value.trim(),
        name: authName?.value.trim()
      };
      const endpoint = authMode === "login" ? "/auth/login" : "/auth/signup";

      try {
        const res = await fetch(API + endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (!res.ok) {
          if (authMsg) authMsg.textContent = data.message || "Error";
          return;
        }

        if (authMode === "signup") {
          if (authMsg) authMsg.textContent = "Account created. Please sign in.";
          authMode = "login";
          if (authName) authName.style.display = "none";
          return;
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.name);
        if (authModal) authModal.style.display = "none";
        renderAuthUI();
      } catch (err) {
        if (authMsg) authMsg.textContent = "Server Connection Failed";
      }
    }

    if (e.target.closest("#logout")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      renderAuthUI();
    }
  });

  function renderAuthUI() {
    if (!authArea) return;
    const name = localStorage.getItem("userName");
    if (!name) {
      authArea.innerHTML = `<button id="openAuth" class="cta">Sign In</button>`;
    } else {
      authArea.innerHTML = `
        <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}" class="profile">
        <button id="logout" class="cta logoutBtn">Logout</button>
      `;
    }
  }

  // INITIALIZE EVERYTHING
  renderAuthUI();
  renderRoute(); // This triggers the initial data load
});
