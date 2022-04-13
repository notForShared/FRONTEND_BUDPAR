<script>
  import { pop } from "svelte-spa-router";
</script>

<svelte:head>
  <title
    >Halaman tidak ditemukan ! | Dinas Kebudayaan dan Pariwisata Kabupaten Tapin</title
  >
</svelte:head>

<div class="w-full h-screen flex items-center justify-center flex-col">
  <h1 class="font-bold text-4xl">Halaman tidak ditemukan !</h1>
  <a
    href="#!"
    class="underline capitalize pt-2 text-3xl decoration-2"
    on:click|preventDefault={() => pop()}>Kembali</a
  >
</div>
