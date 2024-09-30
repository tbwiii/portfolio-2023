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

<div class={["splash overflow-hidden h-screen", hideSplash ? "hide" : "" ].join(" ")}>
  <SplashTitle />
  <div class={["transition-all absolute top-1/2 left-1/2", hideSplash ? "scale-0 opacity-0" : "opacity-100 scale-100" ].join(" ")}>
    <Triangle />
    <TriangleAlt />
  </div>
</div>

<style>
  .splash {
    transition: all 1s ease;
  }
</style>