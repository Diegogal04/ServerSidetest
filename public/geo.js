
if ('geolocation' in navigator) {
    console.log('geolocation IS available');
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        document.getElementById('latitude').textContent = lat;
        const lon = position.coords.longitude;
        document.getElementById('longitude').textContent = lon;
        // console.log(position);

        const data = { lat, lon };
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('/api', options).then(response => {
            console.log(response)
        });
    });
} else {
    console.log('geolocation NOT available');
};