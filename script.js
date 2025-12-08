/* ---------------------------------------------------------
   DATA: 15 MOVIES + 10 TV SHOWS
----------------------------------------------------------*/

const data = [

  /* ---------- MOVIES (HOLLYWOOD + BOLLYWOOD) ---------- */

  {
    slug: "oppenheimer",
    title: "Oppenheimer",
    type: "Movie",
    genre: "Historical",
    platform: "Theaters / Streaming",
    rating: 8.3,
    year: 2023,
    img: "https://picsum.photos/id/1058/800/1200",
    trailer: "uYPbbksJxIg",
    desc: "The story of J. Robert Oppenheimer and his role in creating the atomic bomb.",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."]
  },
  {
    slug: "dune-part-two",
    title: "Dune: Part Two",
    type: "Movie",
    genre: "Sci-Fi",
    platform: "Theaters / Streaming",
    rating: 8.7,
    year: 2024,
    img: "https://picsum.photos/id/1066/800/1200",
    trailer: "_YUzQa_1RCE",
    desc: "Paul Atreides unites with the Fremen to seek revenge and fulfill his destiny.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Austin Butler"]
  },
  {
    slug: "barbie",
    title: "Barbie",
    type: "Movie",
    genre: "Fantasy",
    platform: "Theaters / Streaming",
    rating: 6.9,
    year: 2023,
    img: "https://picsum.photos/id/1063/800/1200",
    trailer: "pBk4NYhWNMM",
    desc: "Barbie leaves Barbieland to explore the real world and find her true self.",
    director: "Greta Gerwig",
    cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera", "Simu Liu"]
  },
  {
    slug: "spider-man-across-the-spider-verse",
    title: "Spider-Man: Across the Spider-Verse",
    type: "Movie",
    genre: "Animation",
    platform: "Theaters / Streaming",
    rating: 8.7,
    year: 2023,
    img: "https://picsum.photos/id/1060/800/1200",
    trailer: "cqGjhVJWtEg",
    desc: "Miles Morales travels across the multiverse and clashes with a league of Spider-People.",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Jake Johnson"]
  },
  {
    slug: "interstellar",
    title: "Interstellar",
    type: "Movie",
    genre: "Sci-Fi",
    platform: "Streaming",
    rating: 8.6,
    year: 2014,
    img: "https://picsum.photos/id/1054/800/1200",
    trailer: "zSWdZVtXT7E",
    desc: "A team of astronauts travels through a wormhole to find a new home for humanity.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"]
  },
  {
    slug: "inception",
    title: "Inception",
    type: "Movie",
    genre: "Sci-Fi",
    platform: "Streaming",
    rating: 8.8,
    year: 2010,
    img: "https://picsum.photos/id/1053/800/1200",
    trailer: "YoHD9XEInc0",
    desc: "A skilled thief enters dreams to plant an idea in a target's subconscious.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"]
  },
  {
    slug: "the-dark-knight",
    title: "The Dark Knight",
    type: "Movie",
    genre: "Action",
    platform: "Streaming",
    rating: 9.0,
    year: 2008,
    img: "https://picsum.photos/id/1040/800/1200",
    trailer: "EXeTwQWrcwY",
    desc: "Batman faces the Joker, a criminal mastermind spreading chaos across Gotham.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Maggie Gyllenhaal"]
  },
  {
    slug: "avengers-endgame",
    title: "Avengers: Endgame",
    type: "Movie",
    genre: "Action",
    platform: "Disney+ / Streaming",
    rating: 8.4,
    year: 2019,
    img: "https://picsum.photos/id/1039/800/1200",
    trailer: "TcMBFSGVi1c",
    desc: "The Avengers unite to reverse Thanos' destruction and save the universe.",
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Chris Hemsworth"]
  },
  {
    slug: "la-la-land",
    title: "La La Land",
    type: "Movie",
    genre: "Romance",
    platform: "Streaming",
    rating: 8.0,
    year: 2016,
    img: "https://picsum.photos/id/1044/800/1200",
    trailer: "0pdqf4P9MB8",
    desc: "A jazz musician and an actress chase dreams while navigating love in LA.",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"]
  },

  /* ---------- Bollywood Movies ---------- */

  {
    slug: "3-idiots",
    title: "3 Idiots",
    type: "Movie",
    genre: "Comedy",
    platform: "Streaming",
    rating: 8.4,
    year: 2009,
    img: "https://picsum.photos/id/1033/800/1200",
    trailer: "xvszmNXdM4w",
    desc: "Two friends search for their lost college buddy who changed their lives forever.",
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi", "Kareena Kapoor"]
  },
  {
    slug: "jawan",
    title: "Jawan",
    type: "Movie",
    genre: "Action",
    platform: "Theaters / Streaming",
    rating: 7.0,
    year: 2023,
    img: "https://picsum.photos/id/1035/800/1200",
    trailer: "MWOlnZSnXJo",
    desc: "A vigilante sets out to fix corruption while confronting a dangerous arms dealer.",
    director: "Atlee",
    cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"]
  },
  {
    slug: "dangal",
    title: "Dangal",
    type: "Movie",
    genre: "Drama",
    platform: "Streaming",
    rating: 8.3,
    year: 2016,
    img: "https://picsum.photos/id/1036/800/1200",
    trailer: "x_7YlGv9u1g",
    desc: "A father trains his daughters to become world-class wrestlers against all odds.",
    director: "Nitesh Tiwari",
    cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"]
  },
  {
    slug: "gully-boy",
    title: "Gully Boy",
    type: "Movie",
    genre: "Drama",
    platform: "Streaming",
    rating: 7.9,
    year: 2019,
    img: "https://picsum.photos/id/1037/800/1200",
    trailer: "JfbxcD6biOk",
    desc: "A young Mumbai rapper rises from the slums to chase his dreams.",
    director: "Zoya Akhtar",
    cast: ["Ranveer Singh", "Alia Bhatt", "Siddhant Chaturvedi"]
  },
  {
    slug: "pathaan",
    title: "Pathaan",
    type: "Movie",
    genre: "Action",
    platform: "Theaters / Streaming",
    rating: 6.2,
    year: 2023,
    img: "https://picsum.photos/id/1038/800/1200",
    trailer: "vqu4z34wENw",
    desc: "An Indian spy returns from exile to prevent a major terrorist attack.",
    director: "Siddharth Anand",
    cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"]
  },
  {
    slug: "zindagi-na-milegi-dobara",
    title: "Zindagi Na Milegi Dobara",
    type: "Movie",
    genre: "Drama",
    platform: "Streaming",
    rating: 8.2,
    year: 2011,
    img: "https://picsum.photos/id/1043/800/1200",
    trailer: "FJrpcDgC3zU",
    desc: "Three friends embark on a life-changing road trip across Spain.",
    director: "Zoya Akhtar",
    cast: ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol", "Katrina Kaif"]
  },

  /* ---------------------------------------------------------
     TV SHOWS (ENGLISH + INDIAN)
  ----------------------------------------------------------*/

  {
    slug: "breaking-bad",
    title: "Breaking Bad",
    type: "TV Show",
    genre: "Crime",
    platform: "Netflix",
    rating: 9.5,
    year: 2008,
    img: "https://picsum.photos/id/1011/800/1200",
    trailer: "HhesaQXLuRY",
    desc: "A chemistry teacher turns to making meth after being diagnosed with cancer.",
    director: "Vince Gilligan",
    cast: ["Bryan Cranston", "Aaron Paul"]
  },
  {
    slug: "stranger-things",
    title: "Stranger Things",
    type: "TV Show",
    genre: "Sci-Fi",
    platform: "Netflix",
    rating: 8.7,
    year: 2016,
    img: "https://picsum.photos/id/1012/800/1200",
    trailer: "b9EkMc79ZSU",
    desc: "Kids uncover supernatural mysteries after their friend goes missing.",
    director: "The Duffer Brothers",
    cast: ["Millie Bobby Brown", "Finn Wolfhard"]
  },
  {
    slug: "the-boys",
    title: "The Boys",
    type: "TV Show",
    genre: "Action",
    platform: "Prime Video",
    rating: 8.7,
    year: 2019,
    img: "https://picsum.photos/id/1013/800/1200",
    trailer: "tcrNsIaQkb4",
    desc: "Vigilantes battle corrupt superheroes backed by a powerful corporation.",
    director: "Eric Kripke",
    cast: ["Karl Urban", "Antony Starr"]
  },
  {
    slug: "game-of-thrones",
    title: "Game of Thrones",
    type: "TV Show",
    genre: "Fantasy",
    platform: "HBO Max",
    rating: 9.2,
    year: 2011,
    img: "https://picsum.photos/id/1014/800/1200",
    trailer: "KPLWWIOCOOQ",
    desc: "Noble families fight for the Iron Throne as ancient threats rise.",
    director: "David Benioff, D.B. Weiss",
    cast: ["Kit Harington", "Emilia Clarke"]
  },
  {
    slug: "money-heist",
    title: "Money Heist",
    type: "TV Show",
    genre: "Thriller",
    platform: "Netflix",
    rating: 8.3,
    year: 2017,
    img: "https://picsum.photos/id/1015/800/1200",
    trailer: "ZAXA1DV4dtI",
    desc: "A mastermind leads a team to execute the biggest heist in Spain.",
    director: "Álex Pina",
    cast: ["Álvaro Morte", "Úrsula Corberó"]
  },
  {
    slug: "dark",
    title: "Dark",
    type: "TV Show",
    genre: "Sci-Fi",
    platform: "Netflix",
    rating: 8.8,
    year: 2017,
    img: "https://picsum.photos/id/1016/800/1200",
    trailer: "lJ3_biTBe8o",
    desc: "A small town uncovers time-travel mysteries after a child disappears.",
    director: "Baran bo Odar",
    cast: ["Louis Hofmann", "Lisa Vicari"]
  },
  {
    slug: "mirzapur",
    title: "Mirzapur",
    type: "TV Show",
    genre: "Crime",
    platform: "Prime Video",
    rating: 8.5,
    year: 2018,
    img: "https://picsum.photos/id/1017/800/1200",
    trailer: "ZNeGF-PvRHY",
    desc: "Crime families clash for control of lawless Mirzapur.",
    director: "Karan Anshuman",
    cast: ["Pankaj Tripathi", "Ali Fazal"]
  },
  {
    slug: "scam-1992",
    title: "Scam 1992",
    type: "TV Show",
    genre: "Drama",
    platform: "Sony LIV",
    rating: 9.3,
    year: 2020,
    img: "https://picsum.photos/id/1018/800/1200",
    trailer: "u5m05U7tPus",
    desc: "The rise and fall of Harshad Mehta during India's biggest stock scam.",
    director: "Hansal Mehta",
    cast: ["Pratik Gandhi", "Shreya Dhanwanthary"]
  },
  {
    slug: "sacred-games",
    title: "Sacred Games",
    type: "TV Show",
    genre: "Thriller",
    platform: "Netflix",
    rating: 8.6,
    year: 2018,
    img: "https://picsum.photos/id/1019/800/1200",
    trailer: "A-fofQ9VpPQ",
    desc: "A cop uncovers a deadly conspiracy after receiving a cryptic warning.",
    director: "Anurag Kashyap, Vikramaditya Motwane",
    cast: ["Saif Ali Khan", "Nawazuddin Siddiqui"]
  },
  {
    slug: "the-family-man",
    title: "The Family Man",
    type: "TV Show",
    genre: "Action",
    platform: "Prime Video",
    rating: 8.7,
    year: 2019,
    img: "https://picsum.photos/id/1020/800/1200",
    trailer: "XatRGut65VI",
    desc: "A middle-class man secretly works as a spy balancing family and duty.",
    director: "Raj & DK",
    cast: ["Manoj Bajpayee", "Priyamani"]
  }

];

