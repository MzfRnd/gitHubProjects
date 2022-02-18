// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: new google.maps.LatLng(52.19343273416053, 20.899325058038187),
//     zoom: 16,
//   });

//   // const iconBase = "./avatars";
//   const icons = {
//     muzaffer: {
//       icon: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
//     },
//   };
//   const features = [
//     {
//       position: new google.maps.LatLng(52.19343273416053, 20.899325058038187),
//       type: "muzaffer",
//     },
//     {
//       position: new google.maps.LatLng(59.22079022762899, 17.937983317114234),
//       type: "info",
//     },
//   ];

//   // Create markers.

//   function addMarker(feature) {
//     var marker = new google.maps.Marker({
//       position: feature.position,
//       icon: icons[feature.type].icon,
//       map: map,
//     });
//   }
// }

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(52.19343273416053, 20.899325058038187),
    zoom: 4,
  });

  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
    muzaffer: {
      icon: "./avatars/muzaffer.png",
    },
    alex: {
      icon: "./avatars/alex.png",
    },
    halema: {
      icon: "./avatars/Haleeema.png",
    },
    hassen: {
      icon: "./avatars/Hassen.png",
    },
    mall: {
      icon: "./avatars/mall.png",
    },
    mirinka: {
      icon: "./avatars/mirinka.png",
    },
    raluca: {
      icon: "./avatars/raluca.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(59.22079022762899, 17.937983317114234),
      type: "halema",
    },
    {
      position: new google.maps.LatLng(52.19343273416053, 20.899325058038187),
      type: "muzaffer",
    },
    {
      position: new google.maps.LatLng(49.23052066839969, 28.467679689472735),
      type: "alex",
    },
    {
      position: new google.maps.LatLng(59.236069446273255, 17.839677400309043),
      type: "hassen",
    },
    {
      position: new google.maps.LatLng(59.431285281804556, 24.769260091156706),
      type: "mall",
    },
    {
      position: new google.maps.LatLng(59.36637129990946, 17.99704471833556),
      type: "mirinka",
    },
    {
      position: new google.maps.LatLng(44.423334155322735, 26.012878918115014),
      type: "raluca",
    },
    {
      position: new google.maps.LatLng(44.423334155322735, 26.012878918115014),
      type: "raluca",
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}
