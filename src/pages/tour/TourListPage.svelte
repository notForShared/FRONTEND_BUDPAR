<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import { fade } from "svelte/transition";

  import TourContentCard from "../../components/card/TourContentCard.svelte";

  let tourObject = [
    {
      imageUrl: "/assets/images/dummy/aaron-thomas-4CHdH9cMr0E-unsplash.png",
      tourTitle: "wisata religi datu kabul",
      tourAddress: "cls, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/andreas-dress-GhvpEtG5HMs-unsplash.png",
      tourTitle: "wisata bukit buluan",
      tourAddress: "binuang, kabupaten tapin",
    },
    {
      imageUrl:
        "/assets/images/dummy/huper-by-joshua-earle-ljFOTdPxbW8-unsplash.png",
      tourTitle: "wisata religi datu nurraya",
      tourAddress: "Tatakan, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/kamil-feczko-eL15tmyCcjw-unsplash.png",
      tourTitle: "wisata buatan lembah cinta",
      tourAddress: "salam babaris, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/nick-rickert-qx3ZAL-gYjY-unsplash.png",
      tourTitle: "wisata alam batu baampar",
      tourAddress: "piani, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/noah-cellura-BNK525WM4BA-unsplash.png",
      tourTitle: "wisata buatan menatap masa depan",
      tourAddress: "salam babaris, kabupaten tapin",
    },
    {
      imageUrl: "/assets/images/dummy/quino-al-mBQIfKlvowM-unsplash.png",
      tourTitle: "wisata kalijodoh",
      tourAddress: "Tatakan, Kabupaten Tapin",
    },
    {
      imageUrl: "/assets/images/dummy/v2osk-1Z2niiBPg5A-unsplash.png",
      tourTitle: "wisata snowpeak aurora",
      tourAddress: "lokpaikat, Kabupaten Tapin",
    },
  ];
</script>

