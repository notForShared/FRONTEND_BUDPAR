<script>
  import { link } from "svelte-spa-router";

  import SearchDarkIcon from "../../assets/svg/SearchDarkIcon.svelte";
  import LoginIcon from "../../assets/svg/LoginIcon.svelte";
  import WordIcon from "../../assets/svg/WordIcon.svelte";
</script>

<nav
  class="flex absolute justify-between px-6 md:px-8 lg:px-36 w-full h-32 __navbar"
>
  <div class="flex items-center __navbar-brand">
    <img
      src="/assets/logo/tapin.png"
      class="w-16 h-16 hidden md:block"
      alt="navbar-brand-1"
    />
    <img
      src="/assets/logo/win.png"
      class="w-auto h-16 hidden md:block pl-2"
      alt="navbar-brand-1"
    />
    <div class="__brand-text flex flex-col justify-center">
      <a href="/" use:link>
        <h1 class="w-full block font-extrabold text-xl md:text-1xl lg:text-2xl">
          Dinas Pariwisata
        </h1>
        <span
          class="w-full block font-light lg:font-extralight md:text-xl lg:text-2xl"
          >Kabupaten Tapin</span
        >
      </a>
    </div>
  </div>

  <div class="hidden md:flex md:items-center __navbar-button">
    <a class="flex items-center px-6" href="/tour-list" use:link>
      <WordIcon />
      <span class="pl-3">Places</span>
    </a>
    <a class="flex items-center pr-8 pl-6" href="#!">
      <SearchDarkIcon />
      <span class="pl-3">Search</span>
    </a>
    <a
      class="flex items-center px-4 py-3 text-white font-bold rounded-md bg-[#00d6a1]"
      href="https://admin.demopaariwisata.tapinkab.go.id/"
      target="_blank"
    >
      <LoginIcon />
      <span class="pl-3">Login</span>
    </a>
  </div>
</nav>

<style>
  .__navbar {
    z-index: 999;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  .__brand-text a h1,
  .__brand-text a span {
    line-height: 1.25 !important;
  }
</style>
