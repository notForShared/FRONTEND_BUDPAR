<script>
  import { ASSETS } from "../../lib/config";

  export let desc;
  export let title;
  export let image;
  export let author;
</script>

<div>
  <img src={image} alt={title} />
  <span>by {author.username}</span>

  <h1 class="font-bold text-3xl">{title}</h1>
  <p>{@html desc}</p>
</div>
