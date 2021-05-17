function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {lat: 54.16984332591103, lng: -5.876253303291823},
        mapTypeId: "terrain",
    });
  
    //Trail Points

    //Trail 5
    new google.maps.Marker({
        position:  {lat: 54.17459640918802, lng: -5.873778334102578},
        map,
        title: "Start",
    });
    new google.maps.Marker({

        position: {lat: 54.16342930640427, lng: -5.874132738237468},
        map,
        title: "End",
    });
    
//Hike 5
    
        //Start of Bloody Bridge Coastal Path 
        const trailPointsBloodyBridgeCoastalPath = [

           //Starting point - Bloody Bridge Car Park
            {lat: 54.17459640918802, lng: -5.873778334102578},

            {lat: 54.17455005949901, lng: -5.873466697811195},
            {lat: 54.173740052069974, lng: -5.873547263543038},
            
            {lat: 54.17341615173105, lng: -5.873582964328021},
            {lat: 54.17314031202899, lng: -5.873957822502704},
            {lat: 54.172975225266825, lng: -5.874011373670516},

            //After the River
            {lat: 54.172885367623415, lng: -5.8740934854857425},
            {lat: 54.17204156649861, lng: -5.873882706290635},
            {lat: 54.17188710402129, lng: -5.873807312426952},
            {lat: 54.17123614865489, lng: -5.873631393405426},
            {lat: 54.17083159497175, lng: -5.873235575621094},
            {lat: 54.16992317361751, lng: -5.872864889117498},
            {lat: 54.1692427640007, lng: -5.872626141869671},
            {lat: 54.16819822151506, lng: -5.872475354129774},
            {lat: 54.16648696339484, lng: -5.872694201102586},
            {lat: 54.1658486291197, lng: -5.872996568763561},
            {lat: 54.16491524864458, lng: -5.873436376300238},
            
            //End point - Same as beginning
            {lat: 54.16342930640427, lng: -5.874132738237468},
           
            //End of Bloody Bridge Coastal Path 

        ];

    //End of Hike 5
    

    const flightPath = new google.maps.Polyline({
        path: trailPointsBloodyBridgeCoastalPath,
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