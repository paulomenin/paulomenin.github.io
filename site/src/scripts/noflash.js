// Adapted from:
// https://github.com/donavon/use-dark-mode/blob/develop/noflash.js.txt
export const noFlashScript = `
  (function(classNameDark, classNameLight, storageKey) {
    function setClassOnDocumentHtml(darkMode) {
      document.body.parentElement.classList.add(darkMode ? classNameDark : classNameLight);
      document.body.parentElement.classList.remove(darkMode ? classNameLight : classNameDark);
    }
    var preferDarkQuery = '(prefers-color-scheme: dark)';
    var mql = window.matchMedia(preferDarkQuery);
    var supportsColorSchemeQuery = mql.media === preferDarkQuery;
    var localStorageTheme = null;
    try {
      localStorageTheme = localStorage.getItem(storageKey);
    } catch (err) {}
    var localStorageExists = localStorageTheme !== null;
    if (localStorageExists) {
      localStorageTheme = JSON.parse(localStorageTheme);
    }
    // Determine the source of truth
    if (localStorageExists) {
      // source of truth from localStorage
      setClassOnDocumentHtml(localStorageTheme);
    } else if (supportsColorSchemeQuery) {
      // source of truth from system
      setClassOnDocumentHtml(mql.matches);
      localStorage.setItem(storageKey, mql.matches);
    } else {
      // source of truth from document html tag
      var isDarkMode = document.body.parentElement.classList.contains(classNameDark);
      localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
    }
  })('dark', 'light', 'darkMode');
`
