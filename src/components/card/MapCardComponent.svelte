<script>
  import L from "leaflet";
  import { onMount } from "svelte";

  import { markerTour } from "../../lib/module/map.marker";

  export let latlng;

  let cardMap;

  function updateSize() {
    if (cardMap) {
      cardMap.invalidateSize();
    }
  }

  onMount(() => {
    cardMap = L.map(document.querySelector(".__map-card"), {
      doubleClickZoom: false,
      scrollWheelZoom: false,
      zoomControl: false,
    }).setView([-2.9472475, 115.1483882], 13);

    L.marker(latlng, { icon: markerTour() }).addTo(cardMap);
    cardMap.flyTo(latlng, 13);

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(cardMap);
  });
</script>

<svelte:window on:resize={updateSize} />

<div class="w-full drop-shadow-md">
  <div class="map __map-card h-[250px] rounded-[10px]" />
</div>
