<script>
  import { fade } from "svelte/transition";

  import { BASEURI, API } from "../../lib/config";

  import LoadingCircleAnimationComponent from "../../components/animation/LoadingCircleAnimationComponent.svelte";
  import MapComponent from "../../components/map/MapComponent.svelte";

  async function fetchCoordList() {
    let parsedData = {
      tours: {
        type: "tours",
        objectIDList: [],
      },

      resto: {
        type: "resto",
        objectIDList: [],
      },

      hotel: {
        type: "hotel",
        objectIDList: [],
      },
    };

    let tours = await fetch(`${API}/tourist-attractions?paginate=10`);
    let restos = await fetch(`${API}/foods?paginate=10`);
    let hotels = await fetch(`${API}/hotels?paginate=10`);

    if (
      tours.status === 200 &&
      restos.status === 200 &&
      hotels.status === 200
    ) {
      let toursData = await tours.json();
      let restosData = await restos.json();
      let hotelsData = await hotels.json();

      for (let tour in toursData.data.data) {
        parsedData.tours.objectIDList.push(toursData.data.data[tour].uuid);
      }

      for (let resto in restosData.data.data) {
        parsedData.resto.objectIDList.push(restosData.data.data[resto].uuid);
      }

      for (let hotel in hotelsData.data.data) {
        parsedData.hotel.objectIDList.push(hotelsData.data.data[hotel].uuid);
      }

      return parsedData;
    } else {
      throw new Error("Cannot fetch data!");
    }
  }

  let getCoordList = fetchCoordList();
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

{#await getCoordList}
  <div class="w-full h-screen pb-24">
    <div
      class="h-screen flex items-center justify-center py-32"
      in:fade={{ duration: 200 }}
    >
      <LoadingCircleAnimationComponent size={{ w: "w-12", h: "h-12" }} />
    </div>
  </div>
{:then data}
  <div
    in:fade={{ duration: 500 }}
    class="flex items-center justify-center w-full h-screen"
  >
    <MapComponent {...data} />
  </div>
{/await}
