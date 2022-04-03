<script>
  import { fade } from "svelte/transition";

  import MapComponent from "../../components/map/MapComponent.svelte";
  import { BASEURI } from "../../lib/config";
</script>

<!-- meta tag for SEO -->
<svelte:head>
  <title>Map Wisata | Dinas Kebudayaan dan Pariwisata Kabupaten Tapin</title>
  <meta
    name="description"
    content="Proyeksi lokasi wisata di kabupaten tapin dari Dinas Kebudayaan dan Pariwisata Kabupaten Tapin"
  />
  <meta
    name="keywords"
    content="map wisata disbudpar kab tapin, map lokasi wisata disbudpar tapin, lokasi wisata dinas kebudayaan, daftar lokasi wisata disbud tapin"
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
  <MapComponent />
</div>
