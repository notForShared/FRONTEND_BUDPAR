<script>
  import { push, link } from "svelte-spa-router";
  import { API } from "../../lib/config";

  import MapPinHollowIcon from "../../assets/svg/MapPinHollowIcon.svelte";
  import SearchLightIcon from "../../assets/svg/SearchLightIcon.svelte";

  let getPopularList = fetchPopularList();
  let searchQuery = "";

  async function fetchPopularList() {
    let popular = await fetch(`${API}/tourist-attractions/popular`);

    if (popular.status === 200) {
      let popularDetail = await popular.json();
      return popularDetail.data;
    } else {
      throw new Error("Cannot fetch data");
    }
  }

  function gotoContent() {
    if (searchQuery || searchQuery !== "") {
      let query = new URLSearchParams({ q: searchQuery });

      push(`/search?${query.toString()}`);
    }
  }

  function enterPress(event) {
    if (event.keyCode === 13) {
      if (searchQuery || searchQuery !== "" || searchQuery) {
        let query = new URLSearchParams({ q: searchQuery });
        push(`/search?${query.toString()}`);
      }
    }
  }
</script>

<div class="__search-card flex justify-center w-full py-10 lg:absolute lg:pb-5">
  <div
    class="__wrapper flex flex-col items-start p-5 justify-center bg-[#f5f5f5] shadow-lg shadow-grey-700 w-full md:w-3/6 md:rounded-xl"
  >
    <div class="__search-text pl-2 pb-3">
      <MapPinHollowIcon />
      <span class="capitalize lg:text-base lg:font-semibold text-[#18263e]"
        >temukan tempat wisata favorit kamu</span
      >
    </div>
    <div class="__search-bar w-full flex items-center flex-col md:flex-row">
      <input
        class="border-2 bg-[#f5f5f5] border-[#00d6a1] rounded-lg h-10 w-11/12 px-2"
        type="text"
        bind:value={searchQuery}
        on:keypress={enterPress}
      />
      <button
        class="flex items-center ml-2 mt-5 md:mt-0 px-2 py-2 text-white font-bold rounded-md bg-[#00d6a1]"
        on:click={gotoContent}
      >
        <SearchLightIcon />
        <span class="pl-2">Cari</span>
      </button>
    </div>

    <div class="__popular-site pl-2 pt-4 text-[#18263e] inline-block w-full">
      {#await getPopularList}
        <div class="grid grid-cols-4 gap-1 animate-pulse">
          <div class="col-span-1">
            <div class="h-2 bg-[#18263e]/[.2] rounded" />
          </div>
          <div class="col-span-1">
            <div class="h-2 bg-[#18263e]/[.2] rounded" />
          </div>
          <div class="col-span-2">
            <div class="h-2 bg-[#18263e]/[.2] rounded" />
          </div>
        </div>
      {:then data}
        <span class="inline-block">Popular : </span>
        {#each data as { uuid, name }}
          <a
            class="text-[#18263e] underline font-semibold pr-2 capitalize"
            href={`/tour-detail?${new URLSearchParams({
              title: name,
              q: uuid,
            }).toString()}`}
            use:link>{name}</a
          >
        {/each}
      {/await}
    </div>
  </div>
</div>

<style>
  .__search-card {
    bottom: -6em;
  }
</style>
