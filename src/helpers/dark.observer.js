let isDark = false;

export function checkTheme() {
  if (document.documentElement.classList.contains('dark') && !isDark) {
    isDark = true;
    document.documentElement.dispatchEvent(new CustomEvent('themeChanged', {detail: {theme: 'dark'}}));
  } else if (!document.documentElement.classList.contains('dark') && isDark) {
    isDark = false;
    document.documentElement.dispatchEvent(new CustomEvent('themeChanged', {detail: {theme: 'light'}}));
  }
}

new MutationObserver(checkTheme).observe(document.documentElement, {attributes : true});
