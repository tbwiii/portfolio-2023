<script>
  import "../app.css";
  import { Floor } from "$lib/components"
  import { SiteFooter } from "$lib"
</script>

<div class="layout-wrapper text-purple-200 min-h-screen">
  <slot />
  <SiteFooter />
  <Floor />
</div>