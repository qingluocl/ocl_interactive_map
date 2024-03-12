ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2193").setExtent([1759298.695207, 5903366.324081, 1761241.182713, 5904443.648741]);
var wms_layers = [];


    var projection_Auckland0075mUrbanAerialPhotos2017_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Auckland0075mUrbanAerialPhotos2017_0 = projection_Auckland0075mUrbanAerialPhotos2017_0.getExtent();
    var size_Auckland0075mUrbanAerialPhotos2017_0 = ol.extent.getWidth(projectionExtent_Auckland0075mUrbanAerialPhotos2017_0) / 256;
    var resolutions_Auckland0075mUrbanAerialPhotos2017_0 = new Array(14);
    var matrixIds_Auckland0075mUrbanAerialPhotos2017_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Auckland0075mUrbanAerialPhotos2017_0[z] = size_Auckland0075mUrbanAerialPhotos2017_0 / Math.pow(2, z);
        matrixIds_Auckland0075mUrbanAerialPhotos2017_0[z] = z;
    }
    var lyr_Auckland0075mUrbanAerialPhotos2017_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://data.linz.govt.nz/services;key=d38512ecb8e04f3a9ba6cda93dfd17e7/wmts/1.0.0/layer/95497/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "layer-95497",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Auckland0075mUrbanAerialPhotos2017_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Auckland0075mUrbanAerialPhotos2017_0),
                resolutions: resolutions_Auckland0075mUrbanAerialPhotos2017_0,
                matrixIds: matrixIds_Auckland0075mUrbanAerialPhotos2017_0
              }),
              style: 'style=auto',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Auckland 0.075m Urban Aerial Photos (2017)",
                            opacity: 1.0,
                            
                            
                          });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Screenshot20240312224725_modified_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Screenshot 2024-03-12 224725_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Screenshot20240312224725_modified_2.png",
    attributions: ' ',
                                projection: 'EPSG:2193',
                                alwaysInRange: true,
                                imageExtent: [1760013.092395, 5903649.745238, 1760605.881460, 5904002.553232]
                            })
                        });
var lyr_Screenshot20240312223834_modified_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Screenshot 2024-03-12 223834_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Screenshot20240312223834_modified_3.png",
    attributions: ' ',
                                projection: 'EPSG:2193',
                                alwaysInRange: true,
                                imageExtent: [1759863.966999, 5903880.501262, 1760570.040811, 5904329.549895]
                            })
                        });

        var lyr_OpenStreetMap_4 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Utilities_Export_OCL_Comm_Ducts_5 = new ol.format.GeoJSON();
var features_Utilities_Export_OCL_Comm_Ducts_5 = format_Utilities_Export_OCL_Comm_Ducts_5.readFeatures(json_Utilities_Export_OCL_Comm_Ducts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Utilities_Export_OCL_Comm_Ducts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utilities_Export_OCL_Comm_Ducts_5.addFeatures(features_Utilities_Export_OCL_Comm_Ducts_5);
var lyr_Utilities_Export_OCL_Comm_Ducts_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Utilities_Export_OCL_Comm_Ducts_5, 
                style: style_Utilities_Export_OCL_Comm_Ducts_5,
                interactive: true,
                title: '<img src="styles/legend/Utilities_Export_OCL_Comm_Ducts_5.png" /> Utilities_Export_OCL_Comm_Ducts'
            });
var format_Utilities_Export_OCL_Comms_Points_6 = new ol.format.GeoJSON();
var features_Utilities_Export_OCL_Comms_Points_6 = format_Utilities_Export_OCL_Comms_Points_6.readFeatures(json_Utilities_Export_OCL_Comms_Points_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Utilities_Export_OCL_Comms_Points_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utilities_Export_OCL_Comms_Points_6.addFeatures(features_Utilities_Export_OCL_Comms_Points_6);
var lyr_Utilities_Export_OCL_Comms_Points_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Utilities_Export_OCL_Comms_Points_6, 
                style: style_Utilities_Export_OCL_Comms_Points_6,
                interactive: true,
    title: 'Utilities_Export_OCL_Comms_Points<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Points_6_0.png" /> AERIAL<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Points_6_1.png" /> CAMERA<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Points_6_2.png" /> END WALL<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Points_6_3.png" /> MONITOR<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Points_6_4.png" /> POINT<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Points_6_5.png" /> <br />'
        });
