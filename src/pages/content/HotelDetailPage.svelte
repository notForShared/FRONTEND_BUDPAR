<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import { querystring, link, location } from "svelte-spa-router";
  import { fade, fly } from "svelte/transition";
  import Lazy from "svelte-lazy";

  import { API, ASSETS, BASEURI } from "../../lib/config";

  import LoadingCircleAnimationComponent from "../../components/animation/LoadingCircleAnimationComponent.svelte";
  import MapCardComponent from "../../components/card/MapCardComponent.svelte";
  import FooterComponent from "../../components/footer/FooterComponent.svelte";
  import TourContentCard from "../../components/card/TourContentCard.svelte";

  import PhoneCircleGreenIcon from "../../assets/svg/PhoneCircleGreenIcon.svelte";
  import WorldCircleGreenIcon from "../../assets/svg/WorldCircleGreenIcon.svelte";
  import ClockCircleGreenIcon from "../../assets/svg/ClockCircleGreenIcon.svelte";
  import PinCircleGreenIcon from "../../assets/svg/PinCircleGreenIcon.svelte";
  import MapFoldIcon from "../../assets/svg/MapFoldIcon.svelte";
  import FlyIcon from "../../assets/svg/FlyIcon.svelte";

  $: title = new URLSearchParams($querystring).get("title");
  let queryparams = new URLSearchParams($querystring);
  let displayImage;

  async function getDetail() {
    let detail = await fetch(`${API}/hotel/${queryparams.get("q")}/show`);

    if (detail.status === 200) {
      let detailData = await detail.json();
      displayImage = `${ASSETS}/${detailData.data.hotel_detail.thumb}`;
      console.log(detailData.data);
      return detailData.data;
    } else {
      throw new Error("Could not fetchin data !");
    }
  }

  let detailData = getDetail();

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

  function showMainImage(imageUrl) {
    displayImage = `${imageUrl}`;
  }
</script>

<svelte:head>
  <!-- svelte-ignore component-name-lowercase -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  />

  <meta
    name="description"
    content="{queryparams.get(
      'type'
    )} {title} di kabupaten tapin dari Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />

  <!-- svelte-ignore component-name-lowercase -->
  <link rel="canonical" href={`${BASEURI}#${$location}?${$querystring}`} />

  <title>
    {title} | Dinas Kebudayaan dan Pariwisata Kabupaten Tapin
  </title>
</svelte:head>

