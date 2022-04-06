<script>
  import { pop } from "svelte-spa-router";
</script>

<div class="w-full h-screen flex items-center justify-center flex-col">
  <h1 class="font-bold text-4xl">Page Not Found !</h1>
  <a
    href="#!"
    class="underline capitalize pt-2 text-3xl decoration-2"
    on:click|preventDefault={() => pop()}>Go back</a
  >
</div>
