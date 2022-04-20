<script>
  import { ASSETS } from "../../lib/config";
  export let name;
  export let image;
</script>

<div class="flex flex-col items-center">
  <span class="pb-4">{name}</span>
  <img class="w-[50px] h-auto" src={`${ASSETS}/${image}`} alt={name} />
</div>
