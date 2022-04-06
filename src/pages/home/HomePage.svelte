<script>
  import { link } from "svelte-spa-router";
  import { fade } from "svelte/transition";

  import MapButtonComponent from "../../components/floatingbutton/MapButtonComponent.svelte";
  import SearchCardComponent from "../../components/searchcard/SearchCardComponent.svelte";
  import ActivityCardComponent from "../../components/card/ActivityCardComponent.svelte";
  import NewsCardComponent from "../../components/card/NewsCardComponent.svelte";
  import SliderComponent from "../../components/slider/SliderComponent.svelte";
  import FooterComponent from "../../components/footer/FooterComponent.svelte";
  import TourContentCard from "../../components/card/TourContentCard.svelte";

  import { BASEURI } from "../../lib/config";

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

  let news = [
    {
      title: "asd",
      image: "asd",
      desc: "asd",
      readMore: "asd",
    },
    {
      title: "asd",
      image: "asd",
      desc: "asd",
      readMore: "asd",
    },
    {
      title: "asd",
      image: "asd",
      desc: "asd",
      readMore: "asd",
    },
  ];
</script>

<!-- meta tag for SEO -->
<svelte:head>
  <title>Halaman Utama | Dinas Kebudayaan dan Pariwisata Kabupaten Tapin</title>
  <meta
    name="description"
    content="Halaman utama website Dinas Kebudayaan dan Pariwisata Kabupaten Tapin "
  />
  <meta
    name="keywords"
    content="disbudpar kab tapin, disbudpar tapin, dinas kebudayaan, disbud tapin"
  />
  <meta
    name="author"
    content="Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta name="robots" content="index, follow" />

  <!-- svelte-ignore component-name-lowercase -->
  <link rel="canonical" href={`${BASEURI}#/`} />
</svelte:head>
<!-- meta tag for SEO -->

<div in:fade={{ duration: 500 }}>
  <div class="relative">
    <SliderComponent />
    <SearchCardComponent />
    <MapButtonComponent />
  </div>
  <div
    class="content __tour-object pt-5 lg:pt-[11rem] pb-[5rem] px-[2rem] lg:px-[7rem]"
  >
    <h3 class="capitalize font-bold text-[#18263e] pb-5">top wisata</h3>
    <h1 class="font-bold text-3xl pb-8">Wisata Top Pencarian</h1>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
    >
      {#each tourObject as object}
        <TourContentCard {...object} />
      {/each}
    </div>
    <div class="text-center">
      <a
        href="/tour-list"
        class="border-2 rounded-full border-[#00d6a1] bg-white text-[#00d6a1] font-bold px-5 py-3 duration-500 hover:text-white hover:border-[#e0e0e0] hover:bg-[#00d6a1]"
        use:link>Lihat Selengkapnya</a
      >
    </div>
  </div>

  <!-- promotional banner (changeable) -->
  <img
    src="/assets/images/banner/banner-1.png"
    alt="promotional banner"
    class="w-full h-full"
  />
  <!-- promotional banner (changeable) -->

  <div class="px-7 lg:px-36">
    <div class="content __news pt-10 md:pt-32">
      <h1 class="font-bold text-3xl pb-2">Kabar Berita</h1>
      <h4 class="capitalize text-2xl font-semibold">disbudpar</h4>
      <div class="pt-10 pb-32">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-x gap-y-20">
          {#each news as news}
            <NewsCardComponent {...news} />
          {/each}
        </div>
      </div>
    </div>

    <div class="content __activity">
      <h1 class="font-bold text-3xl pb-2">Kegiatan</h1>
      <h4 class="capitalize text-2xl font-semibold">disbudpar</h4>
      <div class="pt-10 pb-32">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-x gap-y-20">
          {#each news as news}
            <ActivityCardComponent {...news} />
          {/each}
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</div>
