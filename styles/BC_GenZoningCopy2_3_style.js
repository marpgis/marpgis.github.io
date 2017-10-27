var size = 0;

function categories_BC_GenZoningCopy2_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Agricultural Development Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(92,200,193,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Agro-Forestry Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,118,196,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Agro-Industrial Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(233,88,183,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Calumpang River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(110,128,232,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Eco-Tourism Development Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(99,156,220,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Forest / Watershed Management Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(221,204,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'General Development Core Zone 1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(127,43,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'General Development Core Zone 2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(155,205,93,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'General Development Core Zone 3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(19,236,26,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Heavy Industrial Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(222,50,110,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Light Industrial Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(219,64,72,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Port Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(90,212,131,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Primary Core Urban Zone 2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(82,216,38,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Primary Urban Core Zone 1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(91,68,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Secondary Urban Core':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(93,182,209,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Socialized Housing Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(236,143,112,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Special Entertainment Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(197,223,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Special Landuse Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(85,212,166,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Swamps / Marshes Zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(171,62,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;}};

var style_BC_GenZoningCopy2_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("GenZoning");
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
    
var style = categories_BC_GenZoningCopy2_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
}
function update() {

    var features = lyr_BC_GenZoningCopy2_3.getSource().getFeatures();
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
