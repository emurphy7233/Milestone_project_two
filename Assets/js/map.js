function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 54.15988509570276, lng: -6.0766605137414045 },
    mapTypeId: "terrain",
  });
  
  //Trail Points
  const flightPlanCoordinates = [
    { lat: 54.15988509570276, lng: -6.0766605137414045 },
    { lat: 54.155009972104736, lng: -6.078892111680068 }
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  flightPath.setMap(map);
}