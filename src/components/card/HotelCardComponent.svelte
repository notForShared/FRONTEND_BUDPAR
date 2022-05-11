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
          class="w-[291px] h-[350px] rounded-[20px] drop-shadow-md"
        />
      </Lazy>

      <div class="__card-content absolute bottom-0 px-5 py-5 text-white">
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