/* ---------------------------------------------------------
   STATE & UTILITIES
----------------------------------------------------------*/

let state = {
  route: '/',
  user: null,
  filtered: [...data],
  currentSlug: null
};

const USERS_KEY = 'pp_users_v1';

function qs(sel, ctx = document) {
  return ctx.querySelector(sel);
}
function qsa(sel, ctx = document) {
  return Array.from(ctx.querySelectorAll(sel));
}

function debounce(fn, ms) {
  let t;
  return () => {
    clearTimeout(t);
    t = setTimeout(() => fn(), ms);
  };
}

/* ---------------------------------------------------------
   POSTER & PLATFORM HELPERS
----------------------------------------------------------*/

function getPoster(item) {
  // Use YouTube trailer thumbnail as a "real" poster
  if (item.trailer) {
    return `https://img.youtube.com/vi/${item.trailer}/hqdefault.jpg`;
  }
  // fallback to whatever is in data.img
  return item.img;
}

function getPlatformInfo(item) {
  const plat = item.platform || '';
  const q = encodeURIComponent(item.title);

  if (plat.includes('Netflix')) {
    return {
      label: 'Netflix',
      url: `https://www.netflix.com/search?q=${q}`
    };
  }
  if (plat.includes('Prime Video')) {
    return {
      label: 'Prime Video',
      url: `https://www.primevideo.com/search/ref=atv_nb_sr?phrase=${q}`
    };
  }
  if (plat.includes('Disney+')) {
    return {
      label: 'Disney+ Hotstar',
      url: `https://www.hotstar.com/in/search?q=${q}`
    };
  }
  if (plat.includes('HBO Max')) {
    return {
      label: 'HBO / JioCinema',
      url: `https://www.jiocinema.com/search/${q}`
    };
  }
  if (plat.includes('Sony LIV')) {
    return {
      label: 'Sony LIV',
      url: `https://www.sonyliv.com/search/${q}`
    };
  }

  // generic streaming / theaters: JustWatch
  return {
    label: plat || 'Streaming',
    url: `https://www.justwatch.com/in/search?q=${q}`
  };
}

