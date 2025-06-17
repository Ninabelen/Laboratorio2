ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([12640652.011554, 9479199.369183, 14601586.333232, 10520800.630817]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Capaunida_1 = new ol.format.GeoJSON();
var features_Capaunida_1 = format_Capaunida_1.readFeatures(json_Capaunida_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Capaunida_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capaunida_1.addFeatures(features_Capaunida_1);
var lyr_Capaunida_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capaunida_1, 
                style: style_Capaunida_1,
                popuplayertitle: 'Capa unida',
                interactive: true,
    title: 'Capa unida<br />\
    <img src="styles/legend/Capaunida_1_0.png" /> Bar Callejón<br />\
    <img src="styles/legend/Capaunida_1_1.png" /> Campos Deportivos SERVIU<br />\
    <img src="styles/legend/Capaunida_1_2.png" /> Casa del Arte - Pinacoteca UdeC<br />\
    <img src="styles/legend/Capaunida_1_3.png" /> Catedral Metropolitana de la Santísima Concepción<br />\
    <img src="styles/legend/Capaunida_1_4.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/Capaunida_1_5.png" /> Club Hípico de Concepción<br />\
    <img src="styles/legend/Capaunida_1_6.png" /> Fuerte La Planchada<br />\
    <img src="styles/legend/Capaunida_1_7.png" /> Humedal Urbano Price<br />\
    <img src="styles/legend/Capaunida_1_8.png" /> Laguna Chica San Pedro<br />\
    <img src="styles/legend/Capaunida_1_9.png" /> Mina Chiflón del Diablo<br />\
    <img src="styles/legend/Capaunida_1_10.png" /> Parque Humedal Los Batros<br />\
    <img src="styles/legend/Capaunida_1_11.png" /> Parque Isidora Goyenechea de Cousiño de Lota<br />\
    <img src="styles/legend/Capaunida_1_12.png" /> Parque Laguna Redonda<br />\
    <img src="styles/legend/Capaunida_1_13.png" /> Parque Zoológico Concepción<br />\
    <img src="styles/legend/Capaunida_1_14.png" /> Plaza de Armas Chiguayante<br />\
    <img src="styles/legend/Capaunida_1_15.png" /> Plaza de Armas de Lota<br />\
    <img src="styles/legend/Capaunida_1_16.png" /> Plaza de armas Tomé<br />\
    <img src="styles/legend/Capaunida_1_17.png" /> Sitio de Memoria Fuerte El Morro<br />\
    <img src="styles/legend/Capaunida_1_18.png" /> Teatro Enrique Molina<br />\
    <img src="styles/legend/Capaunida_1_19.png" /> Templo de Concepción Chile<br />\
    <img src="styles/legend/Capaunida_1_20.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Capaunida_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Capaunida_1];
lyr_Capaunida_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'Id_2': 'Id_2', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'Tipo': 'Tipo', 'Actividad': 'Actividad', 'Horario': 'Horario', 'Tarifa': 'Tarifa', 'Dirección': 'Dirección', 'Video': 'Video', });
lyr_Capaunida_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Id_2': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Tipo': 'TextEdit', 'Actividad': 'TextEdit', 'Horario': 'TextEdit', 'Tarifa': 'TextEdit', 'Dirección': 'TextEdit', 'Video': 'TextEdit', });
lyr_Capaunida_1.set('fieldLabels', {'id': 'no label', 'Name': 'header label - always visible', 'descriptio': 'no label', 'Id_2': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'header label - always visible', 'PROVINCIA': 'header label - always visible', 'COMUNA': 'header label - always visible', 'SUPERFICIE': 'no label', 'Tipo': 'header label - visible with data', 'Actividad': 'header label - visible with data', 'Horario': 'header label - visible with data', 'Tarifa': 'header label - visible with data', 'Dirección': 'header label - visible with data', 'Video': 'header label - visible with data', });
lyr_Capaunida_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});