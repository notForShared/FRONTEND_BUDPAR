<script>
  import { onMount } from "svelte";
  import L from "leaflet";

  let map;

  function updateSize() {
    if (map) {
      map.invalidateSize();
    }
  }

  onMount(() => {
    map = L.map(document.querySelector(".map")).setView(
      [-2.9472475, 115.1483882],
      14
    );

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  });
</script>

<svelte:window on:resize={updateSize} />

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  />

  <title>home</title>
</svelte:head>

<div class="w-3/6 drop-shadow-md rounded">
  <div class="map h-80 rounded" />
</div>
