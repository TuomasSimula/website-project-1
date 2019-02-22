var map = L.map('mapid').setView([60.192059,24.945831], 13);

var normalTiles = L.tileLayer('https://cdn.digitransit.fi/map/v1/{id}/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 19,
        tileSize: 512,
        zoomOffset: -1,
        id: 'hsl-map'
}).addTo(map);