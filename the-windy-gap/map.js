function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14.5,
        center: { lat: 54.32542702113202, lng: -6.034864139448719},
        mapTypeId: "terrain",
    });
  
    //Hike 3
    
        //The Windy Gap
    new google.maps.Marker({
        position:  {lat: 54.320410011321904, lng: -6.042633172959346},
        map,
        title: "Start",
    });
    new google.maps.Marker({
        position: { lat: 54.32946975028495, lng: -6.030431698445043},
        map,
        title: "End",
    });
    //The Windy Gap
    const trailPointsWindyGap = [
            {lat: 54.320410011321904, lng: -6.042633172959346},

            //Road to Trail point
           { lat: 54.321495990567485, lng: -6.043551352911494},

                //in between points
                { lat: 54.32184627428714, lng: -6.039157629575559},
                { lat: 54.32265899637141, lng: -6.037764134841469},
                { lat: 54.32455528546058, lng: -6.035906141862679},
                { lat: 54.32542702113202, lng: -6.034864139448719},
                { lat: 54.32762495374743, lng: -6.034621917665711},
                { lat: 54.32706559387809, lng: -6.0310757910169785},
                { lat: 54.32863630231954, lng: -6.030620414020271},
            

                //Windy Gap Turning point
                { lat: 54.32946975028495, lng: -6.030431698445043}
    //End of Granite Trail 

        ];

    //End of Hike 3
    const flightPath = new google.maps.Polyline({
        path: trailPointsWindyGap,
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