var wms_layers = [];


        var lyr_Waikato03mRuralAerialPhotos20232024_0 = new ol.layer.Tile({
            'title': 'Waikato 0.3m Rural Aerial Photos 2023-2024',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tiles-cdn.koordinates.com/services;key=d38512ecb8e04f3a9ba6cda93dfd17e7/tiles/v4/layer=119199/EPSG:3857/{z}/{x}/{y}.png'
            })
        });
var format_nzroadsaddressing_1 = new ol.format.GeoJSON();
var features_nzroadsaddressing_1 = format_nzroadsaddressing_1.readFeatures(json_nzroadsaddressing_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nzroadsaddressing_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzroadsaddressing_1.addFeatures(features_nzroadsaddressing_1);
var lyr_nzroadsaddressing_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzroadsaddressing_1, 
                style: style_nzroadsaddressing_1,
                popuplayertitle: 'nz-roads-addressing',
                interactive: true,
                title: 'nz-roads-addressing'
            });
var format_nzprimarylandparcels_2 = new ol.format.GeoJSON();
var features_nzprimarylandparcels_2 = format_nzprimarylandparcels_2.readFeatures(json_nzprimarylandparcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nzprimarylandparcels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzprimarylandparcels_2.addFeatures(features_nzprimarylandparcels_2);
var lyr_nzprimarylandparcels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzprimarylandparcels_2, 
                style: style_nzprimarylandparcels_2,
                popuplayertitle: 'nz-primary-land-parcels',
                interactive: true,
                title: '<img src="styles/legend/nzprimarylandparcels_2.png" /> nz-primary-land-parcels'
            });
var format_nzaddresses_3 = new ol.format.GeoJSON();
var features_nzaddresses_3 = format_nzaddresses_3.readFeatures(json_nzaddresses_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nzaddresses_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzaddresses_3.addFeatures(features_nzaddresses_3);
var lyr_nzaddresses_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzaddresses_3, 
                style: style_nzaddresses_3,
                popuplayertitle: 'nz-addresses',
                interactive: true,
                title: 'nz-addresses'
            });
var format_Mini_Marker_Post_4 = new ol.format.GeoJSON();
var features_Mini_Marker_Post_4 = format_Mini_Marker_Post_4.readFeatures(json_Mini_Marker_Post_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mini_Marker_Post_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mini_Marker_Post_4.addFeatures(features_Mini_Marker_Post_4);
var lyr_Mini_Marker_Post_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mini_Marker_Post_4, 
                style: style_Mini_Marker_Post_4,
                popuplayertitle: 'Mini_Marker_Post',
                interactive: false,
                title: '<img src="styles/legend/Mini_Marker_Post_4.png" /> Mini_Marker_Post'
            });
var format_Lateral_and_Joint_Locaiton_5 = new ol.format.GeoJSON();
var features_Lateral_and_Joint_Locaiton_5 = format_Lateral_and_Joint_Locaiton_5.readFeatures(json_Lateral_and_Joint_Locaiton_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lateral_and_Joint_Locaiton_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lateral_and_Joint_Locaiton_5.addFeatures(features_Lateral_and_Joint_Locaiton_5);
var lyr_Lateral_and_Joint_Locaiton_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lateral_and_Joint_Locaiton_5, 
                style: style_Lateral_and_Joint_Locaiton_5,
                popuplayertitle: 'Lateral_and_Joint_Locaiton',
                interactive: true,
                title: '<img src="styles/legend/Lateral_and_Joint_Locaiton_5.png" /> Lateral_and_Joint_Locaiton'
            });
var format_Duct_Point_6 = new ol.format.GeoJSON();
var features_Duct_Point_6 = format_Duct_Point_6.readFeatures(json_Duct_Point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Duct_Point_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Duct_Point_6.addFeatures(features_Duct_Point_6);
var lyr_Duct_Point_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Duct_Point_6, 
                style: style_Duct_Point_6,
                popuplayertitle: 'Duct_Point',
                interactive: true,
                title: '<img src="styles/legend/Duct_Point_6.png" /> Duct_Point'
            });
var format_Pit_Location_7 = new ol.format.GeoJSON();
var features_Pit_Location_7 = format_Pit_Location_7.readFeatures(json_Pit_Location_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pit_Location_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pit_Location_7.addFeatures(features_Pit_Location_7);
var lyr_Pit_Location_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pit_Location_7, 
                style: style_Pit_Location_7,
                popuplayertitle: 'Pit_Location',
                interactive: true,
                title: '<img src="styles/legend/Pit_Location_7.png" /> Pit_Location'
            });
