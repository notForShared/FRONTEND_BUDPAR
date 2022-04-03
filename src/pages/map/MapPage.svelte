<script>
  import MapComponent from "../../components/map/MapComponent.svelte";
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{ duration: 500 }}
  class="flex items-center justify-center w-full h-screen"
>
  <MapComponent />
</div>
