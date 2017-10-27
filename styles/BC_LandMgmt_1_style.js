var size = 0;

function categories_BC_LandMgmt_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Agricultural Development Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(121,248,32,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Ecological Development Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(13,154,40,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'General Development Area':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(249,130,2,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Industrial Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(112,54,180,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'International Port Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(161,161,161,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Primary Urban Core':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,59,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Secondary Urban Core':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,247,17,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Socialized Housing':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(230,9,142,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Special Land Use Area':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(251,154,153,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Strategic Crops And Livestock':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(92,240,226,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;}};

var style_BC_LandMgmt_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("LandUse");
    var labelText = "";
    size = 0;
    var labelFont = "font: '10.725px \'MS Shell Dlg 2\', sans-serif'";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_BC_LandMgmt_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
}
function update() {

    var features = lyr_BC_LandMgmt_1.getSource().getFeatures();
    features.forEach(function(feature){
        var context = {
            feature: feature,
            variables: {}
        };

        // Get the label text as a string
        var text = "";

        // Get the center point in pixel space
        var center = ol.extent.getCenter(feature.getGeometry().getExtent());
        var pixelCenter = map.getPixelFromCoordinate(center);

        var size = 12;
        var halfText = (size + 1) * (text.length / 4);

        // Create a bounding box for the label using known pixel heights
        var minx = parseInt(pixelCenter[0] - halfText);
        var maxx = parseInt(pixelCenter[0] + halfText);

        var maxy = parseInt(pixelCenter[1] - (size / 2));
        var miny = parseInt(pixelCenter[1] + (size / 2));

        // Get bounding box points back into coordinate space
        var min = map.getCoordinateFromPixel([minx, miny]);
        var max = map.getCoordinateFromPixel([maxx, maxy]);

        // Create the bounds
        var bounds = {
            bottomLeft: min,
            topRight: max
        };
        // Weight longer labels higher, use their name as the ID
        labelEngine.ingestLabel(bounds, text, text.length, feature)

    });

    // Call the label callbacks for showing and hiding
    labelEngine.update();

};
