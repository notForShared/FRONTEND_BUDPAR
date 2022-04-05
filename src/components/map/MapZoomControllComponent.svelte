<script>
  import { createEventDispatcher } from "svelte";

  import ZoomInIcon from "../../assets/svg/ZoomInIcon.svelte";
  import ZoomOutIcon from "../../assets/svg/ZoomOutIcon.svelte";

  const dispatcher = createEventDispatcher();

  function zoomIn() {
    dispatcher("map-zoom-in");
  }

  function zoomOut() {
    dispatcher("map-zoom-out");
  }
</script>

<div class="flex flex-col md:flex-row px-3 md:px-10 py-24">
  <button
    class="flex rounded bg-[#00d6a1] px-4 py-[.4rem] duration-300 hover:bg-[#088667]"
    on:click={zoomIn}
  >
    <ZoomInIcon />
  </button>
  <button
    class="flex rounded bg-[#00d6a1] px-4 md:ml-2 mt-2 md:mt-0 py-[.4rem] duration-300 hover:bg-[#088667]"
    on:click={zoomOut}
  >
    <ZoomOutIcon />
  </button>
</div>
