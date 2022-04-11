<script>
  import { fade } from "svelte/transition";
  import { querystring } from "svelte-spa-router";

  import DirectionComponent from "../../components/map/DirectionComponent.svelte";
  import { BASEURI } from "../../lib/config";

  let destination = {
    lat: new URLSearchParams($querystring).get("lat"),
    lng: new URLSearchParams($querystring).get("lng"),
  };

  let destType = new URLSearchParams($querystring).get("type");
</script>

<!-- meta tag for SEO -->
<svelte:head>
  <title
    >Rute perjalanan menuju wisata | Dinas Kebudayaan dan Pariwisata Kabupaten
    Tapin</title
  >
  <meta
    name="description"
    content="Rute perjalanan menuju objek tujuan wisata | Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta
    name="keywords"
    content="map wisata Rute perjalanan disbudpar kab tapin, map Rute perjalanan lokasi wisata disbudpar tapin, lokasi Rute perjalanan wisata dinas kebudayaan, daftar lokasi wisata disbud tapin"
  />
  <meta
    name="author"
    content="Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={`${BASEURI}#/map`} />
</svelte:head>
<!-- meta tag for SEO -->

<div
  in:fade={{ duration: 500 }}
  class="flex items-center justify-center w-full h-screen"
>
  <DirectionComponent dest={destination} {destType} />
</div>
