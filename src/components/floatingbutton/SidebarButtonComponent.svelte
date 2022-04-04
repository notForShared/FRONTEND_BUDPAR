<script>
  import MenuBurgerLightIcon from "../../assets/svg/MenuBurgerLightIcon.svelte";

  import {
    openSidebar,
    closeSidebar,
    getSidebar,
  } from "../../lib/module/sidebar";

  function revealSidebar() {
    if (!getSidebar().show) {
      openSidebar();
    } else {
      closeSidebar();
    }
  }
</script>

<div
  class="__top fixed flex md:hidden rounded-tl-full rounded-bl-full bottom-0 right-0 my-6 px-[1.4rem] py-[1.2rem] bg-[#00d6a1] cursor-pointer"
  on:click={revealSidebar}
>
  <MenuBurgerLightIcon />
</div>

<style>
  .__top {
    z-index: 999;
  }
</style>
