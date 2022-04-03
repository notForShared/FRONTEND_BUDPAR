<script>
  import MapPinFillIcon from "../../assets/svg/MapPinFillIcon.svelte";

  export let imageUrl;
  export let tourTitle;
  export let tourAddress;
</script>

<div class="__tour-content-card mx-auto">
  <div class="__tour-object-card-wrapper relative">
    <a href="#!">
      <img
        src={imageUrl}
        alt="tour object"
        class="w-[291px] h-[350px] rounded-[20px]"
      />

      <div class="__card-content absolute bottom-0 px-5 py-5 text-white">
        <h3 class="text-xl font-bold capitalize pb-2 __text-shadow">
          {tourTitle}
        </h3>
        <div class="flex items-center">
          <MapPinFillIcon />
          <span class="pl-3 uppercase">{tourAddress}</span>
        </div>
      </div>
    </a>
  </div>
</div>

<style>
  .__text-shadow {
    text-shadow: 0px 2px 3px #314c49;
  }
</style>
