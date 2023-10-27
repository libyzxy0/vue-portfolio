export function setTheme(isDark) {
  if (isDark) {
    document.documentElement.style.setProperty('--primary', '#f5f5f5');
    document.documentElement.style.setProperty('--secondary', '#2bff82');
    document.documentElement.style.setProperty('--bg', '#212A40');
    document.documentElement.style.setProperty('--lines', '#121212');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.style.setProperty('--primary', '#272614');
    document.documentElement.style.setProperty('--secondary', '#2bff82');
    document.documentElement.style.setProperty('--bg', '#ffffff');
    document.documentElement.style.setProperty('--lines', 'gainsboro');
    localStorage.setItem('theme', 'light');
  }
}
