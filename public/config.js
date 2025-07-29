window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  // If not specified, the onboarding will not allow a "default setup". The user will have to use the extension or set up a proxy themselves
  VITE_CORS_PROXY_URL: "",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTJkNWQxY2M1NTUzYzI4NjVjYzU4MDhjZTA2YjNlZiIsIm5iZiI6MTc1MzczMzQ2Ni40MjQsInN1YiI6IjY4ODdkOTVhZTA4OGQ1NzhjNzhhNzgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.287iwHpuDEPlbC-r9NHWUfPhngdi-5J2uirgi5nM9Ac",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: null,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: true,

  // The backend URL to communicate with
  VITE_BACKEND_URL: https://server.fifthwit.net/

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: ""
};
