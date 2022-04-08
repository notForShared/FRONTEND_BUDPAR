<script>
  import { fade } from "svelte/transition";

  import NewsCardComponent from "../../components/card/NewsCardComponent.svelte";
  import FooterComponent from "../../components/footer/FooterComponent.svelte";
  import TourContentCard from "../../components/card/TourContentCard.svelte";

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
</script>

<div class="__content-page-news" in:fade={{ duration: 500 }}>
  <div class="pt-36 relative">
    <img
      src="/assets/images/dummy/john-towner-JgOeRuGD_Y4-unsplash(1).jpg"
      alt="placeholder"
      class="w-full h-[512px] object-cover"
    />
    <div class="__content-title absolute bottom-5 px-7 md:px-14 lg:px-32">
      <div class="flex pb-3">
        <h3
          class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4"
        >
          disbudpar
        </h3>
        <h3
          class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4 pl-3"
        >
          tapin
        </h3>
      </div>
      <div class="__content-subtitle">
        <h1 class="text-white font-bold text-xl md:text-3xl uppercase">
          kegiatan kami
        </h1>
      </div>
    </div>
  </div>

  <div
    class="__content-tour-main py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
  >
    {#each tourObject as object}
      <NewsCardComponent />
    {/each}
  </div>

  <FooterComponent />
</div>
