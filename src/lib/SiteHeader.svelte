<script>
  import { intro } from '$lib/stores/index';
  let showHeader = false;

  intro.subscribe((value) => showHeader = !value);
</script>

<header id="header" class={["site-header", showHeader ? "show" : ""].join(" ")}>
  <h1 class={["name", showHeader ? "show" : ""].join(" ")}>
    <span>Ted Waller</span>
    <span>Ted Waller</span>
  </h1>
</header>

<style>
  .site-header {
    @apply
      fixed
      p-4
      bg-black
      bg-opacity-40
      w-full
      opacity-0
      transition-all
      z-10;

    &.show {
      opacity: 100;
    }
  }
  .name {
    @apply
      relative
      uppercase
      italic
      text-3xl
      font-bold
      -left-full
      transition-all;

    font-family: "Exo";
    letter-spacing: 0.03em;
    transform: skew(-15deg);

    &.show {
      @apply
        left-0;
    }

    &::after {
      content: "";
      position: absolute;
      top: -0.1em;
      right: 0.05em;
      width: 0.4em;
      height: 0.4em;
      background:
        radial-gradient(255, 255, 255 3%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.05) 60%, transparent 80%),
        radial-gradient(rgba(255, 255, 255, 0.2) 50%, transparent 60%) 50% 50% / 5% 100%,
        radial-gradient(rgba(255, 255, 255, 0.2) 50%, transparent 60%) 50% 50% / 70% 5%;
      background-repeat: no-repeat;
    }
  }
  .name > span:last-child {
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(#032d50 25%, #00a1ef 40%, white 50%, #20125f 50%, #830b0b 55%, #ffd761 75%);
    -webkit-text-stroke: 0.01em #94a0b9;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 120%;
  }

</style>