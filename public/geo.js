if ('geolocation' in navigator) {
    console.log('geolocation IS available');
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        document.getElementById('latitude').textContent = lat;
        const lon = position.coords.longitude;
        document.getElementById('longitude').textContent = lon;
        console.log(position)
    });
} else {
    console.log('geolocation NOT available');
};