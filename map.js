var planes = [
    ["Indonesia",-0.7893,113.9213],
    ["Amerika",40.7672726,-73.97152637],
    ["Spanyol",40.463667,-3.74922],
    ["Italia",41.87194,12.56738],
    ["Jerman",51.165691,10.451526],
    ["China",30.9756,112.2707],
    ["Korea Selatan",35.907757,127.766922],
    ["Jepang",36.204824,138.252924],
    ["Malaysia",4.210484,101.975766]
    ];

    var map = L.map('map').setView([0, 0], 3);
    mapLink = 
        '<a href="https://www.openstreetmap.org/">OpenStreetMap</a>';
    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);

    for (var i = 0; i < planes.length; i++) {
        marker = new L.marker([planes[i][1],planes[i][2]])
            .bindPopup(planes[i][0])
            .addTo(map);
    }