/* ---------------------------------------------------------
   AUTH / USERS
----------------------------------------------------------*/

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function loadUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; }
  catch { return {}; }
}

function saveSessionUser(u) {
  localStorage.setItem('pp_session_user', u);
}
function loadSessionUser() {
  return localStorage.getItem('pp_session_user');
}

function updateUserUI() {
  const userArea = qs('#userArea');
  const loginBtn = qs('#loginBtn');
  const userName = qs('#userName');
  if (state.user) {
    userArea.style.display = 'flex';
    userName.textContent = state.user;
    loginBtn.style.display = 'inline-block';
    loginBtn.textContent = 'Account';
  } else {
    userArea.style.display = 'none';
    loginBtn.style.display = 'inline-block';
    loginBtn.textContent = 'Sign In';
  }
}

function logout() {
  state.user = null;
  localStorage.removeItem('pp_session_user');
  updateUserUI();
  render();
}

/* ---------------------------------------------------------
   WATCHLIST STORAGE
----------------------------------------------------------*/

function curWatchKey(user) {
  return `pp_watch_${user}`;
}

function loadWatchlist() {
  if (!state.user) return [];
  try {
    return JSON.parse(localStorage.getItem(curWatchKey(state.user))) || [];
  } catch {
    return [];
  }
}