{#await detailData}
  <div class="w-full h-screen pb-24">
    <div
      class="h-screen flex items-center justify-center py-32"
      in:fade={{ duration: 200 }}
    >
      <LoadingCircleAnimationComponent size={{ w: "w-12", h: "h-12" }} />
    </div>
  </div>
{:then data}
  <div class="__content-page-hotel" in:fade={{ duration: 200 }}>
    <div class="pt-36 relative">
      {#key displayImage}
        <img
          src={displayImage}
          alt={title}
          class="w-full h-[512px] object-cover"
          in:fly={{ y: -20 }}
        />
      {/key}
      <div class="__content-title absolute bottom-5 px-7 md:px-14 lg:px-32">
        {#if data.hotel_detail.distriction.name}
          <div class="flex pb-3">
            <h3
              class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4"
            >
              {data.hotel_detail.distriction.name}
            </h3>
          </div>
        {/if}
        <div class="__content-subtitle">
          <h1 class="text-white font-bold text-xl md:text-3xl uppercase">
            {data.hotel_detail.name}
          </h1>
        </div>
      </div>
    </div>

    <div
      class="__content-main grid grid-cols-12 px-7 gap-y-8 lg:gap-y-16 md:px-7 lg:px-32 py-7 lg:py-24"
    >
      <div class="col-span-full">
        <div class="flex">
          {#if data.hotel_detail.hotel_sliders.length > 0}
            {#each data.hotel_detail.hotel_sliders as { image }}
              <a
                class="px-3 duration-300 hover:drop-shadow-lg"
                href="#!"
                on:click|preventDefault={() =>
                  showMainImage(`${ASSETS}/${image}`)}
              >
                <Lazy height={96} fadeOption={{ delay: 500, duration: 1000 }}>
                  <img
                    src={`${ASSETS}/${image}`}
                    class="drop-shadow-md w-[120px] h-[96px] rounded"
                    alt={title}
                  />
                </Lazy>
              </a>
            {/each}
          {:else}
            <a
              class="px-3 duration-300 hover:drop-shadow-lg"
              href="#!"
              on:click|preventDefault={() =>
                showMainImage(`${ASSETS}/${data.hotel_detail.thumb}`)}
            >
              <Lazy height={96} fadeOption={{ delay: 500, duration: 1000 }}>
                <img
                  src={`${ASSETS}/${data.hotel_detail.thumb}`}
                  class="drop-shadow-md w-[120px] h-[96px] rounded"
                  alt={title}
                />
              </Lazy>
            </a>
          {/if}
        </div>
      </div>
      <div class="col-span-full lg:col-span-8">
        <h2 class="font-bold text-2xl uppercase">
          {data.hotel_detail.name}
        </h2>
        <p class="py-5">
          {@html data.hotel_detail.description}
        </p>
      </div>
      <div class="col-span-full lg:col-span-4 lg:px-7">
        <div class="w-full flex items-center py-5">
          <MapFoldIcon />
          <h3 class="font-bold text-2xl pl-4">Maps</h3>
        </div>
        <div class="__minimap-wrapper pb-7">
          <MapCardComponent
            objectType="hotel"
            latlng={[
              `${data.hotel_detail.latitude}`,
              `${data.hotel_detail.longitude}`,
            ]}
          />
        </div>
        <a
          href="/direction?{new URLSearchParams({
            type: 'hotel',
            lat: `${data.hotel_detail.latitude}`,
            lng: `${data.hotel_detail.longitude}`,
          }).toString()}"
          class="rounded-lg bg-[#00d6a1] flex w-full items-center justify-center py-3"
          use:link
        >
          <FlyIcon />
          <span class="text-white pl-5">Open Map</span>
        </a>

        <div class="__content-info mt-6 pt-5 border-t">
          {#if data.hotel_detail.address}
            <div class="__address flex items-center">
              <PinCircleGreenIcon />
              <div class="__address-text pl-3">
                <h3 class="font-bold">Alamat</h3>
                <span>{data.hotel_detail.address}</span>
              </div>
            </div>
          {/if}

          {#if data.hotel_detail.office_hours}
            <div class="__open-hours flex items-center pt-5">
              <ClockCircleGreenIcon />
              <div class="__open-hours-text pl-3">
                <h3 class="font-bold">Waktu buka</h3>
                <span>{data.hotel_detail.office_hours}</span>
              </div>
            </div>
          {/if}

          {#if data.hotel_detail.phone}
            <div class="__contact-person flex items-center pt-5">
              <PhoneCircleGreenIcon />
              <div class="__contact-person-text pl-3">
                <h3 class="font-bold">Telepon</h3>
                <span>{data.hotel_detail.phone}</span>
              </div>
            </div>
          {/if}

          {#if data.hotel_detail.website}
            <div class="__affiliated-web flex items-center pt-5">
              <WorldCircleGreenIcon />
              <div class="__affiliated-web-text pl-3">
                <h3 class="font-bold">Website</h3>
                <a
                  class="underline"
                  href="https://{data.hotel_detail.website}/"
                  target="_blank">{data.hotel_detail.website}</a
                >
              </div>
            </div>
          {/if}
        </div>
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
            class="__content-tour-related py-16 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
          >
            {#each relatedPlaces as object}
              <TourContentCard {...object} />
            {/each}
          </div>
        </TabPanel>

        <TabPanel>
          <div
            class="__content-tour-related py-16 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
          >
            {#each relatedPlaces as object}
              <TourContentCard {...object} />
            {/each}
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <div
              class="__content-tour-related py-16 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
            >
              {#each relatedPlaces as object}
                <TourContentCard {...object} />
              {/each}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>

    <FooterComponent />
  </div>
{/await}
