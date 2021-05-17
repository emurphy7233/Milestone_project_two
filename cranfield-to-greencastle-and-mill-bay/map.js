function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13.5,
        center: {lat: 54.035075882323596, lng: -6.087930615181049},
        mapTypeId: "terrain",
    });
  
    //Trail Points

    //Trail 4
    new google.maps.Marker({
        position:  {lat: 54.02944417941808, lng:-6.069639424281907},
        map,
        title: "Start",
    });
    new google.maps.Marker({
        //End same as start
        position: {lat: 54.02944417941808, lng:-6.069639424281907},
        map,
        title: "End",
    });
    
//Hike 4
    
        //Start of Cranfield to Greencastle and Mill Bay 
        const trailPointsCranfieldGreencastleMillBay = [

            //Starting point - Cranfield Caravan park
            {lat: 54.02944417941808, lng:-6.069639424281907},

            // Trail to turning point
            {lat: 54.03006684798428, lng: -6.073685090923546},
            {lat: 54.02953919054355, lng: -6.081583064596299},
            //Trail to Greencastle 
            {lat: 54.033386539171296, lng: -6.085064162599647},
            {lat: 54.03681587551615, lng: -6.09056654236218},
            
            //Carlingford Lough Ferry 
            {lat: 54.03832265544988, lng: -6.098424328319547},
            {lat: 54.040074775128105, lng: -6.104075563773503},
            {lat: 54.040330044702344, lng: -6.1068814221086125},

            // Road back to starting point - Greencastle Pier Rd.
            {lat: 54.04030683845809, lng: -6.106012001184155},
            {lat: 54.03971795274088, lng: -6.101797758478423},
            {lat: 54.03884241065414, lng: -6.091084874706174},
            {lat: 54.04010707663772, lng: -6.07915712782573},
            {lat: 54.04010707663772, lng: -6.077113948961951},
            {lat: 54.0407231820245, lng: -6.075070770098172},
            {lat: 54.040917739723085, lng: -6.068223359851992},

            //Benagh Rd.
            {lat: 54.0373507038679, lng: -6.067671148732035},
            {lat: 54.03355633890007, lng: -6.06800247503427},
            {lat: 54.03012243368974, lng: -6.0690529849366275},

            {lat: 54.02944417941808, lng:-6.069639424281907}
            //End of Cranfield to Greencastle and Mill Bay 

        ];

    //End of Hike 4
    

    const flightPath = new google.maps.Polyline({
        path: trailPointsCranfieldGreencastleMillBay,
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