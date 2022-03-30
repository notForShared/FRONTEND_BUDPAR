<script>
  import { API, ASSETS } from "../../lib/config";

  import CardComponent from "../../components/card/CardComponent.svelte";

  let b = getData();

  async function getDetail(slug) {
    let detail = await fetch(`${API}/article/${slug}/show`);
    let data3 = await detail.json();

    try {
      if (detail.status === 200) {
        return data3;
      } else {
        throw Error("Cannot fetch data");
      }
    } catch (e) {
      throw Error("Cannot fetch data");
    }
  }

  async function getData() {
    let test = await fetch(`${API}/articles`);

    if (test.status === 200) {
      let data = await test.json();
      let c = data.data.data;
      let q = [];

      for (let a in c) {
        let o = await getDetail(c[a].slug);
        q.push({
          title: c[a].title,
          desc: o.data.article_detail.body,
          slug: c[a].slug,
          img: `${ASSETS}/${c[a].thumb}`,
          author: {
            username: c[a].user.name,
            avatar: c[a].user.profile_photo_url,
          },
        });
      }

      return q;
    } else {
      throw Error("Cannot fetching data !");
    }
  }
</script>

<svelte:head>
  <title>content</title>
</svelte:head>

<div>
  {#await b}
    <span>loading data...</span>
  {:then data}
    {#each data as { title, desc, img, author }}
      <CardComponent {desc} {title} image={img} {author} />
    {/each}
  {:catch error}
    <span>{error}</span>
  {/await}
</div>