var format_New_Duct_Line_8 = new ol.format.GeoJSON();
var features_New_Duct_Line_8 = format_New_Duct_Line_8.readFeatures(json_New_Duct_Line_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_New_Duct_Line_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_Duct_Line_8.addFeatures(features_New_Duct_Line_8);
var lyr_New_Duct_Line_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_New_Duct_Line_8, 
                style: style_New_Duct_Line_8,
                popuplayertitle: 'New_Duct_Line',
                interactive: true,
                title: '<img src="styles/legend/New_Duct_Line_8.png" /> New_Duct_Line'
            });

lyr_Waikato03mRuralAerialPhotos20232024_0.setVisible(true);lyr_nzroadsaddressing_1.setVisible(true);lyr_nzprimarylandparcels_2.setVisible(true);lyr_nzaddresses_3.setVisible(true);lyr_Mini_Marker_Post_4.setVisible(true);lyr_Lateral_and_Joint_Locaiton_5.setVisible(true);lyr_Duct_Point_6.setVisible(true);lyr_Pit_Location_7.setVisible(true);lyr_New_Duct_Line_8.setVisible(true);
var layersList = [lyr_Waikato03mRuralAerialPhotos20232024_0,lyr_nzroadsaddressing_1,lyr_nzprimarylandparcels_2,lyr_nzaddresses_3,lyr_Mini_Marker_Post_4,lyr_Lateral_and_Joint_Locaiton_5,lyr_Duct_Point_6,lyr_Pit_Location_7,lyr_New_Duct_Line_8];
lyr_nzroadsaddressing_1.set('fieldAliases', {'road_id': 'road_id', 'geometry_c': 'geometry_c', 'road_type': 'road_type', 'road_name_': 'road_name_', 'full_road_': 'full_road_', 'road_nam_1': 'road_nam_1', 'road_nam_2': 'road_nam_2', 'road_nam_3': 'road_nam_3', 'road_nam_4': 'road_nam_4', 'road_nam_5': 'road_nam_5', 'route_name': 'route_name', 'route_na_1': 'route_na_1', 'route_na_2': 'route_na_2', 'route_na_3': 'route_na_3', 'full_roa_1': 'full_roa_1', 'road_nam_6': 'road_nam_6', 'road_nam_7': 'road_nam_7', });
lyr_nzprimarylandparcels_2.set('fieldAliases', {'id': 'id', 'appellatio': 'appellatio', 'affected_s': 'affected_s', 'parcel_int': 'parcel_int', 'topology_t': 'topology_t', 'statutory_': 'statutory_', 'land_distr': 'land_distr', 'titles': 'titles', 'survey_are': 'survey_are', 'calc_area': 'calc_area', });
lyr_nzaddresses_3.set('fieldAliases', {'address_id': 'address_id', 'source_dat': 'source_dat', 'change_id': 'change_id', 'full_addre': 'full_addre', 'full_road_': 'full_road_', 'full_add_1': 'full_add_1', 'territoria': 'territoria', 'unit_type': 'unit_type', 'unit_value': 'unit_value', 'level_type': 'level_type', 'level_valu': 'level_valu', 'address_nu': 'address_nu', 'address__1': 'address__1', 'address__2': 'address__2', 'address__3': 'address__3', 'road_name_': 'road_name_', 'road_name': 'road_name', 'road_type_': 'road_type_', 'road_suffi': 'road_suffi', 'water_name': 'water_name', 'water_body': 'water_body', 'suburb_loc': 'suburb_loc', 'town_city': 'town_city', 'address_cl': 'address_cl', 'address_li': 'address_li', 'gd2000_xco': 'gd2000_xco', 'gd2000_yco': 'gd2000_yco', 'road_nam_1': 'road_nam_1', 'water_na_1': 'water_na_1', 'water_bo_1': 'water_bo_1', 'suburb_l_1': 'suburb_l_1', 'town_city_': 'town_city_', 'full_roa_1': 'full_roa_1', 'full_add_2': 'full_add_2', });
lyr_Mini_Marker_Post_4.set('fieldAliases', {'GlobalID': 'GlobalID', 'esrignss_s': 'esrignss_s', 'esrignss_d': 'esrignss_d', 'esrisnsr_a': 'esrisnsr_a', 'esrignss_p': 'esrignss_p', 'esrignss_r': 'esrignss_r', 'esrignss_h': 'esrignss_h', 'esrignss_v': 'esrignss_v', 'esrignss_l': 'esrignss_l', 'esrignss_1': 'esrignss_1', 'esrignss_a': 'esrignss_a', 'esrignss_2': 'esrignss_2', 'esrignss_3': 'esrignss_3', 'esrignss_4': 'esrignss_4', 'esrignss_f': 'esrignss_f', 'esrignss_c': 'esrignss_c', 'esrignss_5': 'esrignss_5', 'esrignss_n': 'esrignss_n', 'esrignss_6': 'esrignss_6', 'esrignss_7': 'esrignss_7', 'esrignss_8': 'esrignss_8', 'esrignss_9': 'esrignss_9', 'esrigns_10': 'esrigns_10', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'Comments': 'Comments', 'Address_No': 'Address_No', });
lyr_Lateral_and_Joint_Locaiton_5.set('fieldAliases', {'GlobalID': 'GlobalID', 'esrignss_s': 'esrignss_s', 'esrignss_d': 'esrignss_d', 'esrisnsr_a': 'esrisnsr_a', 'esrignss_p': 'esrignss_p', 'esrignss_r': 'esrignss_r', 'esrignss_h': 'esrignss_h', 'esrignss_v': 'esrignss_v', 'esrignss_l': 'esrignss_l', 'esrignss_1': 'esrignss_1', 'esrignss_a': 'esrignss_a', 'esrignss_2': 'esrignss_2', 'esrignss_3': 'esrignss_3', 'esrignss_4': 'esrignss_4', 'esrignss_f': 'esrignss_f', 'esrignss_c': 'esrignss_c', 'esrignss_5': 'esrignss_5', 'esrignss_n': 'esrignss_n', 'esrignss_6': 'esrignss_6', 'esrignss_7': 'esrignss_7', 'esrignss_8': 'esrignss_8', 'esrignss_9': 'esrignss_9', 'esrigns_10': 'esrigns_10', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'Comments': 'Comments', 'Joint_Type': 'Joint_Type', });
lyr_Duct_Point_6.set('fieldAliases', {'GlobalID': 'GlobalID', 'esrignss_s': 'esrignss_s', 'esrignss_d': 'esrignss_d', 'esrisnsr_a': 'esrisnsr_a', 'esrignss_p': 'esrignss_p', 'esrignss_r': 'esrignss_r', 'esrignss_h': 'esrignss_h', 'esrignss_v': 'esrignss_v', 'esrignss_l': 'esrignss_l', 'esrignss_1': 'esrignss_1', 'esrignss_a': 'esrignss_a', 'esrignss_2': 'esrignss_2', 'esrignss_3': 'esrignss_3', 'esrignss_4': 'esrignss_4', 'esrignss_f': 'esrignss_f', 'esrignss_c': 'esrignss_c', 'esrignss_5': 'esrignss_5', 'esrignss_n': 'esrignss_n', 'esrignss_6': 'esrignss_6', 'esrignss_7': 'esrignss_7', 'esrignss_8': 'esrignss_8', 'esrignss_9': 'esrignss_9', 'esrigns_10': 'esrigns_10', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'Comments': 'Comments', 'Duct_Depth': 'Duct_Depth', 'Duct_Type': 'Duct_Type', });
lyr_Pit_Location_7.set('fieldAliases', {'GlobalID': 'GlobalID', 'esrignss_s': 'esrignss_s', 'esrignss_d': 'esrignss_d', 'esrisnsr_a': 'esrisnsr_a', 'esrignss_p': 'esrignss_p', 'esrignss_r': 'esrignss_r', 'esrignss_h': 'esrignss_h', 'esrignss_v': 'esrignss_v', 'esrignss_l': 'esrignss_l', 'esrignss_1': 'esrignss_1', 'esrignss_a': 'esrignss_a', 'esrignss_2': 'esrignss_2', 'esrignss_3': 'esrignss_3', 'esrignss_4': 'esrignss_4', 'esrignss_f': 'esrignss_f', 'esrignss_c': 'esrignss_c', 'esrignss_5': 'esrignss_5', 'esrignss_n': 'esrignss_n', 'esrignss_6': 'esrignss_6', 'esrignss_7': 'esrignss_7', 'esrignss_8': 'esrignss_8', 'esrignss_9': 'esrignss_9', 'esrigns_10': 'esrigns_10', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'Comments': 'Comments', 'Pit_Type': 'Pit_Type', });
lyr_New_Duct_Line_8.set('fieldAliases', {'Duct Type': 'Duct Type', });
lyr_nzroadsaddressing_1.set('fieldImages', {'road_id': 'Range', 'geometry_c': 'TextEdit', 'road_type': 'TextEdit', 'road_name_': 'TextEdit', 'full_road_': 'TextEdit', 'road_nam_1': 'TextEdit', 'road_nam_2': 'TextEdit', 'road_nam_3': 'TextEdit', 'road_nam_4': 'TextEdit', 'road_nam_5': 'TextEdit', 'route_name': 'TextEdit', 'route_na_1': 'Range', 'route_na_2': 'TextEdit', 'route_na_3': 'TextEdit', 'full_roa_1': 'TextEdit', 'road_nam_6': 'TextEdit', 'road_nam_7': 'TextEdit', });
lyr_nzprimarylandparcels_2.set('fieldImages', {'id': 'Range', 'appellatio': 'TextEdit', 'affected_s': 'TextEdit', 'parcel_int': 'TextEdit', 'topology_t': 'TextEdit', 'statutory_': 'TextEdit', 'land_distr': 'TextEdit', 'titles': 'TextEdit', 'survey_are': 'TextEdit', 'calc_area': 'TextEdit', });
lyr_nzaddresses_3.set('fieldImages', {'address_id': 'Range', 'source_dat': 'TextEdit', 'change_id': 'Range', 'full_addre': 'TextEdit', 'full_road_': 'TextEdit', 'full_add_1': 'TextEdit', 'territoria': 'TextEdit', 'unit_type': 'TextEdit', 'unit_value': 'TextEdit', 'level_type': 'TextEdit', 'level_valu': 'TextEdit', 'address_nu': 'TextEdit', 'address__1': 'Range', 'address__2': 'TextEdit', 'address__3': 'Range', 'road_name_': 'TextEdit', 'road_name': 'TextEdit', 'road_type_': 'TextEdit', 'road_suffi': 'TextEdit', 'water_name': 'TextEdit', 'water_body': 'TextEdit', 'suburb_loc': 'TextEdit', 'town_city': 'TextEdit', 'address_cl': 'TextEdit', 'address_li': 'TextEdit', 'gd2000_xco': 'TextEdit', 'gd2000_yco': 'TextEdit', 'road_nam_1': 'TextEdit', 'water_na_1': 'TextEdit', 'water_bo_1': 'TextEdit', 'suburb_l_1': 'TextEdit', 'town_city_': 'TextEdit', 'full_roa_1': 'TextEdit', 'full_add_2': 'TextEdit', });
lyr_Mini_Marker_Post_4.set('fieldImages', {'GlobalID': 'TextEdit', 'esrignss_s': 'TextEdit', 'esrignss_d': 'TextEdit', 'esrisnsr_a': 'TextEdit', 'esrignss_p': 'TextEdit', 'esrignss_r': 'TextEdit', 'esrignss_h': 'TextEdit', 'esrignss_v': 'TextEdit', 'esrignss_l': 'TextEdit', 'esrignss_1': 'TextEdit', 'esrignss_a': 'TextEdit', 'esrignss_2': 'TextEdit', 'esrignss_3': 'TextEdit', 'esrignss_4': 'TextEdit', 'esrignss_f': 'Range', 'esrignss_c': 'TextEdit', 'esrignss_5': 'Range', 'esrignss_n': 'Range', 'esrignss_6': 'DateTime', 'esrignss_7': 'TextEdit', 'esrignss_8': 'TextEdit', 'esrignss_9': 'TextEdit', 'esrigns_10': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'Comments': 'TextEdit', 'Address_No': 'TextEdit', });
lyr_Lateral_and_Joint_Locaiton_5.set('fieldImages', {'GlobalID': 'TextEdit', 'esrignss_s': 'TextEdit', 'esrignss_d': 'TextEdit', 'esrisnsr_a': 'TextEdit', 'esrignss_p': 'TextEdit', 'esrignss_r': 'TextEdit', 'esrignss_h': 'TextEdit', 'esrignss_v': 'TextEdit', 'esrignss_l': 'TextEdit', 'esrignss_1': 'TextEdit', 'esrignss_a': 'TextEdit', 'esrignss_2': 'TextEdit', 'esrignss_3': 'TextEdit', 'esrignss_4': 'TextEdit', 'esrignss_f': 'Range', 'esrignss_c': 'TextEdit', 'esrignss_5': 'Range', 'esrignss_n': 'Range', 'esrignss_6': 'DateTime', 'esrignss_7': 'TextEdit', 'esrignss_8': 'TextEdit', 'esrignss_9': 'TextEdit', 'esrigns_10': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'Comments': 'TextEdit', 'Joint_Type': 'TextEdit', });
lyr_Duct_Point_6.set('fieldImages', {'GlobalID': 'TextEdit', 'esrignss_s': 'TextEdit', 'esrignss_d': 'TextEdit', 'esrisnsr_a': 'TextEdit', 'esrignss_p': 'TextEdit', 'esrignss_r': 'TextEdit', 'esrignss_h': 'TextEdit', 'esrignss_v': 'TextEdit', 'esrignss_l': 'TextEdit', 'esrignss_1': 'TextEdit', 'esrignss_a': 'TextEdit', 'esrignss_2': 'TextEdit', 'esrignss_3': 'TextEdit', 'esrignss_4': 'TextEdit', 'esrignss_f': 'Range', 'esrignss_c': 'TextEdit', 'esrignss_5': 'Range', 'esrignss_n': 'Range', 'esrignss_6': 'DateTime', 'esrignss_7': 'TextEdit', 'esrignss_8': 'TextEdit', 'esrignss_9': 'TextEdit', 'esrigns_10': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'Comments': 'TextEdit', 'Duct_Depth': 'TextEdit', 'Duct_Type': 'TextEdit', });
lyr_Pit_Location_7.set('fieldImages', {'GlobalID': 'TextEdit', 'esrignss_s': 'TextEdit', 'esrignss_d': 'TextEdit', 'esrisnsr_a': 'TextEdit', 'esrignss_p': 'TextEdit', 'esrignss_r': 'TextEdit', 'esrignss_h': 'TextEdit', 'esrignss_v': 'TextEdit', 'esrignss_l': 'TextEdit', 'esrignss_1': 'TextEdit', 'esrignss_a': 'TextEdit', 'esrignss_2': 'TextEdit', 'esrignss_3': 'TextEdit', 'esrignss_4': 'TextEdit', 'esrignss_f': 'Range', 'esrignss_c': 'TextEdit', 'esrignss_5': 'Range', 'esrignss_n': 'Range', 'esrignss_6': 'DateTime', 'esrignss_7': 'TextEdit', 'esrignss_8': 'TextEdit', 'esrignss_9': 'TextEdit', 'esrigns_10': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'Comments': 'TextEdit', 'Pit_Type': 'TextEdit', });
lyr_New_Duct_Line_8.set('fieldImages', {'Duct Type': 'TextEdit', });
lyr_nzroadsaddressing_1.set('fieldLabels', {'road_id': 'no label', 'geometry_c': 'no label', 'road_type': 'no label', 'road_name_': 'no label', 'full_road_': 'no label', 'road_nam_1': 'no label', 'road_nam_2': 'no label', 'road_nam_3': 'no label', 'road_nam_4': 'no label', 'road_nam_5': 'no label', 'route_name': 'no label', 'route_na_1': 'no label', 'route_na_2': 'no label', 'route_na_3': 'no label', 'full_roa_1': 'no label', 'road_nam_6': 'no label', 'road_nam_7': 'no label', });
lyr_nzprimarylandparcels_2.set('fieldLabels', {'id': 'no label', 'appellatio': 'no label', 'affected_s': 'no label', 'parcel_int': 'no label', 'topology_t': 'no label', 'statutory_': 'no label', 'land_distr': 'no label', 'titles': 'no label', 'survey_are': 'no label', 'calc_area': 'no label', });
lyr_nzaddresses_3.set('fieldLabels', {'address_id': 'no label', 'source_dat': 'no label', 'change_id': 'no label', 'full_addre': 'no label', 'full_road_': 'no label', 'full_add_1': 'no label', 'territoria': 'no label', 'unit_type': 'no label', 'unit_value': 'no label', 'level_type': 'no label', 'level_valu': 'no label', 'address_nu': 'no label', 'address__1': 'no label', 'address__2': 'no label', 'address__3': 'no label', 'road_name_': 'no label', 'road_name': 'no label', 'road_type_': 'no label', 'road_suffi': 'no label', 'water_name': 'no label', 'water_body': 'no label', 'suburb_loc': 'no label', 'town_city': 'no label', 'address_cl': 'no label', 'address_li': 'no label', 'gd2000_xco': 'no label', 'gd2000_yco': 'no label', 'road_nam_1': 'no label', 'water_na_1': 'no label', 'water_bo_1': 'no label', 'suburb_l_1': 'no label', 'town_city_': 'no label', 'full_roa_1': 'no label', 'full_add_2': 'no label', });
lyr_Mini_Marker_Post_4.set('fieldLabels', {'GlobalID': 'no label', 'esrignss_s': 'no label', 'esrignss_d': 'no label', 'esrisnsr_a': 'no label', 'esrignss_p': 'no label', 'esrignss_r': 'no label', 'esrignss_h': 'no label', 'esrignss_v': 'no label', 'esrignss_l': 'no label', 'esrignss_1': 'no label', 'esrignss_a': 'no label', 'esrignss_2': 'no label', 'esrignss_3': 'no label', 'esrignss_4': 'no label', 'esrignss_f': 'no label', 'esrignss_c': 'no label', 'esrignss_5': 'no label', 'esrignss_n': 'no label', 'esrignss_6': 'no label', 'esrignss_7': 'no label', 'esrignss_8': 'no label', 'esrignss_9': 'no label', 'esrigns_10': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'Comments': 'no label', 'Address_No': 'no label', });
lyr_Lateral_and_Joint_Locaiton_5.set('fieldLabels', {'GlobalID': 'no label', 'esrignss_s': 'no label', 'esrignss_d': 'no label', 'esrisnsr_a': 'no label', 'esrignss_p': 'no label', 'esrignss_r': 'no label', 'esrignss_h': 'no label', 'esrignss_v': 'no label', 'esrignss_l': 'no label', 'esrignss_1': 'no label', 'esrignss_a': 'no label', 'esrignss_2': 'no label', 'esrignss_3': 'no label', 'esrignss_4': 'no label', 'esrignss_f': 'no label', 'esrignss_c': 'no label', 'esrignss_5': 'no label', 'esrignss_n': 'no label', 'esrignss_6': 'no label', 'esrignss_7': 'no label', 'esrignss_8': 'no label', 'esrignss_9': 'no label', 'esrigns_10': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'Comments': 'no label', 'Joint_Type': 'no label', });
lyr_Duct_Point_6.set('fieldLabels', {'GlobalID': 'no label', 'esrignss_s': 'no label', 'esrignss_d': 'no label', 'esrisnsr_a': 'no label', 'esrignss_p': 'no label', 'esrignss_r': 'no label', 'esrignss_h': 'no label', 'esrignss_v': 'no label', 'esrignss_l': 'no label', 'esrignss_1': 'no label', 'esrignss_a': 'no label', 'esrignss_2': 'no label', 'esrignss_3': 'no label', 'esrignss_4': 'no label', 'esrignss_f': 'no label', 'esrignss_c': 'no label', 'esrignss_5': 'no label', 'esrignss_n': 'no label', 'esrignss_6': 'no label', 'esrignss_7': 'no label', 'esrignss_8': 'no label', 'esrignss_9': 'no label', 'esrigns_10': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'Comments': 'no label', 'Duct_Depth': 'no label', 'Duct_Type': 'no label', });
lyr_Pit_Location_7.set('fieldLabels', {'GlobalID': 'no label', 'esrignss_s': 'no label', 'esrignss_d': 'no label', 'esrisnsr_a': 'no label', 'esrignss_p': 'no label', 'esrignss_r': 'no label', 'esrignss_h': 'no label', 'esrignss_v': 'no label', 'esrignss_l': 'no label', 'esrignss_1': 'no label', 'esrignss_a': 'no label', 'esrignss_2': 'no label', 'esrignss_3': 'no label', 'esrignss_4': 'no label', 'esrignss_f': 'no label', 'esrignss_c': 'no label', 'esrignss_5': 'no label', 'esrignss_n': 'no label', 'esrignss_6': 'no label', 'esrignss_7': 'no label', 'esrignss_8': 'no label', 'esrignss_9': 'no label', 'esrigns_10': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'Comments': 'no label', 'Pit_Type': 'no label', });
lyr_New_Duct_Line_8.set('fieldLabels', {'Duct Type': 'no label', });
lyr_New_Duct_Line_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});