//#region Environment
const manifest = browser.runtime.getManifest();
const declaredGeckoId = manifest?.browser_specific_settings?.gecko?.id || "";
const runtimeId = browser.runtime?.id || "";

// Firefox temporary installs use a random runtime ID; signed production builds
// use the declared gecko ID from the manifest — that's how we detect dev mode.
const isDev = !declaredGeckoId || runtimeId !== declaredGeckoId;
//#endregion

//#region API Configuration
export const CONFIG = {
  API_BASE: isDev
    ? "https://pinity.uk/api"   // replace with tunnel URL for local dev
    : "https://pinity.uk/api",
  BACKEND_BASE: isDev
    ? "https://pinity.uk"       // replace with tunnel URL for local dev
    : "https://pinity.uk",
  // Public OAuth client ID for extension-native Google login (no hosted auth page).
  GOOGLE_OAUTH_CLIENT_ID: "582777025605-7t376oiq9lkh2r7dhdg1fmbar8j59s7n.apps.googleusercontent.com",
};
//#endregion
