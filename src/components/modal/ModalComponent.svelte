<script>
  import { fade } from "svelte/transition";
  import { get } from "svelte/store";

  import { modalState } from "../../lib/store/modal/modal.state";
  import { closeModal } from "../../lib/module/modal";

  import CloseIcon from "../../assets/svg/CloseIcon.svelte";

  export let className;

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
    <div
      class="__modal-wrapper bg-white w-full md:w-4/6 lg:w-3/6 h-[22.1rem] rounded"
    >
      <div class="border-b p-5 flex items-center justify-between">
        <slot name="__modal-title" />
        <a
          class="flex items-center"
          href="#!"
          on:click|preventDefault={closeModal}
        >
          <CloseIcon />
        </a>
      </div>

      <div class="scroll-smooth overflow-y-auto h-72 px-10 py-6">
        <slot name="__modal-content" />
      </div>
    </div>
  </div>
{/if}

<style>
  .__modal {
    z-index: 1000;
  }
</style>
