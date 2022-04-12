<script>
  import debounce from "lodash/debounce";
  import Router from "svelte-spa-router";
  import { routes } from "./pages/router";
  import { fade } from "svelte/transition";

  import { API } from "./lib/config";
  import { truncate } from "./lib/module/truncate";

  import LoadingCircleAnimationComponent from "./components/animation/LoadingCircleAnimationComponent.svelte";
  import SidebarButtonComponent from "./components/floatingbutton/SidebarButtonComponent.svelte";
  import SidebarComponent from "./components/sidebar/SidebarComponent.svelte";
  import NavbarComponent from "./components/navbar/NavbarComponent.svelte";
  import ModalComponent from "./components/modal/ModalComponent.svelte";

  let searchContent;

  async function fetchSearch(query) {
    let search = await fetch(`${API}/search/all?search=${query}`);

    if (search.status === 200) {
      let searchData = await search.json();
      console.log(searchData.data);
      return searchData.data;
    } else {
      throw new Error("Cannot fetch data !");
    }
  }

  let searchData = debounce((event) => {
    if (event.target.value || event.target.value !== "") {
      searchContent = fetchSearch(event.target.value);
    } else {
      searchContent = "";
    }
  }, 500);
</script>

<main class="w-full relative">
  <NavbarComponent />
  <Router {routes} restoreScrollState={true} />
  <SidebarButtonComponent />

  <ModalComponent className="__navbarSearch">
    <h1 slot="__modal-title" class="__slot-wrapper">Pencarian</h1>
    <div slot="__modal-content" class="__slot-wrapper ">
      <input
        type="text"
        class="border-2 rounded px-2 py-1 w-full mb-3 border-[#00d6a1]"
        on:input={searchData}
      />
      {#if !searchContent}
        <div class="w-full h-24 flex justify-center items-center">
          <p class="font-semibold text-xl text-[#7c7c7c]">
            Ketikan kata kunci di kotak pencarian !
          </p>
        </div>
      {:else}
        {#await searchContent}
          <div class="w-full h-screen pb-24">
            <div
              class="h-24 flex items-center justify-center"
              in:fade={{ duration: 200 }}
            >
              <LoadingCircleAnimationComponent
                size={{ w: "w-12", h: "h-12" }}
              />
            </div>
          </div>
        {:then data}
          <div class="pt-5">
            {#if data.articles.length > 0}
              <h3 class="rounded border-2 px-5 py-3 font-semibold my-2">
                Artikel
              </h3>
              <div class="pt-3 block">
                {#each data.articles as { title }}
                  <a
                    class="rounded border-2 w-full block underline ml-7 pl-4 mt-2 py-3"
                    href="/">{truncate(title, 20)}</a
                  >
                {/each}
              </div>
            {/if}
            {#if data.tourist_attcations.length > 0}
              <h3 class="rounded border-2 px-5 py-3 font-semibold my-2">
                Wisata
              </h3>
            {/if}
            {#if data.hotels.length > 0}
              <h3 class="rounded border-2 px-5 py-3 font-semibold my-2">
                Penginapan
              </h3>
            {/if}
            {#if data.foods.length > 0}
              <h3 class="rounded border-2 px-5 py-3 font-semibold my-2">
                Restoran
              </h3>
            {/if}
          </div>
        {/await}
      {/if}
    </div>
  </ModalComponent>

  <SidebarComponent />
</main>
