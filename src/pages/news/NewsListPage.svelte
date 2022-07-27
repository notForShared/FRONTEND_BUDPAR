<script>
  import { fade } from "svelte/transition";

  import { API, BASEURI } from "../../lib/config";

  import LoadingCircleAnimationComponent from "../../components/animation/LoadingCircleAnimationComponent.svelte";
  import NewsCardComponent from "../../components/card/NewsCardComponent.svelte";
  import FooterComponent from "../../components/footer/FooterComponent.svelte";

  async function fetchContent() {
    let news = await fetch(`${API}/articles`);

    if (news.status === 200) {
      let newsData = await news.json();
      return newsData.data.data;
    } else {
      throw new Error("Could not fetch data !");
    }
  }

  let getContent = fetchContent();
</script>

<!-- meta tag for SEO -->
<svelte:head>
  <title>Berita | Dinas Kebudayaan dan Pariwisata Kabupaten Tapin</title>
  <meta
    name="description"
    content="Berita oleh Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta
    name="keywords"
    content="Berita oleh disbudpar kab tapin, berita disbudpar tapin"
  />
  <meta
    name="author"
    content="Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={`${BASEURI}#/news-list`} />
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
  <div class="__content-page-news" in:fade={{ duration: 500 }}>
    <div class="pt-36 relative">
      <img
        src="/assets/images/placeholder/i-love-tapin.jpg"
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
      {#each data as { created_at, title, thumb, slug, excerpt }}
        <div in:fade={{ duration: 200 }}>
          <NewsCardComponent
            createdDate={created_at}
            newsTitle={title}
            newsThumb={thumb}
            newsExc={excerpt}
            newsSlug={slug}
          />
        </div>
      {/each}
    </div>

    <FooterComponent />
  </div>
{/await}
