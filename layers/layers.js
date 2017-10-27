var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_BatangasCityPolBoundaries_0 = new ol.format.GeoJSON();
var features_BatangasCityPolBoundaries_0 = format_BatangasCityPolBoundaries_0.readFeatures(json_BatangasCityPolBoundaries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25393'});
var jsonSource_BatangasCityPolBoundaries_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatangasCityPolBoundaries_0.addFeatures(features_BatangasCityPolBoundaries_0);var lyr_BatangasCityPolBoundaries_0 = new ol.layer.Vector({
                source:jsonSource_BatangasCityPolBoundaries_0, 
                style: style_BatangasCityPolBoundaries_0,
                title: '<img src="styles/legend/BatangasCityPolBoundaries_0.png" /> Batangas.City.Pol.Boundaries'
            });var format_BC_LandMgmt_1 = new ol.format.GeoJSON();
var features_BC_LandMgmt_1 = format_BC_LandMgmt_1.readFeatures(json_BC_LandMgmt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25393'});
var jsonSource_BC_LandMgmt_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BC_LandMgmt_1.addFeatures(features_BC_LandMgmt_1);var lyr_BC_LandMgmt_1 = new ol.layer.Vector({
                source:jsonSource_BC_LandMgmt_1, 
                style: style_BC_LandMgmt_1,
                title: 'BC_LandMgmt<br />\
        <img src="styles/legend/BC_LandMgmt_1_0.png" /> Agricultural Development Zone<br />\
        <img src="styles/legend/BC_LandMgmt_1_1.png" /> Ecological Development Zone<br />\
        <img src="styles/legend/BC_LandMgmt_1_2.png" /> General Development Area<br />\
        <img src="styles/legend/BC_LandMgmt_1_3.png" /> Industrial Zone<br />\
        <img src="styles/legend/BC_LandMgmt_1_4.png" /> International Port Zone<br />\
        <img src="styles/legend/BC_LandMgmt_1_5.png" /> Primary Urban Core<br />\
        <img src="styles/legend/BC_LandMgmt_1_6.png" /> Secondary Urban Core<br />\
        <img src="styles/legend/BC_LandMgmt_1_7.png" /> Socialized Housing<br />\
        <img src="styles/legend/BC_LandMgmt_1_8.png" /> Special Land Use Area<br />\
        <img src="styles/legend/BC_LandMgmt_1_9.png" /> Strategic Crops And Livestock<br />'
            });var format_BC_Slope_2 = new ol.format.GeoJSON();
var features_BC_Slope_2 = format_BC_Slope_2.readFeatures(json_BC_Slope_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25393'});
var jsonSource_BC_Slope_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BC_Slope_2.addFeatures(features_BC_Slope_2);var lyr_BC_Slope_2 = new ol.layer.Vector({
                source:jsonSource_BC_Slope_2, 
                style: style_BC_Slope_2,
                title: 'BC_Slope<br />\
        <img src="styles/legend/BC_Slope_2_0.png" /> 0 - 3%<br />\
        <img src="styles/legend/BC_Slope_2_1.png" /> 3 - 8%<br />\
        <img src="styles/legend/BC_Slope_2_2.png" /> 8 - 15%<br />\
        <img src="styles/legend/BC_Slope_2_3.png" /> 15 - 25%<br />\
        <img src="styles/legend/BC_Slope_2_4.png" /> 25 - 50%<br />\
        <img src="styles/legend/BC_Slope_2_5.png" /> > 50%<br />'
            });var format_BC_GenZoningCopy2_3 = new ol.format.GeoJSON();
var features_BC_GenZoningCopy2_3 = format_BC_GenZoningCopy2_3.readFeatures(json_BC_GenZoningCopy2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25393'});
var jsonSource_BC_GenZoningCopy2_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BC_GenZoningCopy2_3.addFeatures(features_BC_GenZoningCopy2_3);var lyr_BC_GenZoningCopy2_3 = new ol.layer.Vector({
                source:jsonSource_BC_GenZoningCopy2_3, 
                style: style_BC_GenZoningCopy2_3,
                title: 'BC_GenZoningCopy2<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_0.png" /> Agricultural Development Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_1.png" /> Agro-Forestry Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_2.png" /> Agro-Industrial Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_3.png" /> Calumpang River<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_4.png" /> Eco-Tourism Development Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_5.png" /> Forest / Watershed Management Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_6.png" /> General Development Core Zone 1<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_7.png" /> General Development Core Zone 2<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_8.png" /> General Development Core Zone 3<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_9.png" /> Heavy Industrial Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_10.png" /> Light Industrial Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_11.png" /> Port Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_12.png" /> Primary Core Urban Zone 2<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_13.png" /> Primary Urban Core Zone 1<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_14.png" /> Secondary Urban Core<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_15.png" /> Socialized Housing Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_16.png" /> Special Entertainment Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_17.png" /> Special Landuse Zone<br />\
        <img src="styles/legend/BC_GenZoningCopy2_3_18.png" /> Swamps / Marshes Zone<br />'
            });

lyr_BatangasCityPolBoundaries_0.setVisible(true);lyr_BC_LandMgmt_1.setVisible(true);lyr_BC_Slope_2.setVisible(true);lyr_BC_GenZoningCopy2_3.setVisible(true);
var layersList = [baseLayer,lyr_BatangasCityPolBoundaries_0,lyr_BC_LandMgmt_1,lyr_BC_Slope_2,lyr_BC_GenZoningCopy2_3];
lyr_BatangasCityPolBoundaries_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'Brgy_Name': 'Brgy_Name', 'Brgy_Code': 'Brgy_Code', 'Brgy_Type': 'Brgy_Type', 'Pop_2011': 'Pop_2011', 'FEMALE2011': 'FEMALE2011', 'MALE2011': 'MALE2011', 'Thematic': 'Thematic', 'SoilType': 'SoilType', });
lyr_BC_LandMgmt_1.set('fieldAliases', {'BrgyName': 'BrgyName', 'BrgyID': 'BrgyID', 'LandUse': 'LandUse', });
lyr_BC_Slope_2.set('fieldAliases', {'BrgyName': 'BrgyName', 'BrgyID': 'BrgyID', 'Slope': 'Slope', });
lyr_BC_GenZoningCopy2_3.set('fieldAliases', {'BrgyName': 'BrgyName', 'BrgyID': 'BrgyID', 'GenZoning': 'GenZoning', });
lyr_BatangasCityPolBoundaries_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'Brgy_Name': 'TextEdit', 'Brgy_Code': 'TextEdit', 'Brgy_Type': 'TextEdit', 'Pop_2011': 'TextEdit', 'FEMALE2011': 'TextEdit', 'MALE2011': 'TextEdit', 'Thematic': 'TextEdit', 'SoilType': 'TextEdit', });
lyr_BC_LandMgmt_1.set('fieldImages', {'BrgyName': 'TextEdit', 'BrgyID': 'TextEdit', 'LandUse': 'TextEdit', });
lyr_BC_Slope_2.set('fieldImages', {'BrgyName': 'TextEdit', 'BrgyID': 'TextEdit', 'Slope': 'TextEdit', });
lyr_BC_GenZoningCopy2_3.set('fieldImages', {'BrgyName': 'TextEdit', 'BrgyID': 'TextEdit', 'GenZoning': 'TextEdit', });
lyr_BatangasCityPolBoundaries_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'Brgy_Name': 'no label', 'Brgy_Code': 'no label', 'Brgy_Type': 'no label', 'Pop_2011': 'no label', 'FEMALE2011': 'no label', 'MALE2011': 'no label', 'Thematic': 'no label', 'SoilType': 'no label', });
lyr_BC_LandMgmt_1.set('fieldLabels', {'BrgyName': 'no label', 'BrgyID': 'no label', 'LandUse': 'no label', });
lyr_BC_Slope_2.set('fieldLabels', {'BrgyName': 'no label', 'BrgyID': 'no label', 'Slope': 'no label', });
lyr_BC_GenZoningCopy2_3.set('fieldLabels', {'BrgyName': 'no label', 'BrgyID': 'no label', 'GenZoning': 'no label', });
lyr_BC_GenZoningCopy2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_BC_GenZoningCopy2_3.on("postcompose", update);

    var listenerKey = lyr_BC_GenZoningCopy2_3.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });