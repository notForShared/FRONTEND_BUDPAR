<script>
  import { pop } from "svelte-spa-router";
  import { onMount } from "svelte";
  import L from "leaflet";

  import MapZoomControllComponent from "./MapZoomControllComponent.svelte";
  import MapControlComponent from "./MapToolbarComponent.svelte";

  import {
    markerHotel,
    markerResto,
    markerTour,
  } from "../../lib/module/map.marker";

  let map;

  function updateSize() {
    if (map) {
      map.invalidateSize();
    }
  }

  onMount(() => {
    map = L.map(document.querySelector(".map"), {
      doubleClickZoom: false,
      scrollWheelZoom: false,
      zoomControl: false,
    }).setView([-2.9472475, 115.1483882], 11);

    // Leaflet control
    let toolbarComponent;
    let zoomControlComponent;
    let toolbar = L.control({ position: "topleft" });
    let zoomControl = L.control({ position: "bottomright" });

    // zoom controll
    zoomControl.onAdd = (map) => {
      let wrapper = L.DomUtil.create("div");
      zoomControlComponent = new MapZoomControllComponent({
        target: wrapper,
        props: {},
      });

      zoomControlComponent.$on("map-zoom-in", () => {
        map.zoomIn();
      });
      zoomControlComponent.$on("map-zoom-out", () => {
        map.zoomOut();
      });

      return wrapper;
    };

    // toolbar controll
    toolbar.onAdd = (map) => {
      let wrapper = L.DomUtil.create("div");
      toolbarComponent = new MapControlComponent({
        target: wrapper,
        props: {},
      });

      toolbarComponent.$on("back-to-list", () => {
        pop();
      });

      toolbarComponent.$on("map-filter", () => {
        console.log("show filter");
      });

      return wrapper;
    };

    toolbar.onRemove = (map) => {
      if (toolbarComponent) {
        toolbarComponent.$destroy();
        toolbarComponent = null;
      }
    };

    // initialize Marker
    let hotel = L.marker([-2.9299291, 115.1520053], { icon: markerHotel() });
    let resto = L.marker([-2.9473604, 115.1561787], { icon: markerResto() });
    let tour = L.marker([-3.1325291, 115.0887266], { icon: markerTour() });

    // bind marker to popup
    hotel.bindPopup("I am a circle.");
    resto.bindPopup("I am a circle.");
    tour.bindPopup("I am a circle.");

    // registering custom control to map
    zoomControl.addTo(map);
    toolbar.addTo(map);

    // registering marker to map
    hotel.addTo(map);
    resto.addTo(map);
    tour.addTo(map);

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

<div class="w-full">
  <div class="map h-screen" />
</div>
