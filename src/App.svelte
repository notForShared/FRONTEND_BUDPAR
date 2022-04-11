<script>
  import Router from "svelte-spa-router";
  import { routes } from "./pages/router";

  import SidebarButtonComponent from "./components/floatingbutton/SidebarButtonComponent.svelte";
  import SidebarComponent from "./components/sidebar/SidebarComponent.svelte";
  import NavbarComponent from "./components/navbar/NavbarComponent.svelte";
  import ModalComponent from "./components/modal/ModalComponent.svelte";
</script>

<main class="w-full relative">
  <NavbarComponent />
  <Router {routes} restoreScrollState={true} />
  <SidebarButtonComponent />

  <ModalComponent className="__navbarSearch">
    <h1 slot="__modal-title" class="__slot-wrapper">Pencarian</h1>
    <div slot="__modal-content" class="__slot-wrapper ">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus vero
      fuga ullam ut commodi expedita corporis, sapiente error provident hic at
      praesentium porro ratione similique placeat, numquam blanditiis magnam
      consequuntur adipisci ad corrupti odit obcaecati eaque quod. Nulla ipsam
      ullam vitae odio ipsum magnam exercitationem explicabo optio enim
      consequatur eligendi, obcaecati quidem dolorem impedit eum ipsa soluta
      vero dolores. Odio non beatae ratione porro, voluptate laudantium eligendi
      fugit illo animi consequatur laboriosam natus culpa corporis perferendis
      voluptatem ipsa! Animi maiores error ea eius sequi quis optio consequatur,
      eveniet nisi itaque harum distinctio eum dolores? Odit fuga unde nulla
      possimus delectus minima, eligendi, pariatur sapiente consequuntur iure
      tempore ducimus assumenda aspernatur. Dicta, consectetur nesciunt?
      Pariatur suscipit exercitationem odio dolore accusamus ab soluta
      repudiandae praesentium distinctio quam rem ipsam maiores doloribus
      consequuntur itaque quae eius iure in et, fugiat doloremque! Eaque
      expedita saepe est quam odio! Dolorem voluptas minima maiores. Nisi, quasi
      eum! Est aliquid corrupti et consequuntur, rem ex voluptate molestiae
      quasi facere aut eos consectetur porro omnis recusandae. Dicta, repellat,
      facere unde ullam aut doloribus voluptatum velit dolore delectus sint
      consequatur deleniti libero doloremque natus maxime nam eum consequuntur
      provident ex. A eius nemo odio consequatur molestias, nam tenetur ipsum
      voluptate eaque! Ipsum, fuga quia quidem porro culpa sed provident modi
      vero distinctio praesentium ex inventore qui minima iusto odit ducimus et
      maxime, adipisci, molestias accusantium velit labore commodi? Quaerat
      fugiat ab culpa architecto id nam explicabo vel exercitationem veritatis
      quos, quod recusandae quas reiciendis quibusdam, neque dolorum iste quo
      temporibus! Quo laudantium facere magni tenetur molestias. Doloremque
      impedit odit commodi veniam architecto tempore nobis! Fugit, optio eveniet
      libero deserunt sunt ratione quos consequuntur aspernatur blanditiis culpa
      veritatis nesciunt. Iure, iste mollitia obcaecati nihil quasi deleniti
      vitae molestias sequi animi perferendis nisi quos sapiente impedit ducimus
      reprehenderit excepturi sunt molestiae repudiandae qui minus ea placeat
      dignissimos autem! Explicabo maiores ab reprehenderit eum, eveniet est
      quam nobis, error magnam fugiat quisquam architecto molestiae officia
      tempora iure dignissimos illo, magni eos autem dolorem consectetur quia
      ullam rem ipsa. Iusto consectetur soluta facilis veritatis, nisi impedit
      eaque cumque natus placeat est ipsum repudiandae omnis similique sit
      earum, tempore consequatur ipsa ad nulla pariatur necessitatibus
      molestias? Quia asperiores explicabo distinctio nihil nostrum neque
      incidunt officiis id eos harum ab possimus deleniti, aut, veritatis
      praesentium unde laboriosam iste fugiat dolor ipsa quae libero autem?
      Nihil dolore nam temporibus quae, repellendus, culpa saepe mollitia labore
      ducimus itaque doloribus iusto vero commodi quam vel possimus cupiditate?
      Repellendus commodi libero in eligendi similique ex aspernatur unde velit
      iure quia veritatis laborum recusandae nulla molestiae quisquam, est illo,
      eos optio assumenda fugiat. Quis placeat explicabo eius ab praesentium rem
      eum rerum similique fugiat, iure voluptatibus voluptatum consequuntur
      quisquam cumque quas repellat doloremque tenetur maiores molestias. Magnam
      at esse nesciunt molestias architecto repudiandae ratione perferendis
      officiis eum, odit, sit dolores modi autem. Eum nisi dicta, error, ea
      ipsum amet, quasi minima maxime ullam rerum eius! Totam voluptates
      voluptate cupiditate assumenda vitae aspernatur vero? Ipsam quaerat
      recusandae amet quae nulla facere dolorum nisi et non accusamus harum
      corporis culpa, eveniet sed nobis saepe error, consectetur dolores id? Ut
      possimus quod asperiores repellat. Tenetur itaque autem voluptatibus nisi
      laudantium, saepe aliquid? Assumenda veritatis fuga mollitia vitae.
      Accusantium distinctio ipsa consequatur quisquam minus rerum dolorem
      possimus quibusdam. Doloremque obcaecati, magni sint sequi expedita cumque
      at earum totam iure aperiam, sed a quae inventore illum eius eveniet
      fugiat velit magnam dolore eum. Voluptas ipsum non ullam inventore modi
      consequuntur maxime odit reiciendis eos in, praesentium consequatur nobis
      delectus fugit sed iste blanditiis nam dicta quisquam dolor possimus esse.
      Assumenda iure autem quae blanditiis. Dolorum quaerat commodi
      reprehenderit quis minus ipsa nulla voluptatibus natus magni placeat in
      maiores soluta, tempore, quibusdam, nisi ipsam provident vitae rerum
      numquam cum dicta quas unde fugit dignissimos! Quasi officia numquam error
      ratione dolore doloribus voluptate obcaecati neque deserunt
      exercitationem. Maiores, adipisci dicta? Nobis ipsam at voluptatibus
      quisquam? Maxime earum sed dolore dolores a quis natus nostrum rem cumque
      veritatis modi delectus, magni sequi sapiente sint necessitatibus eos
      consectetur itaque suscipit debitis, ducimus amet eaque et adipisci. Animi
      omnis temporibus aliquam atque, aut voluptate exercitationem similique
      nisi reiciendis est perferendis architecto repellendus cumque quibusdam
      accusantium deserunt dolorum sunt accusamus modi pariatur excepturi itaque
      quia dolor? Mollitia dicta sit commodi modi ullam. Debitis illum nostrum,
      adipisci cumque voluptate dolorem incidunt beatae totam doloremque autem
      facilis cupiditate placeat? Dignissimos veritatis, suscipit architecto
      corrupti, optio animi cupiditate fugit amet, quos repellendus aliquid
      labore? Corporis, laudantium! Voluptas tempore, vel totam blanditiis quod
      dolore quas veritatis officiis quis possimus ducimus! Aperiam repellendus
      distinctio, molestiae est saepe non ea tempora velit at, quas facere
      molestias id necessitatibus doloribus voluptatum. Aperiam, sed quo
      assumenda nostrum quidem rerum nesciunt iure tempore quibusdam eius,
      architecto itaque accusamus odit magnam rem officiis ducimus minima cumque
      eos velit! Iste quaerat impedit similique est, nemo quia consectetur
      doloribus itaque? Non ad maiores, ullam obcaecati maxime quod eveniet
      tempore laboriosam optio facilis natus temporibus, quae nihil, atque
      necessitatibus id totam aliquid. Laudantium eum nulla consequuntur
      distinctio. Aspernatur corrupti cupiditate qui neque est hic consequatur
      cumque ut obcaecati natus, maiores in magni, a quidem non illo. Assumenda
      veritatis eum sint, maxime error asperiores doloremque, totam adipisci
      quaerat officiis odio nemo quas, neque modi. Sit, voluptatem consequatur
      repellendus voluptatibus necessitatibus assumenda recusandae perferendis.
      Quisquam quo molestiae, consequatur ad molestias sequi perferendis vel,
      debitis eligendi, tenetur rem nam voluptatum perspiciatis iure quas
      corporis odio. Soluta minus ducimus magnam recusandae quo mollitia, hic
      dolores natus, nemo quod, cupiditate cumque. A, officiis ea? Animi,
      recusandae explicabo? Dolorum dicta dolorem excepturi doloribus at quasi
      laudantium aperiam, ad possimus commodi nulla, delectus quos fuga iusto
      dolore doloremque mollitia maxime. Nam consectetur illum, velit dolor,
      ipsam ex repellendus nihil dolores aut, perspiciatis est distinctio eum
      tempora eligendi dignissimos sequi! Architecto corporis vero blanditiis,
      maxime odio expedita tempora magni. Libero delectus beatae placeat minus
      aliquam, ratione culpa ipsam corrupti ab voluptatem voluptatum nulla, cum
      dolorem adipisci nam nihil in? Tempora molestiae quis totam similique ut
      unde voluptas quidem illum? Odit magni ipsum numquam! Sint assumenda
      distinctio necessitatibus totam molestias alias dolor suscipit unde
      quisquam dolores esse perspiciatis quis odio quod atque, accusantium quos
      quaerat exercitationem optio numquam? Recusandae quaerat, nesciunt
      pariatur veniam eaque officiis ipsam ipsum, soluta consequatur dolor
      voluptatem. Modi eveniet deserunt, atque vel natus aperiam enim
      voluptatibus commodi ullam, aliquam reiciendis impedit veritatis dolorum
      quibusdam fugit maxime sit iusto culpa voluptates cum nemo consectetur
      pariatur! Laudantium fugit provident delectus blanditiis quaerat. Soluta
      nulla nihil velit ipsum nostrum, at quisquam voluptas corrupti nisi aut
      quas et incidunt mollitia! Nam ad nulla mollitia repellendus error. Ipsam,
      officia modi nam a odio assumenda, enim provident dolore, debitis quos eos
      ex suscipit! Possimus, dicta deleniti libero enim doloribus iste nobis
      corrupti velit commodi. Ea doloremque saepe quisquam error provident quasi
      ad fugiat nam, labore rerum repudiandae, quas atque. Et minus, nulla
      labore neque architecto molestias voluptatum debitis aliquam maiores
      laboriosam placeat doloremque, molestiae, in est aperiam earum eos sit
      inventore eaque corporis cupiditate quo nesciunt quibusdam magni. Nostrum
      voluptate et, pariatur provident, maiores suscipit illum minus perferendis
      aut officiis temporibus repudiandae quas eius veritatis at iusto facilis
      quidem, ex aspernatur architecto quaerat alias? Odio pariatur iusto,
      cumque repellendus et mollitia. Temporibus, accusantium tempore.
      Voluptates, doloribus? Doloremque, hic facere tenetur ab sint debitis quae
      nihil beatae tempore. Quasi commodi quam eum, assumenda voluptates aperiam
      ipsam reprehenderit repellendus architecto voluptatibus, omnis enim nisi.
      Dicta nihil libero aut numquam aliquid quibusdam quis facilis, quas, atque
      vitae, saepe provident! Vel, excepturi cum. Vero alias illum consequatur,
      quam obcaecati exercitationem nobis tempora deleniti nostrum amet veniam
      doloremque soluta laudantium dolor laboriosam corporis et illo. Velit, vel
      voluptate modi error praesentium maxime quas dignissimos, aperiam quam sed
      dolore iure natus aliquid rem! Fuga beatae sint, accusantium quasi facere
      impedit asperiores molestiae consequuntur culpa, eum harum? Eveniet neque
      sapiente praesentium deleniti sint et dignissimos incidunt doloribus
      repudiandae quos error ex hic, pariatur consequatur qui nulla assumenda
      aut similique ad voluptatum fugit dicta maiores laborum. Totam dignissimos
      iste id aliquid amet architecto earum cum consectetur non. Voluptates,
      temporibus. Necessitatibus illum hic laboriosam labore rem quisquam facere
      impedit quibusdam molestias sequi! Excepturi nulla repudiandae explicabo
      voluptate voluptas qui ipsum tempora esse quaerat, hic repellat provident,
      magni asperiores earum ducimus. Esse aliquam ad quisquam aspernatur
      doloremque provident deserunt fugit, vitae illum est enim, quidem alias
      ipsa. Tempore nostrum, voluptas autem suscipit recusandae incidunt non
      asperiores iusto architecto velit quisquam facilis possimus officia
      quaerat dolor eius fuga exercitationem, ut temporibus illo molestiae.
      Cumque non laboriosam architecto exercitationem consequatur molestias
      sint. Modi illo qui itaque earum illum repellat facere blanditiis
      laboriosam, harum quidem sunt unde nostrum alias deleniti, laborum dolor
      possimus delectus rem nemo perferendis aperiam iusto sint? Ad, est,
      architecto commodi iste ut quis exercitationem repudiandae amet voluptate
      soluta, esse odio quasi illo eum! Sapiente nesciunt optio laborum placeat
      at accusamus rem eius nihil hic recusandae. Ipsum nulla voluptates beatae
      quibusdam autem repellendus natus eligendi illo nemo at, aliquid porro
      reprehenderit delectus dolor ipsa animi est optio quod suscipit nisi quam
      odit possimus. Odio porro, harum consectetur ratione repellendus iusto
      veritatis eveniet exercitationem molestiae quod alias minus velit
      incidunt. Reprehenderit architecto sapiente, quisquam nostrum tempora
      error totam ratione, dolorem vero perferendis repellendus eius et nemo
      quis. Numquam possimus saepe, earum tempora nesciunt voluptas amet libero
      cumque magni? Ab similique voluptas ex nulla porro sit ducimus, veniam
      possimus quia quidem quae iusto quibusdam hic doloremque tenetur natus cum
      a voluptatum non reiciendis optio facere ratione adipisci debitis! Est rem
      tenetur iure cumque corrupti illum vitae unde doloremque eveniet! Dolorum
      corporis beatae quis repellat fugiat fuga delectus, autem sequi quos porro
      nostrum expedita hic, repudiandae atque sed officia eos! Exercitationem
      perspiciatis earum a? Nihil eum sint dolor aperiam dolorum ullam corrupti
      dolores porro fuga mollitia. Voluptas, inventore alias mollitia suscipit
      quisquam corporis consequatur aliquid repudiandae. Suscipit quasi sit
      voluptatum quam nobis sunt molestiae quas, deleniti id odio, magnam
      pariatur omnis eos harum ullam consectetur temporibus minus. Ipsam, quia
      libero dolor, maxime temporibus consectetur atque minima soluta numquam,
      voluptatibus laboriosam itaque. Magni culpa autem hic dolores voluptate,
      voluptatum veritatis magnam dolore. Eveniet eius facilis quos, minus nam
      culpa blanditiis delectus veniam magnam repellendus, libero similique ad
      ipsam consectetur tempore ab ullam quod debitis voluptatum dolorum quas
      dicta sed reiciendis minima. Dolore suscipit expedita tempora vel ipsam
      atque numquam alias maxime repellat sit veritatis, ullam facilis culpa
      voluptatem perferendis cumque provident rem odio mollitia aperiam dolores
      eum? Fuga sunt quis omnis laboriosam officiis, modi ea dignissimos soluta
      alias aut accusantium sequi culpa qui recusandae similique nam a dolore
      suscipit! Tempore magnam vero nam eligendi atque libero debitis,
      repudiandae iste vitae cumque? Expedita commodi, cum nostrum neque
      necessitatibus tempore aspernatur repudiandae harum qui doloribus aliquid
      quisquam, reprehenderit sint optio? Ea, expedita tempore cum, atque
      aperiam nihil earum sit rerum quibusdam aut iste cupiditate veritatis
      deserunt at! Repudiandae modi nostrum, voluptate saepe accusantium quos
      neque omnis ad quia architecto, illum repellat repellendus adipisci, culpa
      ut placeat. Nobis magni autem at ipsa perspiciatis, expedita voluptates
      fugiat aut quidem ipsam, qui quo animi vel omnis est tenetur. Eius unde
      provident a. Molestias porro aliquid recusandae! Non quisquam adipisci
      totam labore provident! Totam, consequatur animi earum laboriosam
      molestiae ut consequuntur. Facere hic ipsam ipsa cum itaque ab soluta,
      provident neque dolore, labore ea illum non possimus eligendi mollitia
      expedita. Et vitae tenetur dicta debitis, minima ad consectetur doloribus
      ea aut officiis vel ipsa saepe odio iste id hic earum! Quasi officiis
      ullam fugit eaque, tempora adipisci ad culpa consequuntur dolor qui modi
      dolore minima ea itaque magni obcaecati suscipit ex accusamus
      exercitationem nobis eos! Excepturi, laboriosam modi? Mollitia corrupti,
      id qui delectus sapiente sed vero, unde eligendi expedita quaerat nemo
      tempora vitae aspernatur incidunt, molestiae autem. Ratione perferendis ut
      architecto numquam accusamus? Quod, quam maiores eius voluptate vitae
      sapiente cupiditate animi dolorem corrupti optio ut laborum? Incidunt in
      aliquid dolore reprehenderit odit doloribus nam molestias quisquam nulla
      obcaecati voluptatibus ullam fugit vitae iure ipsa ipsum veniam autem,
      ipsam aliquam animi mollitia! At repellat ipsam quod exercitationem
      molestiae quisquam eveniet adipisci expedita quidem accusantium.
      Reprehenderit.
    </div>
  </ModalComponent>

  <SidebarComponent />
</main>
