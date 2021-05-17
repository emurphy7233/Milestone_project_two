function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {lat: 54.19823044022382, lng: -5.895914244783678},
        mapTypeId: "terrain",
    });
  
    //Trail Points

    //Trail 3
    new google.maps.Marker({
        position:  {lat: 54.19766870260522, lng: -5.887142974820253},
        map,
        title: "Start",
    });
    new google.maps.Marker({
        //End same as start
        position: {lat: 54.19766870260522, lng: -5.887142974820253},
        map,
        title: "End",
    });
    
//Hike 3
    
        //Granite Trail
        const trailPointsWindyGap = [

            //Starting point- Granite trail sign post near Newcastle Yacht Club 
            //(can be found on Google Maps)
            {lat: 54.19766870260522, lng: -5.887142974820253},

           //Google Maps point
           {lat: 54.197486078494634, lng: -5.887046754265558},

           //Road crossing
           {lat: 54.19705953547074, lng: -5.887211398323683},

           //Google Maps trail
           {lat: 54.196114955494544, lng: -5.8883816121491215},
           {lat: 54.19554408044183, lng: -5.889221463189373},
           {lat: 54.19387352376292, lng: -5.891669028966435},
           {lat: 54.19234329074853, lng: -5.89400461461457},
           {lat: 54.19351787832557, lng: -5.899155700795108},

//End of Google Maps trail

            {lat: 54.19441400846484, lng: -5.900708524367234},
            {lat: 54.195208710833946, lng: -5.902424389565289},
            {lat: 54.19527842083704, lng: -5.906475737840023},
            {lat: 54.195989456152944, lng: -5.9095261647762936},
            {lat: 54.19664471316201, lng: -5.910264940049922},

//River Crossing
            {lat: 54.19715863779291, lng: -5.910482392936577},
            {lat: 54.19815690086672, lng: -5.907910338351156},
            {lat: 54.199777218561756, lng: -5.902667303985598},
            {lat: 54.201658036515596, lng: -5.898895634648823},
            {lat: 54.204590992756145, lng: -5.899279615807321},
            {lat: 54.20448530427266, lng: -5.898014736646563},
            {lat: 54.204881634756376, lng: -5.896298114996807},
            {lat: 54.20535722631834, lng: -5.895055823013432},

//Donard Car park
            {lat: 54.205991339884854, lng: -5.894513731966139},


            // Road back to starting point
            {lat: 54.2055125831732, lng: -5.894028795391971},
            {lat: 54.20541098704993, lng: -5.892928669377341},
            {lat: 54.2044204117638, lng: -5.892581261129891},
            {lat: 54.20171102463727, lng: -5.8915245611263405},
            {lat: 54.20050020980926, lng: -5.89038100901607},
            {lat: 54.1992470214379, lng: -5.8889189993367586},
            {lat: 54.19766870260522, lng: -5.887142974820253}


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