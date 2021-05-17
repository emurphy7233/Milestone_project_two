function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 54.13470490297628, lng: -6.15013341089825 },
        mapTypeId: "terrain",
    });
  
    //Trail Points

    //Trail 1
    new google.maps.Marker({
        position: { lat: 54.165107000804916, lng: -6.126748393885729 },
        map,
        title: "Start",
    });
    new google.maps.Marker({
        position: { lat: 54.09738956647193, lng: -6.187492750549725 },
        map,
        title: "End",
    });
    //Leitrim Lodge Car Park
    const trailPointsLeitrim = [
        { lat: 54.165107000804916, lng: -6.126748393885729},
        //in between points
        { lat: 54.16293703673874, lng: -6.123080763979622},
        { lat: 54.162208371395245, lng: -6.122597966395519},
        { lat: 54.15808740170053, lng: -6.125290904087022},
        { lat: 54.152659156901976, lng: -6.129732642146254},
        { lat: 54.15175944307971, lng: -6.132387040784184},
        { lat: 54.1495664914009, lng: -6.13416262243599},
        { lat: 54.14823435270319, lng: -6.138035731944021},
        { lat: 54.140793695397434, lng: -6.1454815442705275},
        { lat: 54.13687801533665, lng: -6.147412734958416},
        //Yellow Water picnic site
        { lat: 54.13470490297628, lng: -6.15013341089825 },
        //in between points
        { lat: 54.13108238095697, lng: -6.154096799715513},
        { lat: 54.128794076426324, lng: -6.155019479638074},
        { lat: 54.126298171621805, lng: -6.156081634387398},
        { lat: 54.122022720858745, lng: -6.157894807664323},
        { lat: 54.11948239121126, lng: -6.159729438587651},
        { lat: 54.11716829205964, lng: -6.163184123801408},
        { lat: 54.114137129802366, lng: -6.167100148991448},
        { lat: 54.11073466913682, lng: -6.172164159545557},
        { lat: 54.10823767649317, lng: -6.174781995817559},
        { lat: 54.10605109493324, lng: -6.178550973591273},
        { lat: 54.10258468301255, lng: -6.182253836578591},
        { lat: 54.101484633680805, lng: -6.182747551696036},
        { lat: 54.10017466846478, lng: -6.183377038475855},
        { lat: 54.09768489679693, lng: -6.185956699548157},
        { lat: 54.097315760954515, lng: -6.187092244105053},
        //Kilbroney car park
        { lat: 54.09738956647193, lng: -6.187492750549725 }
    ];
    
   
    //Don't touch for now
    const flightPath = new google.maps.Polyline({
        path: trailPointsLeitrim,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 0,
        strokeWeight: 2,
        icons: [{
            icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#C83939',
            fillOpacity: 1,
            scale: 2,
            strokeColor: '#C83939',
            strokeOpacity: 1,
            },
            offset: '0',
            repeat: '10px'
        }]
    });
    flightPath.setMap(map);
}