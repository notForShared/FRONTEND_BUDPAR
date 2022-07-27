<script>
  import { link } from "svelte-spa-router";
  import Lazy from "svelte-lazy";

  import MapPinFillIcon from "../../assets/svg/MapPinFillIcon.svelte";
  import { truncate } from "../../lib/module/truncate";

  export let imageUrl;
  export let hotelTitle;
  export let hotelAddress;
  export let hotelDetail;
</script>

<div class="__hotel-content-card mx-auto">
  <div class="__hotel-object-card-wrapper relative">
    <a
      href="/hotel-detail?{`${new URLSearchParams({
        title: hotelTitle,
        q: hotelDetail,
      }).toString()}`}"
      use:link
    >
      <Lazy height={350} fadeOption={{ delay: 500, duration: 1000 }}>
        <img
          src={imageUrl}
          alt={hotelTitle}
<<<<<<< HEAD
          class="h-[350px] w-[291px] md:w-auto rounded-[20px] drop-shadow-md"
=======
          class="h-[350px] rounded-[20px] object-cover drop-shadow-md"
>>>>>>> 419f8c13c94b06e9ebdf63554c1157d7dece98d9
        />
      </Lazy>

      <div
<<<<<<< HEAD
        class="__card-content absolute bottom-0 w-full rounded-b-[20px] px-5 py-5 text-white"
=======
        class="__card-content rounded-b-[20px] w-[291px] lg:w-full px-6 absolute bottom-0 py-5 text-white"
>>>>>>> 419f8c13c94b06e9ebdf63554c1157d7dece98d9
      >
        <h3 class="text-xl font-bold capitalize pb-2 __text-shadow">
          {hotelTitle}
        </h3>
        <div class="flex items-center">
          <MapPinFillIcon />
          <span class="pl-3 uppercase">{truncate(hotelAddress, 20)}</span>
        </div>
      </div>
    </a>
  </div>
</div>

<style>
  .__text-shadow {
    text-shadow: 0px 2px 3px #314c49;
  }

  .__card-content {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(0, 0, 0) 100%
    );
  }
</style>
