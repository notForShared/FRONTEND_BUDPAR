<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import { fade } from "svelte/transition";

  import { API, ASSETS } from "../../lib/config";

  import TourContentCard from "../../components/card/TourContentCard.svelte";
  import FooterComponent from "../../components/footer/FooterComponent.svelte";

  async function fetchTour() {
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

      console.log(toursData.data);
    } else {
      throw new Error("Could not fetch data !");
    }
  }

  fetchTour();

  let tourObject = [
    {
      imageUrl: "/assets/images/dummy/aaron-thomas-4CHdH9cMr0E-unsplash.png",
      tourTitle: "wisata religi datu kabul",
      tourAddress: "cls, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/andreas-dress-GhvpEtG5HMs-unsplash.png",
      tourTitle: "wisata bukit buluan",
      tourAddress: "binuang, kabupaten tapin",
    },
    {
      imageUrl:
        "/assets/images/dummy/huper-by-joshua-earle-ljFOTdPxbW8-unsplash.png",
      tourTitle: "wisata religi datu nurraya",
      tourAddress: "Tatakan, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/kamil-feczko-eL15tmyCcjw-unsplash.png",
      tourTitle: "wisata buatan lembah cinta",
      tourAddress: "salam babaris, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/nick-rickert-qx3ZAL-gYjY-unsplash.png",
      tourTitle: "wisata alam batu baampar",
      tourAddress: "piani, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/noah-cellura-BNK525WM4BA-unsplash.png",
      tourTitle: "wisata buatan menatap masa depan",
      tourAddress: "salam babaris, kabupaten tapin",
    },
    {
      imageUrl: "/assets/images/dummy/quino-al-mBQIfKlvowM-unsplash.png",
      tourTitle: "wisata kalijodoh",
      tourAddress: "Tatakan, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/v2osk-1Z2niiBPg5A-unsplash.png",
      tourTitle: "wisata snowpeak aurora",
      tourAddress: "lokpaikat, Kabupaten Tapin",
    },
  ];

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
</script>

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

    <TabPanel>
      <div
        class="__content-tour-main py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
      >
        {#each tourObject as object}
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
      <div
        class="__content-tour-related py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
      >
        {#each relatedPlaces as object}
          <TourContentCard {...object} />
        {/each}
      </div>
    </TabPanel>
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
