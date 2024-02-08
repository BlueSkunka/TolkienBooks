/**
 * Define constants
 */
const themeTogglerClassSelector = ".theme-toggler";
const darkMod = "dark";
const lightMod = "light";

let themeMod;

/**
 * Define default theme mod
 */
defineBaseThemeMod();

document.querySelectorAll(themeTogglerClassSelector).forEach(toggler => {
    toggler.addEventListener('click', toggleThemeMod);
})


/**
 * Define default base mod based on user color scheme preference
 */
function defineBaseThemeMod() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeMod = darkMod;
    } else {
        themeMod = lightMod;
    }
}

/**
 * Toggle light or dark theme
 */
function toggleThemeMod() {
    if (themeMod == darkMod) {
        themeMod = lightMod;
        document.documentElement.classList.remove(darkMod);
    } else {
        themeMod = darkMod;
        document.documentElement.classList.add(darkMod);
    }
    localStorage.theme = themeMod;
}