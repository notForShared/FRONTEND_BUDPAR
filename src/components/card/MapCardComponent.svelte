<script>
  import L from "leaflet";
  import { onMount } from "svelte";

  import {
    markerTour,
    markerHotel,
    markerResto,
  } from "../../lib/module/map.marker";

  export let latlng;
  export let objectType = "tours";

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

    if (objectType === "hotel") {
      L.marker(latlng, { icon: markerHotel() }).addTo(cardMap);
    } else if (objectType === "tours") {
      L.marker(latlng, { icon: markerTour() }).addTo(cardMap);
    } else if (objectType === "resto") {
      L.marker(latlng, { icon: markerResto() }).addTo(cardMap);
    }

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
