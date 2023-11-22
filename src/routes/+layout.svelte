<script>
  import "../app.css";
  import { Floor, Stars } from "$lib"
  import { SiteFooter, SiteHeader } from "$lib"
</script>

<div class="layout-wrapper text-purple-200">
  <Floor />
  <SiteHeader />
  <slot />
  <SiteFooter />
  <Stars />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Exo:wght@900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap");
  .layout-wrapper {
    min-height: 100vh;
  }
</style>