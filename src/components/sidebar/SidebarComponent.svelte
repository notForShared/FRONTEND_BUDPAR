<script>
  import { fly } from "svelte/transition";

  import { sidebarState } from "../../lib/store/sidebar/sidebar.state";
</script>

{#if $sidebarState.show === true}
  <div
    transition:fly={{ x: -200 }}
    class="__top sm:flex md:hidden fixed inset-0 z-40 bg-white w-7/12 shadow {$sidebarState.show
      ? 'visible'
      : 'obstructured'}"
  >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos atque
    recusandae ullam odit voluptatum quod, ea, sequi est tenetur omnis
    molestiae. Odio, deleniti exercitationem. Quae tenetur nesciunt enim eos
    provident!
  </div>
{/if}

<style>
  .__top {
    z-index: 999;
  }
</style>
