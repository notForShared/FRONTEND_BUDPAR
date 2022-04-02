<script>
  import MapPinHollowIcon from "../../assets/svg/MapPinHollowIcon.svelte";
  import SearchLightIcon from "../../assets/svg/SearchLightIcon.svelte";
</script>

<div class="__search-card flex justify-center w-full pt-10 lg:absolute lg:pb-5">
  <div
    class="__wrapper flex flex-col items-start p-5 justify-center bg-white drop-shadow-md w-full md:w-3/6 rounded-xl"
  >
    <div class="__search-text pl-2 pb-3">
      <MapPinHollowIcon />
      <span
        class="capitalize text-[12px] lg:text-base lg:font-semibold text-[#18263e]"
        >temukan tempat wisata favorit kamu</span
      >
    </div>
    <div class="__search-bar w-full flex items-center">
      <input
        class="border-2 border-[#00d6a1] rounded-lg h-10 w-11/12 px-2"
        type="text"
      />
      <button
        class="flex items-center ml-2 px-2 py-2 text-white font-bold rounded-md bg-[#00d6a1] w-1/12"
      >
        <SearchLightIcon />
        <span class="hidden md:block pl-2">Cari</span>
      </button>
    </div>

    <div class="__popular-site pl-2 pt-4 text-[#18263e] inline-block">
      <span>Popular : </span>
      <a class="text-[#18263e] underline font-semibold" href="#!"
        >Wisata Binuang</a
      >
      <a class="text-[#18263e] underline font-semibold" href="#!"
        >Wisata Bungur</a
      >
      <a class="text-[#18263e] underline font-semibold" href="#!"
        >Wisata Bukit Buluan</a
      >
    </div>
  </div>
</div>

<style>
  .__search-card {
    bottom: -5em;
  }
</style>
