<script>
  import { querystring } from "svelte-spa-router";
  import { fade } from "svelte/transition";

  import { API, ASSETS, BASEURI } from "../../lib/config";

  import LoadingCircleAnimationComponent from "../../components/animation/LoadingCircleAnimationComponent.svelte";
  import FooterComponent from "../../components/footer/FooterComponent.svelte";
  import TourContentCard from "../../components/card/TourContentCard.svelte";

  let query = new URLSearchParams($querystring).get("q");

  async function fetchContent() {
    let search = await fetch(
      `${API}/search/tourist_attractions?search=${query}`
    );

    if (search.status) {
      let searchData = await search.json();
      return searchData.data;
    } else {
      throw new Error("Could not fetch data !");
    }
  }

  let getContent = fetchContent();
</script>

<!-- meta tag for SEO -->
<svelte:head>
  <title
    >Pencarian wisata | Dinas Kebudayaan dan Pariwisata Kabupaten Tapin</title
  >
  <meta
    name="description"
    content="Pencarian wisata di kabupaten tapin dari Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta
    name="keywords"
    content="Pencarian wisata di kabupaten tapin disbudpar kab tapin, wisata di kabupaten tapin wisata disbudpar tapin"
  />
  <meta
    name="author"
    content="Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={`${BASEURI}#/search`} />
</svelte:head>
<!-- meta tag for SEO -->

{#await getContent}
  <div class="w-full h-screen pb-24">
    <div
      class="h-screen flex items-center justify-center py-32"
      in:fade={{ duration: 200 }}
    >
      <LoadingCircleAnimationComponent size={{ w: "w-12", h: "h-12" }} />
    </div>
  </div>
{:then data}
  <div class="__content-page-tour" in:fade={{ duration: 500 }}>
    <div class="pt-36 relative pb-5">
      <img
        src="/assets/images/placeholder/placeholder-bg.jpg"
        alt="placeholder"
        class="w-full h-[512px] object-cover"
      />
      <div class="__content-title absolute bottom-12 px-7 md:px-14 lg:px-32">
        <div class="flex pb-3">
          <h3
            class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4"
          >
            pencarian
          </h3>
          <h3
            class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4 pl-3"
          >
            wisata
          </h3>
        </div>
        <div class="__content-subtitle">
          <h1 class="text-white font-bold text-xl md:text-3xl uppercase">
            {new URLSearchParams($querystring).get("q")}
          </h1>
        </div>
      </div>
    </div>

    {#if data.length > 0}
      <div
        class="__content-tour-main py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
      >
        {#each data as { name, thumb, address, uuid }}
          <TourContentCard
            imageUrl={`${ASSETS}/${thumb}`}
            tourTitle={name}
            tourAddress={address}
            tourDetail={uuid}
          />
        {/each}
      </div>
    {:else}
      <div class="w-full h-screen pb-24">
        <div
          class="h-screen flex items-center justify-center py-32"
          in:fade={{ duration: 200 }}
        >
          <h1 class="font-bold text-4xl">Tidak ada data !</h1>
        </div>
      </div>
    {/if}

    <FooterComponent />
  </div>
{/await}

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
