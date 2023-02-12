export const getThemeFromLS = () => {
    const data = localStorage.getItem('theme');
    const theme = data ? data : '';
    return theme;
}