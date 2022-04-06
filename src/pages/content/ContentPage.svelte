<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import { querystring, link } from "svelte-spa-router";

  import { fade, fly } from "svelte/transition";

  import MapCardComponent from "../../components/card/MapCardComponent.svelte";
  import TourContentCard from "../../components/card/TourContentCard.svelte";
  import MapFoldIcon from "../../assets/svg/MapFoldIcon.svelte";
  import FlyIcon from "../../assets/svg/FlyIcon.svelte";

  $: queryparams = new URLSearchParams($querystring);
  let displayImage =
    "/assets/images/dummy/john-towner-JgOeRuGD_Y4-unsplash(1).jpg";

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

  let mapCardData = {
    latlng: [-3.1325291, 115.0887266],
  };

  function showMainImage(imageUrl) {
    displayImage = `${imageUrl}`;
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  />

  <title>
    {queryparams.get("q")} | Dinas Kebudayaan dan Pariwisata Kabupaten Tapin
  </title>
</svelte:head>

<div class="__content-page-tour" in:fade={{ duration: 500 }}>
  <div class="pt-36 relative">
    {#key displayImage}
      <img
        src={displayImage}
        alt={queryparams.get("q")}
        class="w-full h-[512px] object-cover"
        in:fly={{ y: -20 }}
      />
    {/key}
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
    class="__content-main grid grid-cols-12 px-7 gap-y-8 lg:gap-y-16 md:px-7 lg:px-32 py-7 lg:py-24"
  >
    <div class="col-span-full">
      <div class="flex">
        <a
          class="px-3 duration-300 hover:drop-shadow-lg"
          href="#!"
          on:click|preventDefault={() =>
            showMainImage(
              "/assets/images/dummy/john-towner-JgOeRuGD_Y4-unsplash(1).jpg"
            )}
        >
          <img
            src="/assets/images/dummy/john-towner-JgOeRuGD_Y4-unsplash(1).jpg"
            class="drop-shadow-md w-[120px] h-[96px] rounded"
            alt=""
          />
        </a>
        <a
          class="px-3 duration-300 hover:drop-shadow-lg"
          href="#!"
          on:click|preventDefault={() =>
            showMainImage("/assets/images/dummy/slideshow-detail-2.png")}
        >
          <img
            src="/assets/images/dummy/slideshow-detail-2.png"
            class="drop-shadow-md w-[120px] h-[96px] rounded"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="col-span-full lg:col-span-8">
      <h2 class="font-bold text-2xl uppercase">{queryparams.get("q")}</h2>
      <p class="py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi
        delectus incidunt cum quaerat quis vel placeat quae ad enim ab
        accusantium laborum magni sed quibusdam, excepturi facere iste ratione!
        Distinctio earum quo ratione maxime quisquam cum facilis iste rem
        libero, possimus voluptate vero! Accusantium mollitia saepe cum adipisci
        ea fugit, sequi porro excepturi dignissimos voluptas! Culpa quo corporis
        alias cum ullam architecto illo officia animi totam reiciendis, labore
        commodi. Esse veniam praesentium ea, numquam impedit repellendus
        veritatis fuga cum illo perferendis modi quaerat iure facere! Iusto
        perferendis ut quibusdam assumenda dolore esse, voluptatibus asperiores
        doloribus recusandae debitis quidem voluptas quod exercitationem, labore
        dolor neque perspiciatis cumque laboriosam tenetur magnam facere
        corporis minus atque incidunt? Molestias alias tenetur aut veniam quidem
        ea sequi quisquam earum consectetur in assumenda adipisci excepturi
        possimus enim aspernatur, eos itaque? Obcaecati et eos perspiciatis est
        temporibus, esse, nemo ipsa dolores libero qui magnam corrupti eum non
        doloribus similique nam. Explicabo dolores cupiditate est unde quos
        perferendis, vitae exercitationem temporibus quaerat culpa aperiam porro
        itaque odit, numquam eius? Quis harum commodi sint delectus doloremque
        facere omnis vero ipsum eaque, possimus distinctio eum incidunt tempore,
        pariatur ullam nemo? Inventore, cupiditate! Deserunt ut facere quos
        recusandae esse numquam?
      </p>
    </div>
    <div class="col-span-full lg:col-span-4 lg:px-7">
      <div class="w-full flex items-center py-5">
        <MapFoldIcon />
        <h3 class="font-bold text-2xl pl-4">Maps</h3>
      </div>
      <div class="__minimap-wrapper pb-7">
        <MapCardComponent {...mapCardData} />
      </div>
      <a
        href="/map?{new URLSearchParams({
          lat: `${-3.1325291}`,
          lng: `${115.0887266}`,
        }).toString()}"
        class="rounded-lg bg-[#00d6a1] flex w-full items-center justify-center py-3"
        use:link
      >
        <FlyIcon />
        <span class="text-white pl-5">Open Map</span>
      </a>
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
