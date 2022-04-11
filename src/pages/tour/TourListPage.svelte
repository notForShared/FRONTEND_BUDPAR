<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import { fade } from "svelte/transition";

  import { API, ASSETS, BASEURI } from "../../lib/config";

  import LoadingCircleAnimationComponent from "../../components/animation/LoadingCircleAnimationComponent.svelte";
  import RestoCardComponent from "../../components/card/RestoCardComponent.svelte";
  import HotelCardComponent from "../../components/card/HotelCardComponent.svelte";
  import FooterComponent from "../../components/footer/FooterComponent.svelte";
  import TourContentCard from "../../components/card/TourContentCard.svelte";

  async function fetchContent() {
    let tours = await fetch(`${API}/tourist-attractions`);
    let hotels = await fetch(`${API}/hotels`);
    let restaurans = await fetch(`${API}/foods`);

    if (
      tours.status === 200 &&
      hotels.status === 200 &&
      restaurans.status === 200
    ) {
      let toursData = await tours.json();
      let hotelsData = await hotels.json();
      let restauransData = await restaurans.json();

      return {
        tours: toursData.data.data,
        hotels: hotelsData.data.data,
        restaurans: restauransData.data.data,
      };
    } else {
      throw new Error("Could not fetch data !");
    }
  }

  let getContent = fetchContent();
</script>

<!-- meta tag for SEO -->
<svelte:head>
  <title>Daftar Wisata | Dinas Kebudayaan dan Pariwisata Kabupaten Tapin</title>
  <meta
    name="description"
    content="Daftar lokasi wisata di kabupaten tapin dari Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta
    name="keywords"
    content="daftar wisata disbudpar kab tapin, daftar lokasi wisata disbudpar tapin"
  />
  <meta
    name="author"
    content="Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={`${BASEURI}#/tour-list`} />
</svelte:head>
<!-- meta tag for SEO -->

<div class="__content-page-tour" in:fade={{ duration: 500 }}>
  <div class="pt-36 relative pb-5">
    <img
      src="/assets/images/dummy/john-towner-JgOeRuGD_Y4-unsplash(1).jpg"
      alt="placeholder"
      class="w-full h-[512px] object-cover"
    />
    <div class="__content-title absolute bottom-12 px-7 md:px-14 lg:px-32">
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
          daftar wisata
        </h1>
      </div>
    </div>
  </div>

  <Tabs>
    <TabList>
      <Tab>Wisata</Tab>
      <Tab>Penginapan</Tab>
      <Tab>Restoran</Tab>
    </TabList>

    {#await getContent}
      <TabPanel>
        <div class="w-full h-screen pb-24">
          <div
            class="h-screen flex items-center justify-center py-32"
            in:fade={{ duration: 200 }}
          >
            <LoadingCircleAnimationComponent size={{ w: "w-12", h: "h-12" }} />
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div class="w-full h-screen pb-24">
          <div
            class="h-screen flex items-center justify-center py-32"
            in:fade={{ duration: 200 }}
          >
            <LoadingCircleAnimationComponent size={{ w: "w-12", h: "h-12" }} />
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div class="w-full h-screen pb-24">
          <div
            class="h-screen flex items-center justify-center py-32"
            in:fade={{ duration: 200 }}
          >
            <LoadingCircleAnimationComponent size={{ w: "w-12", h: "h-12" }} />
          </div>
        </div>
      </TabPanel>
    {:then data}
      <TabPanel>
        <div
          class="__content-tour-main py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
        >
          {#each data.tours as { thumb, name, address, uuid }}
            <TourContentCard
              imageUrl={`${ASSETS}/${thumb}`}
              tourTitle={name}
              tourAddress={address}
              tourDetail={uuid}
            />
          {/each}
        </div>
      </TabPanel>

      <TabPanel>
        <div
          class="__content-tour-related py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
        >
          {#each data.hotels as { thumb, name, address, uuid }}
            <HotelCardComponent
              imageUrl={`${ASSETS}/${thumb}`}
              hotelTitle={name}
              hotelAddress={address}
              hotelDetail={uuid}
            />
          {/each}
        </div>
      </TabPanel>

      <TabPanel>
        <div
          class="__content-tour-related py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
        >
          {#each data.restaurans as { thumb, name, address, uuid }}
            <RestoCardComponent
              imageUrl={`${ASSETS}/${thumb}`}
              restoTitle={name}
              restoAddress={address}
              restoDetail={uuid}
            />
          {/each}
        </div>
      </TabPanel>
    {/await}
  </Tabs>

  <FooterComponent />
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
