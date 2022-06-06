<script>
  import Carousel from "svelte-carousel";
  import { ASSETS } from "../../lib/config";

  export let bgImage;
</script>

<div class="__slider relative">
  <div class="__slider-item">
    <div class="__slider-wrapper relative">
      <Carousel
        autoplay
        autoplayDuration={2000}
        arrows={false}
        pauseOnFocus={true}
        swiping={true}
        infinite={true}
        let:currentPageIndex
        let:pagesCount
        let:showPage
      >
        <div
          slot="dots"
          class="__slider-dot absolute bottom-5 lg:bottom-5 w-full flex justify-center"
        >
          <div class="flex flex-row">
            {#each Array(pagesCount) as _, pageIndex (pageIndex)}
              <!-- svelte-ignore a11y-missing-content -->
              <a
                href="#!"
                on:click|preventDefault={() => showPage(pageIndex)}
                class:__active={currentPageIndex === pageIndex}
                class="mx-2 border-[2.5px] duration-150 border-teal-400 h-1 w-6 lg:h-[0.6em] lg:w-10 hover:bg-teal-400 hover:border-white"
              />
            {/each}
          </div>
        </div>
        {#each bgImage as { id, banner, name }}
          <img
            key={id}
            class="lg:rounded-[2%] w-full sm:h-[360px] lg:h-[466px] lg:px-6 lg:py-1"
            src={`${ASSETS}/${banner}`}
            alt={name}
          />
        {/each}
      </Carousel>
    </div>
  </div>
</div>

<style>
  .__active {
    background-color: rgb(45 212 191);
    border-color: rgb(255, 255, 255);
  }
</style>