var format_Utilities_Export_OCL_Comms_Conduits_7 = new ol.format.GeoJSON();
var features_Utilities_Export_OCL_Comms_Conduits_7 = format_Utilities_Export_OCL_Comms_Conduits_7.readFeatures(json_Utilities_Export_OCL_Comms_Conduits_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Utilities_Export_OCL_Comms_Conduits_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utilities_Export_OCL_Comms_Conduits_7.addFeatures(features_Utilities_Export_OCL_Comms_Conduits_7);
var lyr_Utilities_Export_OCL_Comms_Conduits_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Utilities_Export_OCL_Comms_Conduits_7, 
                style: style_Utilities_Export_OCL_Comms_Conduits_7,
                interactive: true,
    title: 'Utilities_Export_OCL_Comms_Conduits<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Conduits_7_0.png" /> CABLE<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Conduits_7_1.png" /> FIBRE OPTICAL CABLE<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Conduits_7_2.png" /> 6+ CONDUITS<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Conduits_7_3.png" /> 2 TO 6 CONDUITS<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Conduits_7_4.png" /> SINGLE<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Conduits_7_5.png" /> TELECOM CABLE<br />\
    <img src="styles/legend/Utilities_Export_OCL_Comms_Conduits_7_6.png" /> <br />'
        });
var format_Utilities_Export_OCL_Elec_Comm_Chambers_8 = new ol.format.GeoJSON();
var features_Utilities_Export_OCL_Elec_Comm_Chambers_8 = format_Utilities_Export_OCL_Elec_Comm_Chambers_8.readFeatures(json_Utilities_Export_OCL_Elec_Comm_Chambers_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Utilities_Export_OCL_Elec_Comm_Chambers_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utilities_Export_OCL_Elec_Comm_Chambers_8.addFeatures(features_Utilities_Export_OCL_Elec_Comm_Chambers_8);
var lyr_Utilities_Export_OCL_Elec_Comm_Chambers_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Utilities_Export_OCL_Elec_Comm_Chambers_8, 
                style: style_Utilities_Export_OCL_Elec_Comm_Chambers_8,
                interactive: true,
    title: 'Utilities_Export_OCL_Elec_Comm_Chambers<br />\
    <img src="styles/legend/Utilities_Export_OCL_Elec_Comm_Chambers_8_0.png" /> AGL<br />\
    <img src="styles/legend/Utilities_Export_OCL_Elec_Comm_Chambers_8_1.png" /> COMMUNICATIONS<br />\
    <img src="styles/legend/Utilities_Export_OCL_Elec_Comm_Chambers_8_2.png" /> Electrical<br />\
    <img src="styles/legend/Utilities_Export_OCL_Elec_Comm_Chambers_8_3.png" /> ELECTRICAL<br />\
    <img src="styles/legend/Utilities_Export_OCL_Elec_Comm_Chambers_8_4.png" /> <br />'
        });