function saveWatchlist(list) {
  if (!state.user) return;
  localStorage.setItem(curWatchKey(state.user), JSON.stringify(list));
}

function isInWatchlist(idx) {
  if (!state.user) return false;
  return loadWatchlist().includes(idx);
}

function toggleWatch(idx) {
  if (!state.user) {
    openLogin();
    return;
  }
  const list = loadWatchlist();
  const has = list.includes(idx);
  if (has) {
    const newList = list.filter(i => i !== idx);
    saveWatchlist(newList);
    alert('Removed from watchlist');
  } else {
    list.push(idx);
    saveWatchlist(list);
    alert('Added to watchlist');
  }
  render();
}

/* ---------------------------------------------------------
   ROUTER
----------------------------------------------------------*/

function router() {
  const raw = location.hash.slice(1) || '/';
  if (raw.startsWith('/title/')) {
    state.route = '/title';
    state.currentSlug = decodeURIComponent(raw.split('/')[2] || '');
  } else {
    state.route = raw;
    state.currentSlug = null;
  }
  render();
  highlightNav();
}

function highlightNav() {
  qsa('#topNav a').forEach(a => {
    const r = a.dataset.route;
    a.classList.toggle('active', state.route === r || (state.route === '/' && r === '/'));
  });
}

/* ---------------------------------------------------------
   RENDER HELPERS
----------------------------------------------------------*/

function makeCard(item) {
  const poster = getPoster(item);
  const plat = getPlatformInfo(item);

  return `
    <div class="cardWrap">
      <div class="card" data-slug="${item.slug}">
        <img src="${poster}" alt="${item.title}">
        <div class="description-overlay">
          <h4 style="margin:0 0 6px; color:var(--gold-accent)">Synopsis</h4>
          <p style="margin:0; color:var(--text-medium)">${item.desc}</p>
        </div>
        <h3>${item.title} <span style="font-size:.8rem;color:var(--text-medium)">(${item.year})</span></h3>
        <p>
          ${item.type} • ${item.genre} • 
          <a href="${plat.url}" target="_blank" class="platformLink" style="color:var(--neon-blue);text-decoration:none;">
            ${plat.label}
          </a>
        </p>
        <div style="display:flex;justify-content:center;margin-bottom:8px" class="rating">
          ⭐ <strong>${item.rating.toFixed(1)}</strong>
        </div>
        <div class="actions">
          <button class="smallBtn" data-action="detail" data-slug="${item.slug}">Details</button>
          <button class="smallBtn" data-action="trailer" data-trailer="${item.trailer}">Trailer</button>
          <a class="smallBtn" href="${plat.url}" target="_blank">Watch</a>
          <button class="smallBtn star" data-action="watch" data-slug="${item.slug}">☆ Watchlist</button>
        </div>
      </div>
    </div>`;
}

