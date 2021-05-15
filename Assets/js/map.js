function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 54.15988509570276, lng: -6.0766605137414045 },
    mapTypeId: "terrain",
  });
  
  //Trail Points
  const flightPlanCoordinates = [
      //Leitrim Lodge Car Park
    { lat: 54.165107000804916, lng: -6.126748393885729},
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
    { lat: 54.13470490297628, lng: -6.15013341089825 }














    //Kilbroney car park
    { lat: 54.09738956647193, lng: -6.187492750549725 }
       
  ];


  //Don't touch
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  flightPath.setMap(map);
}