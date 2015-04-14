var southWest = L.latLng(41.5, -118);
var northEast = L.latLng(49.5, -110);
var bounds = L.latLngBounds(southWest, northEast);

var crs = L.CRS.proj4js(layer_configuration.spatial_reference.name, layer_configuration.spatial_reference.description);
crs.scale = function(zoom) {
  return 1 / layer_configuration.resolutions[zoom];
};

var baseMaps = {};
for (var i = 0; i <= layer_configuration.layers.length - 1; i++){
    baseMaps[layer_configuration.layers[i].name] = new L.TileLayer(layer_configuration.layers[i].tileUrl, {
        minZoom: 0,
        maxZoom: layer_configuration.resolutions.length-1,
        continuousWorld: true
        });
}

var map = new L.Map('map', {
    crs: crs,
    maxBounds: bounds,
    layers: [
        baseMaps[layer_configuration.layers[0].name]       
    ],
    center: new L.LatLng(45, -116),
    zoom: 3,
    continuousWorld: true
});


var overlays = {
};

L.control.layers(baseMaps,overlays).addTo(map);