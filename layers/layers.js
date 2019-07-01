ol.proj.get("EPSG:2154").setExtent([-20037508.342789, -10488397.728026, 20037508.342789, 15538711.096309]);
var wms_layers = [];

    var projection_CartesIGN_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_CartesIGN_0 = projection_CartesIGN_0.getExtent();
    var size_CartesIGN_0 = ol.extent.getWidth(projectionExtent_CartesIGN_0) / 256;
    var resolutions_CartesIGN_0 = new Array(14);
    var matrixIds_CartesIGN_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CartesIGN_0[z] = size_CartesIGN_0 / Math.pow(2, z);
        matrixIds_CartesIGN_0[z] = z;
    }
    var lyr_CartesIGN_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://wxs.ign.fr/pratique/geoportail/wmts?SERVICE=WMTS&REQUEST=GetCapabilities",
    attributions: '<a href=""></a>',
                                "layer": "GEOGRAPHICALGRIDSYSTEMS.MAPS",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_CartesIGN_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CartesIGN_0),
                resolutions: resolutions_CartesIGN_0,
                matrixIds: matrixIds_CartesIGN_0
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Cartes IGN",
                            opacity: 0.5,
                            
                            
                          });var format_COMMUNE_1 = new ol.format.GeoJSON();
var features_COMMUNE_1 = format_COMMUNE_1.readFeatures(json_COMMUNE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_COMMUNE_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_COMMUNE_1.addFeatures(features_COMMUNE_1);var lyr_COMMUNE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNE_1, 
                style: style_COMMUNE_1,
                title: '<img src="styles/legend/COMMUNE_1.png" /> COMMUNE'
            });var format_grille_litt_1_2 = new ol.format.GeoJSON();
var features_grille_litt_1_2 = format_grille_litt_1_2.readFeatures(json_grille_litt_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_grille_litt_1_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_grille_litt_1_2.addFeatures(features_grille_litt_1_2);var lyr_grille_litt_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grille_litt_1_2, 
                style: style_grille_litt_1_2,
                title: '<img src="styles/legend/grille_litt_1_2.png" /> grille_litt_1'
            });

lyr_CartesIGN_0.setVisible(true);lyr_COMMUNE_1.setVisible(true);lyr_grille_litt_1_2.setVisible(true);
var layersList = [lyr_CartesIGN_0,lyr_COMMUNE_1,lyr_grille_litt_1_2];
lyr_COMMUNE_1.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', 'CC1': 'CC1', });
lyr_grille_litt_1_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'Numero': 'Numero', });
lyr_COMMUNE_1.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', 'CC1': 'TextEdit', });
lyr_grille_litt_1_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'Numero': 'Range', });
lyr_COMMUNE_1.set('fieldLabels', {'ID_GEOFLA': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', 'CC1': 'no label', });
lyr_grille_litt_1_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'Numero': 'no label', });
lyr_grille_litt_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});