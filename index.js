let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -54.812341,
        lng: -68.320416,
      },
      map,
      title: "Ushuaia",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 39.468820,
        lng: -0.376321,
      },
      map,
      title: "Valencia",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -23.140198,
        lng: -44.167835,
      },
      map,
      title: "Isla grande",
    })
  );
}
