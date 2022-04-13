<script>
  import Lazy from "svelte-lazy";
  import { ASSETS } from "../../lib/config";

  export let bgImage;
</script>

<!-- svelte-ignore a11y-missing-content -->
<div class="__slider relative">
  <!-- append more item in here -->
  <div class="__slider-item">
    <div class="__slider-wrapper relative">
      <Lazy height={699} fadeOption={{ delay: 200, duration: 500 }}>
        <img
          class="w-full lg:h-[699px]"
          src={`${ASSETS}/${bgImage}`}
          alt="slider content"
        />
      </Lazy>

      <div
        class="flex flex-col justify-center items-center absolute inset-0 w-full h-auto"
      >
        <h2
          class="uppercase tracking-[.5em] text-white text-md lg:text-3xl lg:mb-5"
        >
          jelajahi
        </h2>
        <h1
          class="capitalize text-xl lg:text-6xl font-bold text-white lg:pb-14 __text-shadow"
        >
          kabupaten tapin
        </h1>
        <div class="w-2/6">
          <!-- <p class="text-white text-center hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            maxime tenetur, possimus error officiis quis vero rerum, minima illo
            dolorum magnam! Laudantium a voluptatibus consequuntur explicabo
            sit. Dolores, esse hic!
          </p> -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="__slider-dot absolute w-full flex justify-center">
    <div class="flex flex-row">

      <a
        href="#!"
        class="rounded-full border-2 duration-150 border-teal-400 h-3 w-3 lg:h-5 lg:w-5 hover:bg-teal-400 hover:border-white"
      />
      <a
        href="#!"
        class="rounded-full border-2 duration-150 border-teal-400 h-3 w-3 lg:h-5 lg:w-5 hover:bg-teal-400 hover:border-white"
      />
      <a
        href="#!"
        class="rounded-full border-2 duration-150 border-teal-400 h-3 w-3 lg:h-5 lg:w-5 hover:bg-teal-400 hover:border-white"
      />
      <a
        href="#!"
        class="rounded-full border-2 duration-150 border-teal-400 h-3 w-3 lg:h-5 lg:w-5 hover:bg-teal-400 hover:border-white"
      />
    </div>
  </div> -->
</div>

<style>
  .__text-shadow {
    text-shadow: 0px 2px 3px #314c49;
  }

  .__slider-dot {
    bottom: 20%;
  }

  .__slider-dot a {
    margin: 0px 11px;
  }
</style>
