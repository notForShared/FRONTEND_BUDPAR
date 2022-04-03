<script>
  import MapIcon from "../../assets/svg/MapIcon.svelte";
  import { link } from "svelte-spa-router";
</script>

<div
  class="fixed hidden md:flex justify-center items-center flex-col mt-28 px-11 bottom-11 right-0 __map-button"
>
  <a
    href="/map"
    class="rounded-full bg-[#00d6a1] w-[5rem] h-[5rem] flex justify-center items-center flex-col"
    use:link
  >
    <MapIcon />
  </a>
  <span
    class="mt-3 px-6 font-bold capitalize border-black border rounded-full bg-white"
    >click me</span
  >
</div>

<style>
  .__map-button {
    z-index: 990;
  }
</style>