var format_Utilities_Export_OCL_Montrose_Boxes_9 = new ol.format.GeoJSON();
var features_Utilities_Export_OCL_Montrose_Boxes_9 = format_Utilities_Export_OCL_Montrose_Boxes_9.readFeatures(json_Utilities_Export_OCL_Montrose_Boxes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Utilities_Export_OCL_Montrose_Boxes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utilities_Export_OCL_Montrose_Boxes_9.addFeatures(features_Utilities_Export_OCL_Montrose_Boxes_9);
var lyr_Utilities_Export_OCL_Montrose_Boxes_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Utilities_Export_OCL_Montrose_Boxes_9, 
                style: style_Utilities_Export_OCL_Montrose_Boxes_9,
                interactive: true,
    title: 'Utilities_Export_OCL_Montrose_Boxes<br />\
    <img src="styles/legend/Utilities_Export_OCL_Montrose_Boxes_9_0.png" /> ABANDONED<br />\
    <img src="styles/legend/Utilities_Export_OCL_Montrose_Boxes_9_1.png" /> CONSTRUCTION<br />\
    <img src="styles/legend/Utilities_Export_OCL_Montrose_Boxes_9_2.png" /> EXISTS<br />\
    <img src="styles/legend/Utilities_Export_OCL_Montrose_Boxes_9_3.png" /> REMOVED<br />\
    <img src="styles/legend/Utilities_Export_OCL_Montrose_Boxes_9_4.png" /> <br />'
        });
var format_OCLWorkZone_10 = new ol.format.GeoJSON();
var features_OCLWorkZone_10 = format_OCLWorkZone_10.readFeatures(json_OCLWorkZone_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_OCLWorkZone_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCLWorkZone_10.addFeatures(features_OCLWorkZone_10);
var lyr_OCLWorkZone_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OCLWorkZone_10, 
                style: style_OCLWorkZone_10,
                interactive: true,
                title: '<img src="styles/legend/OCLWorkZone_10.png" /> OCL Work Zone'
            });
var format_NewOpticFibreCable_11 = new ol.format.GeoJSON();
var features_NewOpticFibreCable_11 = format_NewOpticFibreCable_11.readFeatures(json_NewOpticFibreCable_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_NewOpticFibreCable_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewOpticFibreCable_11.addFeatures(features_NewOpticFibreCable_11);
var lyr_NewOpticFibreCable_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewOpticFibreCable_11, 
                style: style_NewOpticFibreCable_11,
                interactive: true,
                title: '<img src="styles/legend/NewOpticFibreCable_11.png" /> New Optic Fibre Cable'
            });
var format_ExistingDuct_12 = new ol.format.GeoJSON();
var features_ExistingDuct_12 = format_ExistingDuct_12.readFeatures(json_ExistingDuct_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_ExistingDuct_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingDuct_12.addFeatures(features_ExistingDuct_12);
var lyr_ExistingDuct_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ExistingDuct_12, 
                style: style_ExistingDuct_12,
                interactive: true,
                title: '<img src="styles/legend/ExistingDuct_12.png" /> Existing Duct'
            });
var format_ExistingPit_13 = new ol.format.GeoJSON();
var features_ExistingPit_13 = format_ExistingPit_13.readFeatures(json_ExistingPit_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_ExistingPit_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingPit_13.addFeatures(features_ExistingPit_13);
var lyr_ExistingPit_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ExistingPit_13, 
                style: style_ExistingPit_13,
                interactive: true,
                title: '<img src="styles/legend/ExistingPit_13.png" /> Existing Pit'
            });
var group_OCLGISData = new ol.layer.Group({
                                layers: [lyr_OCLWorkZone_10,lyr_NewOpticFibreCable_11,lyr_ExistingDuct_12,lyr_ExistingPit_13,],
                                title: "OCL GIS Data"});
var group_Telecommunication = new ol.layer.Group({
                                layers: [lyr_Utilities_Export_OCL_Comm_Ducts_5,lyr_Utilities_Export_OCL_Comms_Points_6,lyr_Utilities_Export_OCL_Comms_Conduits_7,lyr_Utilities_Export_OCL_Elec_Comm_Chambers_8,lyr_Utilities_Export_OCL_Montrose_Boxes_9,],
                                title: "Telecommunication"});
