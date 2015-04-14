var cfg = window.layer_configuration;

var southWest = L.latLng(41.5, -118);
var northEast = L.latLng(49.5, -110);
var bounds = L.latLngBounds(southWest, northEast);

var crs = L.CRS.proj4js(cfg.spatial_reference.name, cfg.spatial_reference.definition);
crs.scale = function(zoom) {
  return 1 / cfg.resolutions[zoom];
};

var baseMaps = {};
for (var i = 0; i <= cfg.layers.length - 1; i++){
    baseMaps[cfg.layers[i].name] = new L.TileLayer(cfg.layers[i].tileUrl, {
        minZoom: 0,
        maxZoom: cfg.resolutions.length-1,
        continuousWorld: true
        });
}

var map = new L.Map('map', {
    crs: crs,
    maxBounds: bounds,
    layers: [
        baseMaps[cfg.layers[0].name]       
    ],
    center: new L.LatLng(45, -116),
    zoom: 3,
    continuousWorld: true
});


var overlays = {
};

L.control.layers(baseMaps,overlays).addTo(map);