// Web API 是开发人员的梦想
{ // 显示经纬度
    const myElement = document.getElementById("app");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            myElement.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        myElement.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    }
    getLocation()
}