/* ---------------------------------------------------------
   PAGE RENDERS
----------------------------------------------------------*/

function render() {
  const app = qs('#app');
  if (state.route === '/title' && state.currentSlug) {
    return renderDetail(app, state.currentSlug);
  }
  if (state.route === '/' || state.route === '/home') {
    return renderHome(app);
  }
  if (state.route === '/movies') {
    return renderGrid(app, 'Movie');
  }
  if (state.route === '/shows') {
    return renderGrid(app, 'TV Show');
  }
  if (state.route === '/watchlist') {
    return renderWatchlist(app);
  }
  renderHome(app);
}

function renderHome(container) {
  container.innerHTML = `
    <section>
      <div class="sectionTitle"><div>🔥 Trending Now</div><div></div></div>
      <div class="trending-scroll" id="trending"></div>
    </section>
    <section style="margin-top:18px">
      <div class="sectionTitle"><div>🎯 Recommended for You</div><div></div></div>
      <div class="grid" id="recommended"></div>
    </section>
  `;

  const trending = qs('#trending');
  trending.innerHTML = Array(5).fill(0)
    .map(() => '<div class="skeleton" style="width:220px;border-radius:10px"></div>')
    .join('');

  const rec = qs('#recommended');
  rec.innerHTML = Array(6).fill(0)
    .map(() => '<div class="skeleton" style="height:320px"></div>')
    .join('');

  setTimeout(() => { renderCardsHome(); }, 300);
}

function renderCardsHome() {
  const trendEl = qs('#trending');
  const recEl = qs('#recommended');
  const items = state.filtered.length ? state.filtered : data;
  const top = items.slice(0, 6).map(makeCard).join('');
  const rest = items.slice(6).map(makeCard).join('');
  trendEl.innerHTML = top || '<div class="empty">No trending items</div>';
  recEl.innerHTML = rest || '<div class="empty">No recommendations</div>';
}

function renderGrid(container, typeFilter) {
  container.innerHTML = `
    <div class="sectionTitle">
      <div>${typeFilter === 'Movie' ? '🎬 Movies' : '📺 TV Shows'}</div>
      <div></div>
    </div>
    <div class="grid" id="gridView"></div>
  `;
  const grid = qs('#gridView');
  const list = (state.filtered.length ? state.filtered : data)
    .filter(i => i.type === typeFilter);
  grid.innerHTML = list.map(makeCard).join('') || '<div class="empty">No items found.</div>';
}

function renderWatchlist(container) {
  container.innerHTML = `
    <div class="sectionTitle"><div>⭐ Your Watchlist</div><div></div></div>
    <div id="watchlistGrid" class="grid"></div>
  `;
  const grid = qs('#watchlistGrid');
  if (!state.user) {
    grid.innerHTML = `
      <div class="empty">
        Please sign in to see your watchlist.
        <button class="smallBtn" id="openLoginFromWL">Sign In</button>
      </div>`;
    qs('#openLoginFromWL')?.addEventListener('click', () => openLogin());
    return;
  }
  const listIdx = loadWatchlist();
  if (!listIdx.length) {
    grid.innerHTML = '<div class="empty">You have no items in your watchlist yet.</div>';
    return;
  }
  const cards = listIdx.map(idx => makeCard(data[idx])).join('');
  grid.innerHTML = cards;
}

