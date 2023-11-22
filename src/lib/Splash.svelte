<script>
  import { SplashTitle, Triangle, TriangleAlt } from "$lib";
  import { intro } from "$lib/stores/index";

  let hideSplash = false;
  let introVal = true;

  intro.subscribe((value) => introVal = value);

  $: if (!introVal) {
    setTimeout(() => {
      hideSplash = true;
    }, 150);
  } else {
    setTimeout(() => {
      hideSplash = false;
    }, 150);
  }
</script>

<div class={["splash", hideSplash ? "hide" : "" ].join(" ")}>
  <SplashTitle />
  <div class={["triangles", hideSplash ? "shrink" : "" ].join(" ")}>
    <Triangle />
    <TriangleAlt />
  </div>
</div>

<style>
  .splash {
    @apply overflow-hidden h-screen;
    transition: all 1s ease;

    &.hide {
      /* @apply -mb-44; */
    }
  }

  .triangles {
    @apply transition-all absolute top-1/2 left-1/2 scale-100 opacity-100;

    &.shrink {
      @apply scale-0 opacity-0;
    }
  }

</style>