var group_AerialImage = new ol.layer.Group({
                                layers: [lyr_Auckland0075mUrbanAerialPhotos2017_0,lyr_GoogleSatellite_1,lyr_Screenshot20240312224725_modified_2,lyr_Screenshot20240312223834_modified_3,lyr_OpenStreetMap_4,],
                                title: "Aerial Image"});

lyr_Auckland0075mUrbanAerialPhotos2017_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Screenshot20240312224725_modified_2.setVisible(true);lyr_Screenshot20240312223834_modified_3.setVisible(true);lyr_OpenStreetMap_4.setVisible(true);lyr_Utilities_Export_OCL_Comm_Ducts_5.setVisible(true);lyr_Utilities_Export_OCL_Comms_Points_6.setVisible(true);lyr_Utilities_Export_OCL_Comms_Conduits_7.setVisible(true);lyr_Utilities_Export_OCL_Elec_Comm_Chambers_8.setVisible(true);lyr_Utilities_Export_OCL_Montrose_Boxes_9.setVisible(true);lyr_OCLWorkZone_10.setVisible(true);lyr_NewOpticFibreCable_11.setVisible(true);lyr_ExistingDuct_12.setVisible(true);lyr_ExistingPit_13.setVisible(true);
var layersList = [group_AerialImage,group_Telecommunication,group_OCLGISData];
lyr_Utilities_Export_OCL_Comm_Ducts_5.set('fieldAliases', {'FeatureID': 'FeatureID', 'FeatureLab': 'FeatureLab', 'UserLabel': 'UserLabel', 'FeatureTyp': 'FeatureTyp', 'FeatureCla': 'FeatureCla', 'Material': 'Material', 'Diameter': 'Diameter', 'DuctLength': 'DuctLength', 'Manufactur': 'Manufactur', 'Constructi': 'Constructi', 'Comments': 'Comments', 'Status': 'Status', 'Owner': 'Owner', 'AssetCondi': 'AssetCondi', 'DataSource': 'DataSource', 'DataSour_1': 'DataSour_1', 'DataQualit': 'DataQualit', 'LastValida': 'LastValida', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_Utilities_Export_OCL_Comms_Points_6.set('fieldAliases', {'FeatureID': 'FeatureID', 'FeatureLab': 'FeatureLab', 'UserLabel': 'UserLabel', 'FeatureTyp': 'FeatureTyp', 'FeatureCla': 'FeatureCla', 'CoverType': 'CoverType', 'Depth': 'Depth', 'Length': 'Length', 'Width': 'Width', 'Diameter': 'Diameter', 'Elevation': 'Elevation', 'Manufactur': 'Manufactur', 'Constructi': 'Constructi', 'Comments': 'Comments', 'Status': 'Status', 'Owner': 'Owner', 'AssetCondi': 'AssetCondi', 'DataSource': 'DataSource', 'DataSour_1': 'DataSour_1', 'DataQualit': 'DataQualit', 'LastValida': 'LastValida', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_Utilities_Export_OCL_Comms_Conduits_7.set('fieldAliases', {'FeatureID': 'FeatureID', 'FeatureLab': 'FeatureLab', 'UserLabel': 'UserLabel', 'FeatureTyp': 'FeatureTyp', 'FeatureCla': 'FeatureCla', 'Material': 'Material', 'Diameter': 'Diameter', 'Manufactur': 'Manufactur', 'Constructi': 'Constructi', 'Comments': 'Comments', 'Status': 'Status', 'Owner': 'Owner', 'AssetCondi': 'AssetCondi', 'DataSource': 'DataSource', 'DataSour_1': 'DataSour_1', 'DataQualit': 'DataQualit', 'LastValida': 'LastValida', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_Utilities_Export_OCL_Elec_Comm_Chambers_8.set('fieldAliases', {'FeatureID': 'FeatureID', 'FeatureLab': 'FeatureLab', 'UserLabel': 'UserLabel', 'FeatureTyp': 'FeatureTyp', 'FeatureCla': 'FeatureCla', 'CoverType': 'CoverType', 'Depth': 'Depth', 'Length': 'Length', 'Width': 'Width', 'Diameter': 'Diameter', 'Elevation': 'Elevation', 'Manufactur': 'Manufactur', 'TradeClass': 'TradeClass', 'Constructi': 'Constructi', 'Comments': 'Comments', 'Status': 'Status', 'Owner': 'Owner', 'AssetCondi': 'AssetCondi', 'DataSource': 'DataSource', 'DataSour_1': 'DataSour_1', 'DataQualit': 'DataQualit', 'LastValida': 'LastValida', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_Utilities_Export_OCL_Montrose_Boxes_9.set('fieldAliases', {'GlobalID': 'GlobalID', 'FeatureID': 'FeatureID', 'FeatureLab': 'FeatureLab', 'UserLabel': 'UserLabel', 'FeatureTyp': 'FeatureTyp', 'FeatureCla': 'FeatureCla', 'Manufactur': 'Manufactur', 'InstalledB': 'InstalledB', 'Installati': 'Installati', 'SuppliedFr': 'SuppliedFr', 'TradeClass': 'TradeClass', 'Constructi': 'Constructi', 'Comments': 'Comments', 'Status': 'Status', 'Owner': 'Owner', 'AssetCondi': 'AssetCondi', 'DataSource': 'DataSource', 'DataSour_1': 'DataSour_1', 'DataQualit': 'DataQualit', 'LastValida': 'LastValida', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_OCLWorkZone_10.set('fieldAliases', {'OCL Job No': 'OCL Job No', 'AIA No': 'AIA No', 'Status': 'Status', 'Comment': 'Comment', });
lyr_NewOpticFibreCable_11.set('fieldAliases', {'Cable ID': 'Cable ID', 'OCL Job No': 'OCL Job No', 'AIA No': 'AIA No', 'Start': 'Start', 'End': 'End', 'Status': 'Status', 'Built Date': 'Built Date', 'Cable Type': 'Cable Type', 'Length': 'Length', });
lyr_ExistingDuct_12.set('fieldAliases', {'id': 'id', 'Duct Size': 'Duct Size', });
lyr_ExistingPit_13.set('fieldAliases', {'id': 'id', });
lyr_Utilities_Export_OCL_Comm_Ducts_5.set('fieldImages', {'FeatureID': '', 'FeatureLab': '', 'UserLabel': '', 'FeatureTyp': '', 'FeatureCla': '', 'Material': '', 'Diameter': '', 'DuctLength': '', 'Manufactur': '', 'Constructi': '', 'Comments': '', 'Status': '', 'Owner': '', 'AssetCondi': '', 'DataSource': '', 'DataSour_1': '', 'DataQualit': '', 'LastValida': '', 'GlobalID': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', });
lyr_Utilities_Export_OCL_Comms_Points_6.set('fieldImages', {'FeatureID': 'TextEdit', 'FeatureLab': 'TextEdit', 'UserLabel': 'TextEdit', 'FeatureTyp': 'TextEdit', 'FeatureCla': 'TextEdit', 'CoverType': 'TextEdit', 'Depth': 'TextEdit', 'Length': 'TextEdit', 'Width': 'TextEdit', 'Diameter': 'TextEdit', 'Elevation': 'TextEdit', 'Manufactur': 'TextEdit', 'Constructi': 'TextEdit', 'Comments': 'TextEdit', 'Status': 'TextEdit', 'Owner': 'TextEdit', 'AssetCondi': 'TextEdit', 'DataSource': 'TextEdit', 'DataSour_1': 'TextEdit', 'DataQualit': 'TextEdit', 'LastValida': 'DateTime', 'GlobalID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', });
lyr_Utilities_Export_OCL_Comms_Conduits_7.set('fieldImages', {'FeatureID': 'TextEdit', 'FeatureLab': 'TextEdit', 'UserLabel': 'TextEdit', 'FeatureTyp': 'TextEdit', 'FeatureCla': 'TextEdit', 'Material': 'TextEdit', 'Diameter': 'TextEdit', 'Manufactur': 'TextEdit', 'Constructi': 'TextEdit', 'Comments': 'TextEdit', 'Status': 'TextEdit', 'Owner': 'TextEdit', 'AssetCondi': 'TextEdit', 'DataSource': 'TextEdit', 'DataSour_1': 'TextEdit', 'DataQualit': 'TextEdit', 'LastValida': 'TextEdit', 'GlobalID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', });
lyr_Utilities_Export_OCL_Elec_Comm_Chambers_8.set('fieldImages', {'FeatureID': 'TextEdit', 'FeatureLab': 'TextEdit', 'UserLabel': 'TextEdit', 'FeatureTyp': 'TextEdit', 'FeatureCla': 'TextEdit', 'CoverType': 'TextEdit', 'Depth': 'TextEdit', 'Length': 'TextEdit', 'Width': 'TextEdit', 'Diameter': 'TextEdit', 'Elevation': 'TextEdit', 'Manufactur': 'TextEdit', 'TradeClass': 'TextEdit', 'Constructi': 'Range', 'Comments': 'TextEdit', 'Status': 'TextEdit', 'Owner': 'TextEdit', 'AssetCondi': 'TextEdit', 'DataSource': 'TextEdit', 'DataSour_1': 'TextEdit', 'DataQualit': 'TextEdit', 'LastValida': 'DateTime', 'GlobalID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', });
lyr_Utilities_Export_OCL_Montrose_Boxes_9.set('fieldImages', {'GlobalID': 'TextEdit', 'FeatureID': 'TextEdit', 'FeatureLab': 'TextEdit', 'UserLabel': 'TextEdit', 'FeatureTyp': 'TextEdit', 'FeatureCla': 'TextEdit', 'Manufactur': 'TextEdit', 'InstalledB': 'TextEdit', 'Installati': 'DateTime', 'SuppliedFr': 'TextEdit', 'TradeClass': 'TextEdit', 'Constructi': 'TextEdit', 'Comments': 'TextEdit', 'Status': 'TextEdit', 'Owner': 'TextEdit', 'AssetCondi': 'TextEdit', 'DataSource': 'TextEdit', 'DataSour_1': 'TextEdit', 'DataQualit': 'TextEdit', 'LastValida': 'DateTime', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', });
lyr_OCLWorkZone_10.set('fieldImages', {'OCL Job No': 'TextEdit', 'AIA No': 'TextEdit', 'Status': 'TextEdit', 'Comment': 'TextEdit', });
lyr_NewOpticFibreCable_11.set('fieldImages', {'Cable ID': 'TextEdit', 'OCL Job No': 'TextEdit', 'AIA No': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Status': 'TextEdit', 'Built Date': 'TextEdit', 'Cable Type': 'TextEdit', 'Length': 'Range', });
lyr_ExistingDuct_12.set('fieldImages', {'id': 'TextEdit', 'Duct Size': 'TextEdit', });
lyr_ExistingPit_13.set('fieldImages', {'id': 'TextEdit', });
lyr_Utilities_Export_OCL_Comm_Ducts_5.set('fieldLabels', {});
lyr_Utilities_Export_OCL_Comms_Points_6.set('fieldLabels', {});
lyr_Utilities_Export_OCL_Comms_Conduits_7.set('fieldLabels', {});
lyr_Utilities_Export_OCL_Elec_Comm_Chambers_8.set('fieldLabels', {});
lyr_Utilities_Export_OCL_Montrose_Boxes_9.set('fieldLabels', {});
lyr_OCLWorkZone_10.set('fieldLabels', {});
lyr_NewOpticFibreCable_11.set('fieldLabels', {});
lyr_ExistingDuct_12.set('fieldLabels', {});
lyr_ExistingPit_13.set('fieldLabels', {});
lyr_ExistingPit_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});