function renderDetail(container, slug) {
  const item = data.find(m => m.slug === slug);
  if (!item) {
    container.innerHTML = `
      <div class="sectionTitle">
        <div>Not Found</div>
        <div><a href="#/" class="smallBtn">← Back Home</a></div>
      </div>
      <div class="empty">We couldn't find that title.</div>
    `;
    return;
  }

  const idx = data.indexOf(item);
  const backLink = item.type === 'Movie' ? '#/movies' : '#/shows';
  const poster = getPoster(item);
  const plat = getPlatformInfo(item);

  container.innerHTML = `
    <section>
      <div class="sectionTitle">
        <div>${item.title} (${item.year})</div>
        <div><a href="${backLink}" class="smallBtn">← Back</a></div>
      </div>
      <div class="detail-layout">
        <div>
          <img src="${poster}" alt="${item.title}" class="detail-poster">
        </div>
        <div>
          <div class="detail-meta">
            <div><strong>Type:</strong> ${item.type}</div>
            <div><strong>Genre:</strong> ${item.genre}</div>
            <div><strong>Platform:</strong> 
              <a href="${plat.url}" target="_blank" class="platformLink" style="color:var(--neon-blue);text-decoration:none;">
                ${plat.label}
              </a>
            </div>
            <div><strong>Rating:</strong> ⭐ ${item.rating.toFixed(1)}/10</div>
            <div><strong>Director:</strong> ${item.director}</div>
            <div><strong>Cast:</strong> ${item.cast.join(', ')}</div>
          </div>
          <p class="detail-desc">${item.desc}</p>
          <div style="margin:14px 0;">
            <h3 style="margin:0 0 8px;color:var(--gold-accent)">Trailer</h3>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;box-shadow:0 0 18px rgba(0,0,0,0.8)">
              <iframe
                src="https://www.youtube.com/embed/${item.trailer}?rel=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap">
            <a href="${plat.url}" target="_blank" class="smallBtn">Open on ${plat.label}</a>
            <button class="smallBtn star" id="detailWatchBtn">
              ${isInWatchlist(idx) ? '★ In Watchlist' : '☆ Add to Watchlist'}
            </button>
          </div>
        </div>
      </div>
    </section>
  `;

  qs('#detailWatchBtn')?.addEventListener('click', () => {
    toggleWatch(idx);
    qs('#detailWatchBtn').textContent = isInWatchlist(idx) ? '★ In Watchlist' : '☆ Add to Watchlist';
  });
}

/* ---------------------------------------------------------
   FILTERS & SEARCH
----------------------------------------------------------*/

function applyFilters() {
  const genre = qs('#genreFilter').value;
  const platform = qs('#platformFilter').value;
  const search = qs('#searchBox').value.trim().toLowerCase();
  const sort = qs('#sortBy').value;

  let filtered = data.filter(item =>
    (genre === 'all' || item.genre === genre) &&
    (platform === 'all' || item.platform === platform) &&
    (item.title.toLowerCase().includes(search))
  );

  if (sort === 'ratingDesc') filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === 'ratingAsc') filtered.sort((a, b) => a.rating - b.rating);
  else if (sort === 'alpha') filtered.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === 'yearDesc') filtered.sort((a, b) => b.year - a.year);
  else if (sort === 'yearAsc') filtered.sort((a, b) => a.year - b.year);

  state.filtered = filtered;

  if (state.route === '/movies') renderGrid(qs('#app'), 'Movie');
  else if (state.route === '/shows') renderGrid(qs('#app'), 'TV Show');
  else if (state.route === '/title' && state.currentSlug) renderDetail(qs('#app'), state.currentSlug);
  else renderHome(qs('#app'));
}

/* ---------------------------------------------------------
   MODALS (LOGIN / SIGNUP / TRAILER / WATCHLIST)
----------------------------------------------------------*/

function openLogin() {
  qs('#loginModal').style.display = 'flex';
}
function closeLogin() {
  qs('#loginModal').style.display = 'none';
}
function openSignup() {
  qs('#signupModal').style.display = 'flex';
}
function closeSignup() {
  qs('#signupModal').style.display = 'none';
}

