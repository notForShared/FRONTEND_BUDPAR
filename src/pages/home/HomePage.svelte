<script>
  import { link } from "svelte-spa-router";
  import { fade } from "svelte/transition";

  import LoadingCircleAnimationComponent from "../../components/animation/LoadingCircleAnimationComponent.svelte";
  import MapButtonComponent from "../../components/floatingbutton/MapButtonComponent.svelte";
  import SearchCardComponent from "../../components/searchcard/SearchCardComponent.svelte";
  import ActivityCardComponent from "../../components/card/ActivityCardComponent.svelte";
  import NewsCardComponent from "../../components/card/NewsCardComponent.svelte";
  import SliderComponent from "../../components/slider/SliderComponent.svelte";
  import FooterComponent from "../../components/footer/FooterComponent.svelte";
  import TourContentCard from "../../components/card/TourContentCard.svelte";

  import { BASEURI, API, ASSETS } from "../../lib/config";

  async function fetchData() {
    let tourAttraction = await fetch(`${API}/tourist-attractions`);
    let news = await fetch(`${API}/articles`);

    if (tourAttraction.status === 200 && news.status === 200) {
      let tourAttractionData = await tourAttraction.json();
      let newsData = await news.json();

      console.log(tourAttractionData.data.data);

      return {
        touristAttractions: tourAttractionData.data.data,
        newsData: newsData.data.data,
      };
    } else {
      throw new Error("Could not fetch data !");
    }
  }

  let getData = fetchData();

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
      {#await getData}
        <div
          class="col-span-full flex items-center justify-center py-32"
          in:fade={{ duration: 200 }}
        >
          <LoadingCircleAnimationComponent size={{ w: "w-12", h: "h-12" }} />
        </div>
      {:then data}
        {#each data.touristAttractions as { thumb, name, address, uuid }}
          <div in:fade={{ duration: 200 }}>
            <TourContentCard
              imageUrl={`${ASSETS}/${thumb}`}
              tourTitle={name}
              tourAddress={address}
              tourDetail={uuid}
            />
          </div>
        {/each}
      {/await}
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
      <div class="__wrapper flex justify-between items-center">
        <div class="__section-title">
          <h1 class="font-bold text-3xl pb-2">Kabar Berita</h1>
          <h4 class="capitalize text-2xl font-semibold">disbudpar</h4>
        </div>
        <a class="font-bold text-md underline" href="/news-list" use:link
          >Lihat Semua</a
        >
      </div>
      <div class="pt-10 pb-32">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x gap-y-20"
        >
          {#each news as news}
            <NewsCardComponent {...news} />
          {/each}
        </div>
      </div>
    </div>

    <div class="content __activity">
      <div class="__wrapper flex justify-between items-center">
        <div class="__section-title">
          <h1 class="font-bold text-3xl pb-2">Kegiatan</h1>
          <h4 class="capitalize text-2xl font-semibold">disbudpar</h4>
        </div>
        <a class="font-bold text-md underline" href="/news-list" use:link
          >Lihat Semua</a
        >
      </div>

      <div class="pt-10 pb-32">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x gap-y-20"
        >
          {#each news as news}
            <ActivityCardComponent {...news} />
          {/each}
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</div>
