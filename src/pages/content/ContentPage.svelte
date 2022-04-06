<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import { querystring } from "svelte-spa-router";

  import { fade } from "svelte/transition";

  import TourContentCard from "../../components/card/TourContentCard.svelte";

  $: queryparams = new URLSearchParams($querystring);

  let relatedPlaces = [
    {
      imageUrl: "/assets/images/dummy/neonbrand-iAftdIcgpFc-unsplash 1.png",
      tourTitle: "wisata religi datu kabul",
      tourAddress: "cls, Kabupaten Tapin",
    },
    {
      imageUrl:
        "/assets/images/dummy/francesca-tosolini-w1RE0lBbREo-unsplash.png",
      tourTitle: "wisata bukit buluan",
      tourAddress: "binuang, kabupaten tapin",
    },
    {
      imageUrl:
        "/assets/images/dummy/christopher-jolly-GqbU78bdJFM-unsplash.png",
      tourTitle: "wisata religi datu nurraya",
      tourAddress: "Tatakan, Kabupaten Tapin",
    },
  ];

  function showMainImage() {
    console.log("asd");
  }
</script>

<div class="__content-page-tour" in:fade={{ duration: 500 }}>
  <div class="pt-36 relative">
    <img
      src="/assets/images/dummy/john-towner-JgOeRuGD_Y4-unsplash(1).jpg"
      alt={queryparams.get("q")}
      class="w-full h-[512px] object-cover"
    />
    <div class="__content-title absolute bottom-5 px-7 md:px-14 lg:px-32">
      <div class="flex pb-3">
        <h3
          class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4"
        >
          kabupaten
        </h3>
        <h3
          class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4 pl-3"
        >
          tapin
        </h3>
      </div>
      <div class="__content-subtitle">
        <h1 class="text-white font-bold text-xl md:text-3xl uppercase">
          {queryparams.get("q")}
        </h1>
      </div>
    </div>
  </div>

  <div
    class="__content-main grid grid-cols-12 grid-rows-6 px-7 md:px-7 lg:px-32 py-7 lg:py-24"
  >
    <div class="col-span-full">
      <div class="flex">
        <a class="px-3" href="#!" on:click|preventDefault={showMainImage}>
          <img
            src="/assets/images/dummy/slideshow-detail-2.png"
            class="w-[120px] h-auto"
            alt=""
          />
        </a>
        <a class="px-3" href="#!" on:click|preventDefault={showMainImage}>
          <img
            src="/assets/images/dummy/slideshow-detail-2.png"
            class="w-[120px] h-auto"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="col-span-full lg:col-span-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde
      maiores, aliquam quisquam, officiis itaque expedita animi fuga doloribus
      cumque eaque sit dolorum enim eum a in? Velit, dignissimos placeat!
    </div>
    <div class="col-span-full lg:col-span-4 md:px-12 lg:px-7">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nemo
      voluptas voluptates provident, eligendi quam ratione sed sapiente tempore
      ipsam perferendis placeat. Libero neque ab et quisquam, veritatis sit
      tenetur.
    </div>
  </div>

  <div class="__related-place">
    <Tabs>
      <TabList>
        <Tab>Penginapan</Tab>
        <Tab>Restoran</Tab>
        <Tab>Wisata Terdekat</Tab>
      </TabList>

      <TabPanel>
        <div
          class="__content-tour-related py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
        >
          {#each relatedPlaces as object}
            <TourContentCard {...object} />
          {/each}
        </div>
      </TabPanel>

      <TabPanel>
        <div
          class="__content-tour-related py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
        >
          {#each relatedPlaces as object}
            <TourContentCard {...object} />
          {/each}
        </div>
      </TabPanel>

      <TabPanel>
        <div>
          <div
            class="__content-tour-related py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
          >
            {#each relatedPlaces as object}
              <TourContentCard {...object} />
            {/each}
          </div>
        </div>
      </TabPanel>
    </Tabs>
  </div>
</div>

<style>
  :global(.svelte-tabs__tab-list) {
    display: flex !important;
    justify-content: start;
    padding-left: 4rem !important;
    padding-bottom: 1rem !important;
  }

  :global(.svelte-tabs li.svelte-tabs__tab) {
    text-transform: uppercase;
    font-weight: bold;
  }

  :global(.svelte-tabs li.svelte-tabs__selected) {
    border-bottom-color: #00d6a1;
    color: #00d6a1;
  }

  @media (max-width: 640px) {
    :global(.svelte-tabs__tab-list) {
      justify-content: center;
      padding-left: 0px !important;
    }
  }
</style>
