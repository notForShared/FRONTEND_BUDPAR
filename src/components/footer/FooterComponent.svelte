<script>
  import FooterInstagramIcon from "../../assets/svg/FooterInstagramIcon.svelte";
  import FooterFacebookIcon from "../../assets/svg/FooterFacebookIcon.svelte";
  import FooterAddressIcon from "../../assets/svg/FooterAddressIcon.svelte";
  import FooterYoutubeIcon from "../../assets/svg/FooterYoutubeIcon.svelte";
  import FooterTwitterIcon from "../../assets/svg/FooterTwitterIcon.svelte";

  import FooterEmailIcon from "../../assets/svg/FooterEmailIcon.svelte";
  import FooterPhoneIcon from "../../assets/svg/FooterPhoneIcon.svelte";
  import FooterWebIcon from "../../assets/svg/FooterWebIcon.svelte";
</script>

<div class="__footer">
  <div class="border-y px-10 lg:px-36 py-12 border-[#e6e6e6]">
    <div
      class="__footer-wrapper grid gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-[#6e7074]"
    >
      <!-- info -->
      <div class="w-full text-center pt-12 md:pt-0 md:text-left">
        <h1 class="text-3xl font-bold capitalize">
          dinas kebudayaan dan pariwisata
        </h1>
        <h3 class="text-2xl capitalize">Kabupaten Tapin</h3>
        <div
          class="__office-address pt-3 flex items-center justify-center md:justify-start"
        >
          <FooterAddressIcon />
          <div class="flex flex-col pl-4">
            <span>JL. Jendral Sudirman No. 89</span>
            <span>Tapin Utara, Kabupaten Tapin</span>
            <span>Kalimantan Selatan, 71152</span>
          </div>
        </div>
      </div>
      <!-- info -->

      <!-- contact -->
      <div class="w-full text-center pt-12 md:pt-0">
        <span class="text-2xl font-bold capitalize">Kontak Kami</span>
        <div
          class="__contact-info pt-3 md:pl-10 flex flex-col items-center md:items-start"
        >
          <div class="__phone flex items-center">
            <FooterPhoneIcon />
            <span class="bg-slate-300 rounded px-[3px] ml-2 cursor-pointer">
              (0517) 32016
            </span>
          </div>
          <div class="__email flex items-center pt-2">
            <FooterEmailIcon />
            <a
              class="capitalize ml-2 hover:underline"
              href="mailto:disbudpar.tapinkab.go.id"
            >
              disbudpar.go.id
            </a>
          </div>
          <div class="__site flex items-center pt-2">
            <FooterWebIcon />
            <a
              class="ml-2 hover:underline"
              href="https://disbudpar.tapinkab.go.id"
            >
              www.disbudpar.tapinkab.go.id
            </a>
          </div>
        </div>
      </div>
      <!-- contact -->

      <!-- social media -->
      <div class="w-full text-center md:text-left lg:text-center pt-12 md:pt-0">
        <span class="text-2xl font-bold capitalize">Sosial Media</span>
        <div
          class="__social-media-list flex justify-center md:justify-start lg:justify-center pt-5"
        >
          <div class="__twitter px-3">
            <a href="#!">
              <FooterTwitterIcon />
            </a>
          </div>
          <div class="__facebook px-3">
            <a href="#!">
              <FooterFacebookIcon />
            </a>
          </div>
          <div class="__youtube px-3">
            <a href="#!">
              <FooterYoutubeIcon />
            </a>
          </div>
          <div class="__instagram px-3">
            <a href="#!">
              <FooterInstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <!-- social media -->

      <!-- logo -->
      <div class="w-full pt-12 md:pt-0">
        <div
          class="__logo-wrapper flex justify-center flex-col md:justify-start lg:justify-center"
        >
          <div class="flex justify-center">
            <img
              class="w-[150px] h-[64px]"
              src="/assets/logo/win.png"
              alt="footer logo wonderful indonesia"
            />
            <img
              class="w-20 h-auto ml-3"
              src="/assets/logo/tapin.png"
              alt="footer logo kab. tapin"
            />
          </div>
          <div class="flex justify-center pt-5">
            <img
              class="w-[120px] h-auto"
              src="/assets/logo/bud-tap.png"
              alt="logo budpar"
            />

            <img
              class="w-[5.3rem] h-auto ml-8"
              src="/assets/logo/kominfo.png"
              alt="logo kominfo"
            />
          </div>
        </div>
      </div>
      <!-- logo -->
    </div>
  </div>
  <div class="__copyright text-center py-3">
    <div class="text-[13px] capitalize text-[#6e7074]">
      <span>copyright &copy; 2022</span>
      <a href="http://disbudpar.tapinkab.go.id/" class="hover:underline">
        DISBUDPAR
      </a>
      <span>Kab. Tapin</span>
    </div>
  </div>
</div>
