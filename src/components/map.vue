<template>
    <div id="map">

    </div>
</template>

<script>
export default {
    name : 'Gmap',
}
async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7t-hJpnmqk9V06rh7e-bH14rnGUfavDM&region=FR&language=fr&callback=initMap" type="text/javascript">;
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const france = { lat: 47.528368, lng: 2.553927 };
    const paris = { lat: 48.838241, lng: 2.197793 };
    const nantes = { lat: 47.158408, lng: -1.470015 };
    const lyon = { lat: 45.759838, lng: 4.926817 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: france,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: paris,
      map: map,
    });
    const marker2 = new google.maps.Marker({
      position: nantes,
      map: map,
    });
    const marker3 = new google.maps.Marker({
      position: lyon,
      map: map,
    });
  }

</script>
<style scoped>
    #map{
    width: 400px;
    height: 500px;
    margin: auto;
    margin-top: 50px;
}
</style>