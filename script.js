
document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     TMDB CONFIG
  ===================================================== */
  const TMDB_KEY = "8dd19f897799957dab98b123ccd611d2";
  const TMDB = "https://api.themoviedb.org/3";
  const IMG = "https://image.tmdb.org/t/p/w500";

  /* =====================================================
     ELEMENTS
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

  /* =====================================================
     STATE
  ===================================================== */
  let currentMode = "movies"; // movies | shows
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
    grid.innerHTML = "";
  }

  function createCard(item, isTV) {
    if (!item.poster_path) return null;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${IMG}${item.poster_path}">`;
    card.onclick = () => openDetails(item.id, isTV);
    return card;
  }

  /* =====================================================
     TRENDING
  ===================================================== */
  async function loadTrending() {
    trendingRow.innerHTML = "";
    const type = currentMode === "shows" ? "tv" : "movie";

    const res = await fetch(
      `${TMDB}/trending/${type}/day?api_key=${TMDB_KEY}`
    );
    const data = await res.json();

    data.results.slice(0, 10).forEach(item => {
      const card = createCard(item, currentMode === "shows");
      if (card) trendingRow.appendChild(card);
    });
  }

  /* =====================================================
     CONTINUE WATCHING
  ===================================================== */
  function loadContinueWatching() {
    continueRow.innerHTML = "";
    const history = JSON.parse(localStorage.getItem("continueWatching")) || [];

    history.slice(0, 10).forEach(item => {
      const card = createCard(item, item.isTV);
      if (card) continueRow.appendChild(card);
    });
  }

  /* =====================================================
     RECOMMENDED
  ===================================================== */
  async function loadRecommended() {
    recommendedRow.innerHTML = "";
    const type = currentMode === "shows" ? "tv" : "movie";

    const res = await fetch(
      `${TMDB}/discover/${type}?api_key=${TMDB_KEY}&sort_by=vote_average.desc&vote_count.gte=500`
    );
    const data = await res.json();

    data.results.slice(0, 10).forEach(item => {
      const card = createCard(item, currentMode === "shows");
      if (card) recommendedRow.appendChild(card);
    });
  }

  /* =====================================================
     GRID LOADER (BROWSE vs SEARCH)
  ===================================================== */
  async function loadGrid() {
    if (isLoading || !hasMore) return;
    isLoading = true;

    const type = currentMode === "shows" ? "tv" : "movie";
    let url = "";

    if (isSearching) {
      url = `${TMDB}/search/${type}?api_key=${TMDB_KEY}&query=${encodeURIComponent(searchQuery)}&page=${currentPage}`;
    } else {
      url = `${TMDB}/discover/${type}?api_key=${TMDB_KEY}&page=${currentPage}&sort_by=popularity.desc`;

      if (genreFilter.value) url += `&with_genres=${genreFilter.value}`;
      if (ratingFilter.value) url += `&vote_average.gte=${ratingFilter.value}`;
      if (languageFilter.value) url += `&with_original_language=${languageFilter.value}`;

      if (moodFilter.value === "feelgood") url += "&with_genres=35,10751";
      if (moodFilter.value === "thriller") url += "&with_genres=53,27";
      if (moodFilter.value === "romantic") url += "&with_genres=10749";
      if (moodFilter.value === "family") url += "&with_genres=10751";
    }

    const res = await fetch(url);
    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      hasMore = false;
      isLoading = false;
      return;
    }

    data.results.forEach(item => {
      const card = createCard(item, currentMode === "shows");
      if (card) grid.appendChild(card);
    });

    currentPage++;
    isLoading = false;
  }

  /* =====================================================
     SEARCH (FINALLY FIXED)
  ===================================================== */
  let searchTimer = null;

  searchBox.addEventListener("input", () => {
    clearTimeout(searchTimer);

    searchTimer = setTimeout(() => {
      const value = searchBox.value.trim();

      resetBrowse();

      if (!value) {
        isSearching = false;
        searchQuery = "";
        loadGrid();
        return;
      }

      isSearching = true;
      searchQuery = value;
      loadGrid();
    }, 400);
  });

  /* =====================================================
     FILTERS (DISABLED DURING SEARCH)
  ===================================================== */
  function reloadBrowse() {
    if (isSearching) return; // IMPORTANT
    resetBrowse();
    loadGrid();
  }

  genreFilter.onchange =
    ratingFilter.onchange =
    languageFilter.onchange =
    moodFilter.onchange = reloadBrowse;

  /* =====================================================
     DETAILS + OTT LINKS
  ===================================================== */
  async function openDetails(id, isTV = false) {
    const type = isTV ? "tv" : "movie";

    const [details, credits, videos, providers] = await Promise.all([
      fetch(`${TMDB}/${type}/${id}?api_key=${TMDB_KEY}`).then(r => r.json()),
      fetch(`${TMDB}/${type}/${id}/credits?api_key=${TMDB_KEY}`).then(r => r.json()),
      fetch(`${TMDB}/${type}/${id}/videos?api_key=${TMDB_KEY}`).then(r => r.json()),
      fetch(`${TMDB}/${type}/${id}/watch/providers?api_key=${TMDB_KEY}`).then(r => r.json())
    ]);

    const director =
      credits.crew?.find(p => p.job === "Director")?.name || "N/A";

    const cast =
      credits.cast?.slice(0, 6).map(c => c.name).join(", ");

    const trailer =
      videos.results?.find(v => v.site === "YouTube" && v.type === "Trailer");

    let ottHTML = "<p><b>Available on:</b> Not available in India</p>";
    const india = providers.results?.IN;

    if (india?.flatrate) {
      ottHTML = `
        <p><b>Available on:</b></p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          ${india.flatrate.map(p => `
            <a class="ottBadge" target="_blank" href="${india.link}">
              ${p.provider_name}
            </a>
          `).join("")}
        </div>
      `;
    }

    let history = JSON.parse(localStorage.getItem("continueWatching")) || [];
    history = history.filter(m => m.id !== id);
    history.unshift({ id, poster_path: details.poster_path, isTV });
    localStorage.setItem("continueWatching", JSON.stringify(history));

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
          ${trailer
        ? `<a class="cta" target="_blank"
                   href="https://www.youtube.com/watch?v=${trailer.key}">
                   ▶ Watch Trailer
                 </a>`
        : ""
      }
        </div>
      </div>
    `;

    infoOverlay.style.display = "flex";
    loadContinueWatching();
  }

  infoOverlay.onclick = () => {
    infoOverlay.style.display = "none";
    infoOverlay.innerHTML = "";
  };

  /* =====================================================
     INFINITE SCROLL
  ===================================================== */
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 400
    ) {
      loadGrid();
    }
  });

  /* =====================================================
     INIT
  ===================================================== */
  renderRoute();

});

