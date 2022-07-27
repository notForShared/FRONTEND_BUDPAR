<script>
  import { fade } from "svelte/transition";
  import { get } from "svelte/store";

  import { modalState } from "../../lib/store/modal/modal.state";
  import { closeModal } from "../../lib/module/modal";

  import CloseIcon from "../../assets/svg/CloseIcon.svelte";

  export let className;
  // export let classModalHeight = "h-[22.1rem]";
  // export let classContentHeight = "h-72";

  function escapePressListener(event) {
    if (event.keyCode === 27 && get(modalState).show === true) {
      closeModal();
    }
  }
</script>

<svelte:window on:keyup={escapePressListener} />

{#if $modalState.modalId === className}
  <div
    class="__modal {className} {$modalState.show
      ? 'flex'
      : 'hidden'} justify-center items-center fixed w-full h-screen top-0 bg-black/[.7]"
    transition:fade={{ duration: 300 }}
  >
    <div class="__modal-wrapper bg-white w-full md:w-full lg:w-full h-full">
      <a
        class="flex absolute right-5 top-5 items-center"
        href="#!"
        on:click|preventDefault={closeModal}
      >
        <CloseIcon />
      </a>
      <slot name="__modal-content" />
    </div>
  </div>
{/if}

<style>
  .__modal {
    z-index: 1000;
  }
</style>
