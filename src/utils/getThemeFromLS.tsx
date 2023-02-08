export const getThemeFromLS = () => {
    const data = localStorage.getItem('theme');
    const theme = data ? JSON.parse(data) : [];
    return theme;
}