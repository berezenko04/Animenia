const API_KEY = 'AIzaSyCYYb9ZtSS19QpJ7fvsU-Tm-x_o9rKIkzc';
const API_URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

const makeUrl = (position: any) => {
    return `${API_URL}latlng=${position.coords.latitude},${position.coords.longitude}&key=${API_KEY}&language=en`;
}

export const getGeo = () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => makeUrl(position))
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

console.log(getGeo());