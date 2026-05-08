var wms_layers = [];


    var projection_pastel_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_pastel_0 = projection_pastel_0.getExtent();
    var size_pastel_0 = ol.extent.getWidth(projectionExtent_pastel_0) / 256;
    var resolutions_pastel_0 = new Array(14);
    var matrixIds_pastel_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_pastel_0[z] = size_pastel_0 / Math.pow(2, z);
        matrixIds_pastel_0[z] = z;
    }
    var lyr_pastel_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?request=GetCapabilities&service=WMTS",
                                attributions: ' ',
                                "layer": "pastel",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_pastel_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_pastel_0),
                resolutions: resolutions_pastel_0,
                matrixIds: matrixIds_pastel_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'pastel',
                            opacity: 1.0,
                            
                            
                          });
var format_wegen293_1 = new ol.format.GeoJSON();
var features_wegen293_1 = format_wegen293_1.readFeatures(json_wegen293_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wegen293_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wegen293_1.addFeatures(features_wegen293_1);
var lyr_wegen293_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wegen293_1, 
                style: style_wegen293_1,
                popuplayertitle: 'wegen293',
                interactive: true,
    title: 'wegen293<br />\
    <img src="styles/legend/wegen293_1_0.png" /> 0<br />\
    <img src="styles/legend/wegen293_1_1.png" /> 1<br />\
    <img src="styles/legend/wegen293_1_2.png" /> 3<br />\
    <img src="styles/legend/wegen293_1_3.png" /> A<br />\
    <img src="styles/legend/wegen293_1_4.png" /> B<br />\
    <img src="styles/legend/wegen293_1_5.png" /> C<br />\
    <img src="styles/legend/wegen293_1_6.png" /> D<br />\
    <img src="styles/legend/wegen293_1_7.png" /> E<br />' });

lyr_pastel_0.setVisible(true);lyr_wegen293_1.setVisible(true);
var layersList = [lyr_pastel_0,lyr_wegen293_1];
lyr_wegen293_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'cat': 'cat', });
lyr_wegen293_1.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'cat': 'TextEdit', });
lyr_wegen293_1.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'cat': 'inline label - always visible', });
lyr_wegen293_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});