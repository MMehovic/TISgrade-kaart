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
var format_TISgrade_nwb_2892026_1 = new ol.format.GeoJSON();
var features_TISgrade_nwb_2892026_1 = format_TISgrade_nwb_2892026_1.readFeatures(json_TISgrade_nwb_2892026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TISgrade_nwb_2892026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TISgrade_nwb_2892026_1.addFeatures(features_TISgrade_nwb_2892026_1);
var lyr_TISgrade_nwb_2892026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TISgrade_nwb_2892026_1, 
                style: style_TISgrade_nwb_2892026_1,
                popuplayertitle: 'TISgrade_nwb_2892026',
                interactive: true,
    title: 'TISgrade_nwb_2892026<br />\
    <img src="styles/legend/TISgrade_nwb_2892026_1_0.png" /> 0<br />\
    <img src="styles/legend/TISgrade_nwb_2892026_1_1.png" /> 1<br />\
    <img src="styles/legend/TISgrade_nwb_2892026_1_2.png" /> 2<br />\
    <img src="styles/legend/TISgrade_nwb_2892026_1_3.png" /> 3<br />\
    <img src="styles/legend/TISgrade_nwb_2892026_1_4.png" /> 4<br />\
    <img src="styles/legend/TISgrade_nwb_2892026_1_5.png" /> 5<br />\
    <img src="styles/legend/TISgrade_nwb_2892026_1_6.png" /> 6<br />\
    <img src="styles/legend/TISgrade_nwb_2892026_1_7.png" /> 7<br />' });

lyr_pastel_0.setVisible(true);lyr_TISgrade_nwb_2892026_1.setVisible(true);
var layersList = [lyr_pastel_0,lyr_TISgrade_nwb_2892026_1];
lyr_TISgrade_nwb_2892026_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'cat': 'cat', });
lyr_TISgrade_nwb_2892026_1.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'cat': 'TextEdit', });
lyr_TISgrade_nwb_2892026_1.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'cat': 'no label', });
lyr_TISgrade_nwb_2892026_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});