function getINFO(ip){

    fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_p9RUGZpIKzHbspYPFCbJxTo2rVGOl&ipAddress=" + ip).then((res) => res.json()).then((res) => {
        let city = res.location.city;
        let country = res.location.country;
        let postalCode = res.location.postalCode;
        let timezone = res.location.timezone;
        let isp = res.isp;

        let lat = res.location.lat;
        let lng = res.location.lng;

        document.querySelector("#ip").innerHTML = ip;
        document.querySelector("#loc").innerHTML = city + "," + " " + country + " " + postalCode;
        document.querySelector("#time").innerHTML = timezone;
        document.querySelector("#isp").innerHTML = isp;

        var marker = L.marker([lat, lng]).addTo(map);
    })
}
getINFO("192.212.174.101");
