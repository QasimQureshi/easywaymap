geoip2.city (
  // success handler
  function(data){
    mapboxgl.accessToken = 'pk.eyJ1IjoicWFzaW01NyIsImEiOiJjanZzMTN4YmYwbTJoNDRtc3lveTUycjR5In0.NHo5uv7_XQpM7fPEus_M-w';
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [data.location.longitude, data.location.latitude], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
    
    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      }));
},
  // error
  function(data) {
    // error loading location
})

document.addEventListener('DOMContentLoaded', (event) => {
  
  // Ensuring that anchors with an href of '#' don't cause the page to jump
  document.querySelectorAll('a').forEach( (anchor) => {
    
    if( anchor.attributes.href.value === '#' ) {
      
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
      })
    }
    
  })
})