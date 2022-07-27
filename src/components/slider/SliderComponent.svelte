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
        swiping={false}
        infinite={true}
        let:currentPageIndex
        let:pagesCount
        let:showPage
      >
        <div
          slot="dots"
          class="__slider-dot absolute bottom-10 lg:bottom-32 w-full flex justify-center"
        >
          <div class="flex flex-row">
            {#each Array(pagesCount) as _, pageIndex (pageIndex)}
              <!-- svelte-ignore a11y-missing-content -->
              <a
                href="#!"
                on:click|preventDefault={() => showPage(pageIndex)}
                class:__active={currentPageIndex === pageIndex}
                class="rounded-full mx-2 border-2 duration-150 border-teal-400 h-3 w-3 lg:h-5 lg:w-5 hover:bg-teal-400 hover:border-white"
              />
            {/each}
          </div>
        </div>
        {#each bgImage as { id, image, name }}
          <img
            key={id}
            class="w-full object-cover"
            src={`${ASSETS}/${image}`}
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