function openTrailer(videoId) {
  if (!videoId) return alert('Trailer not available');
  const modal = qs('#trailerModal');
  const inner = qs('#trailerInner');
  inner.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
      frameborder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen></iframe>
  `;
  modal.style.display = 'flex';
}
function closeTrailer() {
  qs('#trailerInner').innerHTML = '';
  qs('#trailerModal').style.display = 'none';
}

function openWatchModal() {
  if (!state.user) {
    openLogin();
    return;
  }
  const list = loadWatchlist();
  const container = qs('#watchlistContent');
  if (!list.length) {
    container.innerHTML = '<div class="empty">Your watchlist is empty.</div>';
  } else {
    container.innerHTML = list.map(idx => `
      <div style="display:flex;gap:10px;align-items:center;margin:8px 0">
        <img src="${getPoster(data[idx])}" style="width:64px;height:96px;object-fit:cover;border-radius:6px">
        <div style="flex:1">
          <div style="color:var(--neon-blue)">${data[idx].title}</div>
          <div style="color:var(--text-medium);font-size:.9rem">${data[idx].type} • ${data[idx].genre}</div>
        </div>
        <button class="smallBtn" onclick="(function(i){ toggleWatch(i); openWatchModal(); })(${idx})">Remove</button>
      </div>
    `).join('');
  }
  qs('#watchlistModal').style.display = 'flex';
}
function closeWatchModal() {
  qs('#watchlistModal').style.display = 'none';
}

/* dummy to satisfy onclick in HTML */
function closeInfo() {
  qs('#infoOverlay').style.display = 'none';
}

/* ---------------------------------------------------------
   GLOBAL EVENT LISTENERS
----------------------------------------------------------*/

// Buttons on cards
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (btn) {
    const action = btn.dataset.action;
    const slug = btn.dataset.slug;
    const trailer = btn.dataset.trailer;

    if (action === 'detail' && slug) {
      location.hash = `#/title/${encodeURIComponent(slug)}`;
    }
    if (action === 'trailer' && trailer) {
      openTrailer(trailer);
    }
    if (action === 'watch' && slug) {
      const idx = data.findIndex(i => i.slug === slug);
      if (idx !== -1) toggleWatch(idx);
    }
  }
});

// Card click (anywhere except buttons)
document.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (card && !e.target.closest('button') && !e.target.closest('a')) {
    const slug = card.dataset.slug;
    if (slug) {
      location.hash = `#/title/${encodeURIComponent(slug)}`;
    }
  }
});

// Close modals by clicking background
window.addEventListener('click', (e) => {
  if (e.target.id === 'trailerModal') closeTrailer();
  if (e.target.id === 'loginModal') closeLogin();
  if (e.target.id === 'signupModal') closeSignup();
  if (e.target.id === 'watchlistModal') closeWatchModal();
  if (e.target.id === 'infoOverlay') closeInfo();
});

// ESC key closes modals
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTrailer();
    closeLogin();
    closeSignup();
    closeWatchModal();
    closeInfo();
  }
});

// NAV / ROUTER
window.addEventListener('hashchange', router);

/* ---------------------------------------------------------
   LOGIN / SIGNUP BUTTON HOOKS
----------------------------------------------------------*/

qs('#loginBtn').addEventListener('click', () => {
  if (state.user) {
    openWatchModal(); // treat as quick watchlist when logged in
  } else {
    openLogin();
  }
});

qs('#logoutBtn').addEventListener('click', logout);

qs('#openSignup')?.addEventListener('click', () => {
  closeLogin();
  openSignup();
});
qs('#openLogin')?.addEventListener('click', () => {
  closeSignup();
  openLogin();
});

qs('#doSignup').addEventListener('click', () => {
  const u = qs('#newUser').value.trim();
  const p = qs('#newPass').value;
  if (!u || !p) return alert('Enter username and password');
  const users = loadUsers();
  if (users[u]) return alert('Username already exists');
  users[u] = { pw: btoa(p) };
  saveUsers(users);
  alert('Account created — you can now sign in');
  closeSignup();
  openLogin();
});

qs('#doLogin').addEventListener('click', () => {
  const u = qs('#username').value.trim();
  const p = qs('#password').value;
  const users = loadUsers();
  if (!users[u] || users[u].pw !== btoa(p)) return alert('Invalid credentials');
  state.user = u;
  saveSessionUser(u);
  closeLogin();
  updateUserUI();
  alert('Login successful — welcome ' + u);
});

/* ---------------------------------------------------------
   FILTER INPUT EVENT HOOKS
----------------------------------------------------------*/

qs('#genreFilter').addEventListener('change', applyFilters);
qs('#platformFilter').addEventListener('change', applyFilters);
qs('#sortBy').addEventListener('change', applyFilters);
qs('#searchBox').addEventListener('input', debounce(applyFilters, 220));

/* ---------------------------------------------------------
   INIT
----------------------------------------------------------*/

function init() {
  const session = loadSessionUser();
  if (session) state.user = session;
  updateUserUI();
  router();      // sets route & renders
  applyFilters(); // initial filters
}

init();

