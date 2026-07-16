const AUTH_SESSION_KEY = "admin_session_active";
const LOGIN_PATH = "/iniciarsesion";

const currentPath = `${window.location.pathname}${window.location.search}`;
const sessionToken = window.sessionStorage.getItem(AUTH_SESSION_KEY);

if (sessionToken !== "true") {
  window.location.href = `${LOGIN_PATH}?returnTo=${encodeURIComponent(currentPath)}`;
} else {
  window.document.documentElement.classList.remove("auth-loading");
}