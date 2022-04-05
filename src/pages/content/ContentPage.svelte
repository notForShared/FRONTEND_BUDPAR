<script>
  import { fade } from "svelte/transition";
  import { querystring } from "svelte-spa-router";

  let queryparams = new URLSearchParams($querystring);
</script>

<div class="__content-page-tour pt-36 relative" in:fade={{ duration: 500 }}>
  <img
    src="/assets/images/dummy/john-towner-JgOeRuGD_Y4-unsplash(1).jpg"
    alt={queryparams.get("q")}
    class="w-full h-[512px] object-cover"
  />
  <div class="__content-title absolute bottom-5 px-7 md:px-14 lg:px-32">
    <div class="__content-title flex pb-3">
      <h3
        class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4"
      >
        kecamatan
      </h3>
      <h3
        class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4 pl-5"
      >
        binuang
      </h3>
    </div>
    <div class="__content-subtitle">
      <h1 class="text-white font-bold text-xl md:text-3xl uppercase">
        {queryparams.get("q")}
      </h1>
    </div>
  </div>
</div>
