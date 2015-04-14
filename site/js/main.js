var layer_configuration = {
    resolutions: [465, 233, 117.1875, 58.59375],
    layers:[{
        "name": "1947",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1947/{z}/{x}/{y}.png"
    },
    {
        "name": "1950",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1950/{z}/{x}/{y}.png"
    },
    {
        "name": "1953",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1953/{z}/{x}/{y}.png"
    },
    {
        "name": "1962",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1962/{z}/{x}/{y}.png"
    },
    {
        "name": "1963",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1963/{z}/{x}/{y}.png"
    },
    {
        "name": "1964",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1964/{z}/{x}/{y}.png"
    },
    {
        "name": "1965",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1965/{z}/{x}/{y}.png"
    },
    {
        "name": "1967",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1967/{z}/{x}/{y}.png"
    },
    {
        "name": "1969",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1969/{z}/{x}/{y}.png"
    },
    {
        "name": "1970",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1970/{z}/{x}/{y}.png"
    },
    {
        "name": "1972",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1972/{z}/{x}/{y}.png"
    },    
    {
        "name": "1987",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1987/{z}/{x}/{y}.png"
    },
    {
        "name": "2007",
        "tileUrl":"http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-2007/{z}/{x}/{y}.png"
    }]
}

var resolutions = [465, 233, 117.1875, 58.59375];

var tile1947 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1947/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1950 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1950/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1953 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1953/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1962 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1962/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1963 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1963/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1964 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1964/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1965 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1965/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1967 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1967/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1969 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1969/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});
var tile1970 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1970/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1972 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1972/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile1987 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-1987/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var tile2007 = new L.TileLayer('http://sagebrushgis.s3.amazonaws.com/OfficialHighwayMaps/Tiles/idaho-2007/{z}/{x}/{y}.png',{
        minZoom: 0,
        maxZoom: resolutions.length-1,
        continuousWorld: true
});

var southWest = L.latLng(41.5, -118);
var northEast = L.latLng(49.5, -110);
var bounds = L.latLngBounds(southWest, northEast);

  var crs = L.CRS.proj4js('SR-ORG:6677', '+proj=tmerc +lat_0=42 +lon_0=-114 +k=0.9996 +x_0=2500000 +y_0=1200000 +ellps=GRS80 +units=m +no_defs');
  crs.scale = function(zoom) {
      return 1 / resolutions[zoom];
  };

  var map = new L.Map('map', {
    crs: crs,
    maxBounds: bounds,
    layers: [
      tile1947       
    ],
    center: new L.LatLng(45, -116),
    zoom: 3,
    continuousWorld: true
  });

    var baseMaps = {
        "1947": tile1947,
        "1950": tile1950,
        "1953": tile1953,
        "1962": tile1962,
        "1963": tile1963,
        "1964": tile1964,
        "1965": tile1965,
        "1967": tile1967,
        "1969": tile1969,
        "1970": tile1970,
        "1972": tile1972,
        "1987": tile1987,
        "2007": tile2007
    };

    var overlays = {
    };

    L.control.layers(baseMaps,overlays).addTo(map);