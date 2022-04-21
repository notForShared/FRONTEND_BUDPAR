<script>
  import { fade } from "svelte/transition";

  import { ASSETS } from "../../lib/config";

  import TourContentCard from "../card/TourContentCard.svelte";

  export let data = [];
</script>

{#each data as { thumb, name, address, uuid }}
  <div in:fade={{ duration: 200 }}>
    <TourContentCard
      imageUrl={`${ASSETS}/${thumb}`}
      tourTitle={name}
      tourAddress={address}
      tourDetail={uuid}
    />
  </div>
{/each}
