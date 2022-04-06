<script>
  import { createEventDispatcher } from "svelte";

  import ChevronLeftIcon from "../../assets/svg/ChevronLeftIcon.svelte";
  import FilterIcon from "../../assets/svg/FilterIcon.svelte";

  const dispatcher = createEventDispatcher();

  function filterResult() {
    dispatcher("map-filter");
  }

  function backToHome() {
    dispatcher("back-to-list");
  }
</script>

<div class="pt-40 flex flex-row items-center">
  <button
    class="rounded-[7px] drop-shadow bg-white font-semibold flex text-black ml-5 px-6 py-[.4rem] capitalize text-[14px]"
    on:click={backToHome}
  >
    <ChevronLeftIcon />
    <span class="pl-3">Back</span>
  </button>
  <button
    class="rounded-[7px] drop-shadow bg-white font-semibold flex text-black ml-5 px-6 py-[.4rem] capitalize text-[14px]"
    on:click={filterResult}
  >
    <span class="pr-3">Filter</span>
    <FilterIcon />
  </button>
</div>
