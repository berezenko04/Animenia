export const getAuthFromLS = () => {
    const data = localStorage.getItem('auth');
    const auth = data ? JSON.parse(data) : [];
    console.log(auth);

    return auth;
}