<div class="__content-page-tour" in:fade={{ duration: 500 }}>
  <div class="pt-36 relative">
    <img
      src="/assets/images/dummy/john-towner-JgOeRuGD_Y4-unsplash(1).jpg"
      alt="placeholder"
      class="w-full h-[512px] object-cover"
    />
    <div class="__content-title absolute bottom-5 px-7 md:px-14 lg:px-32">
      <div class="flex pb-3">
        <h3
          class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4"
        >
          kabupaten
        </h3>
        <h3
          class="text-white uppercase font-bold text-md md:text-xl decoration-[#00d6a1] decoration-2 underline underline-offset-4 pl-3"
        >
          tapin
        </h3>
      </div>
      <div class="__content-subtitle">
        <h1 class="text-white font-bold text-xl md:text-3xl uppercase">
          daftar wisata
        </h1>
      </div>
    </div>
  </div>

  <div
    class="__content-tour-main py-32 md:px-10 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-11 md:gap-y-14 pb-24"
  >
    {#each tourObject as object}
      <TourContentCard {...object} />
    {/each}
  </div>

  <div class="__related-place">
    <Tabs>
      <TabList>
        <Tab>Penginapan</Tab>
        <Tab>Restoran</Tab>
        <Tab>Wisata Terdekat</Tab>
      </TabList>

      <TabPanel>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          error sint fugit quia explicabo. Error quasi, porro similique saepe
          non laborum libero vero ea magnam itaque. Molestias voluptas quidem
          accusantium sed. Itaque quo nobis maiores laudantium modi veniam
          voluptates aliquam nemo deserunt, eos exercitationem commodi ad quia,
          minima, praesentium doloremque excepturi sapiente possimus. Laborum
          praesentium rerum laboriosam, ab et iusto dicta dolores ullam
          temporibus facilis! Facilis perspiciatis, sunt aliquid necessitatibus
          facere, natus quae quia explicabo aperiam fuga ipsum. Hic, repudiandae
          tempora tenetur delectus expedita necessitatibus veritatis consequatur
          saepe deleniti ducimus dolorum, minima ipsam atque culpa placeat
          doloremque corrupti quis unde! Quasi atque aspernatur blanditiis eius
          recusandae. Atque placeat dignissimos nostrum laudantium ipsam, enim
          harum voluptate. Qui perspiciatis ducimus nihil nesciunt expedita
          blanditiis ea doloremque eveniet! Consectetur, porro! Repellat
          accusantium sed unde libero modi voluptatem quos aliquam ratione odit
          possimus enim alias quibusdam quasi fugit quo necessitatibus corporis
          illum cumque quam, autem ut eos aspernatur. Cupiditate ipsum enim,
          quae aperiam quaerat modi sed, similique delectus dolorem temporibus
          corrupti illum suscipit consequatur alias eaque laudantium reiciendis
          maxime quas dolores aspernatur labore laborum ipsa? Quas natus quos ut
          aspernatur iste sed sit, itaque ipsam possimus animi. Animi culpa quae
          ab itaque, suscipit velit.
        </div>
      </TabPanel>

      <TabPanel>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          eius cum vel. Impedit incidunt labore nam illum alias ea numquam
          adipisci, totam voluptatum soluta, non assumenda vero perferendis esse
          fuga quo, tenetur autem voluptates tempora blanditiis accusantium
          provident culpa? Corrupti nesciunt vitae temporibus dolores,
          reprehenderit iusto, dolor libero perferendis cumque consectetur natus
          autem saepe laborum iste aperiam culpa excepturi. Voluptatibus facere
          aperiam magnam fugit quisquam quae porro quam omnis natus, repudiandae
          accusantium illo culpa in perspiciatis itaque optio animi a sapiente
          impedit hic possimus? Debitis iusto quo nesciunt, atque animi nemo
          illum reiciendis? Sint ullam sapiente ut aut impedit officia
          perspiciatis, suscipit nulla culpa, eius reprehenderit pariatur id
          rerum doloremque incidunt illo odio tempore laboriosam velit possimus.
          Perferendis soluta ducimus sapiente ipsa! Labore fuga aperiam tempore
          quaerat animi est, sit autem assumenda? Quisquam iusto velit est
          itaque, sed facere pariatur eligendi laboriosam vitae, ab ducimus eos!
          Sunt magnam inventore possimus, iste eum illum nam temporibus ex est
          ut ullam repellat et fugit laborum asperiores ipsam labore facere
          reprehenderit quis beatae dignissimos reiciendis debitis molestias.
          Laboriosam iste omnis, dolor molestiae dolores voluptates quo
          perferendis reiciendis ipsam nam laudantium velit quidem debitis error
          quos quas eligendi iusto tenetur similique et aliquam. Numquam.
        </div>
      </TabPanel>

      <TabPanel>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          vel autem natus obcaecati, consequuntur earum, alias est praesentium
          omnis rem velit, commodi quod quae iusto reprehenderit non
          perspiciatis explicabo sapiente eveniet rerum ipsa architecto.
          Voluptatem, ducimus! Voluptas soluta expedita animi qui amet minus
          error nobis illum iure delectus, maiores pariatur est autem, ipsum
          dolore nihil saepe rerum dicta impedit harum ducimus mollitia.
          Sapiente, autem nostrum repellendus exercitationem fugit, dolorem
          maxime vel esse culpa impedit neque cum iste molestias, consequatur
          officiis laboriosam. Esse corrupti molestias libero temporibus cum eum
          neque ipsum nostrum et ducimus quod sapiente veniam aperiam, porro
          saepe blanditiis autem, facere deleniti impedit maxime laboriosam id
          enim. Debitis pariatur harum voluptatum consectetur aspernatur
          officiis hic ipsum eius, aperiam dicta? Perspiciatis culpa natus non
          totam modi! Magni quaerat, recusandae quam aliquid vel sunt deserunt
          inventore! Culpa, assumenda iusto enim dignissimos quis necessitatibus
          officiis atque perspiciatis odio. Dignissimos consequuntur modi
          architecto impedit doloremque fugit enim eaque voluptatibus sunt harum
          necessitatibus quasi, quam natus explicabo quidem ab id. Obcaecati,
          temporibus. Quis vero, laboriosam distinctio porro quam dolorem,
          mollitia non consectetur sint ea tempora praesentium similique at
          aperiam. Voluptate eaque quam sunt, eos adipisci fuga omnis sit
          commodi dolore ducimus, dolor mollitia et.
        </div>
      </TabPanel>
    </Tabs>
  </div>
</div>

<style>
  :global(.svelte-tabs__tab-list) {
    display: flex !important;
    justify-content: start;
    padding-left: 4rem !important;
    padding-bottom: 1rem !important;
  }

  :global(.svelte-tabs li.svelte-tabs__tab) {
    text-transform: uppercase;
    font-weight: bold;
  }

  :global(.svelte-tabs li.svelte-tabs__selected) {
    border-bottom-color: #00d6a1;
    color: #00d6a1;
  }

  @media (max-width: 640px) {
    :global(.svelte-tabs__tab-list) {
      justify-content: center;
      padding-left: 0px !important;
    }
  }
</style>
