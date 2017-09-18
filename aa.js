var geo = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":192,"adi":"İsimsiz Polygon","fid":"0","cevre":"0","alan":"0"},"geometry":{"type":"Polygon","coordinates":[[[32.481873035430915,37.872973285835215],[32.49146461486817,37.877749681754686],[32.49275207519532,37.87085598999976],[32.485349178314216,37.870229258761356],[32.48502731323243,37.87249901685653],[32.48080015182496,37.87026313626189],[32.476379871368415,37.87312572878711],[32.48148679733277,37.87485339352928],[32.481873035430915,37.872973285835215]]]}}]};


function eylem(a) {


    require(["req"],function (shpwrite) {


// (optional) set names for feature types and zipped folder
        var options = {
            folder: 'myshapes',
            types: {
                point: 'mypoints',
                polygon: 'mypolygons',
                line: 'mylines'
            }
        }
// a GeoJSON bridge for features
        shpwrite.download(a, options);

    });
}



eylem(geo)
