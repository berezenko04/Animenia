export const getThemeFromLS = (): string => {
    const data = localStorage.getItem('theme');
    const theme = data ? data : '';
    return theme;
}