<script>
  import { link } from "svelte-spa-router";
  import Lazy from "svelte-lazy";

  import MapPinFillIcon from "../../assets/svg/MapPinFillIcon.svelte";
  import { truncate } from "../../lib/module/truncate";

  export let imageUrl;
  export let restoTitle;
  export let restoAddress;
  export let restoDetail;
</script>

<div class="__resto-content-card mx-auto">
  <div class="__resto-object-card-wrapper relative">
    <a
      href="/resto-detail?{`${new URLSearchParams({
        title: restoTitle,
        q: restoDetail,
      }).toString()}`}"
      use:link
    >
      <Lazy height={350} fadeOption={{ delay: 500, duration: 1000 }}>
        <img
          src={imageUrl}
          alt={restoTitle}
          class="w-[291px] h-[350px] rounded-[20px] drop-shadow-md"
        />
      </Lazy>

      <div class="__card-content absolute bottom-0 px-5 py-5 text-white">
        <h3 class="text-xl font-bold capitalize pb-2 __text-shadow">
          {restoTitle}
        </h3>
        <div class="flex items-center">
          <MapPinFillIcon />
          <span class="pl-3 uppercase">{truncate(restoAddress, 20)}</span>
        </div>
      </div>
    </a>
  </div>
</div>

<style>
  .__text-shadow {
    text-shadow: 0px 2px 3px #314c49;
  }
</style>
