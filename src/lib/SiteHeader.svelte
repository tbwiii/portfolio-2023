<script>
  import { intro } from '$lib/stores/index';
  let showHeader = false;

  intro.subscribe((value) => showHeader = !value);
</script>

<header id="header" class={["site-header", showHeader ? "show" : ""].join(" ")}>
  <div class="container m-auto flex justify-between">
    <h1 class={["name", showHeader ? "show" : ""].join(" ")}>
      Ted Waller
    </h1>

    <div class="flex items-center">
      <a class="nav-link" href="https://github.com/tbwiii/">
        <img class="nav-logo" src="/github.png" alt="GitHub Logo">
        <span class="nav-text">GitHub</span>
      </a>
      <a class="nav-link" href="https://www.linkedin.com/in/tbwiii/">
        <img class="nav-logo" src="/linkedin.png" alt="LinkedIn Logo">
        <span class="nav-text">LinkedIn</span>
      </a>
    </div>
  </div>
</header>

<style>
  .site-header {
    @apply
      fixed
      py-4
      w-full
      transition-all
      -top-72
      bg-gradient-to-r
      from-cyan-600
      to-fuchsia-600
      bg-opacity-60
      z-10;

      box-shadow: 0 0 0.3em #fff, 0 0 0.4em #fe05e1, 0 0 1.8em #f958e6;
    &.show {
      top: 0;
      opacity: 100;
    }
  }
  .name {
    @apply
      relative
      uppercase
      italic
      text-5xl
      font-bold
      left-0
      text-white
      transition-all;

    mask: linear-gradient(
      to top,
      #000 1%, 0%,
      #0000 8%, 0%,
      #000 10%, 0%,
      #0000 16%, 0%,
      #000 19%, 0%,
      #0000 24%, 0%,
      #000 28%, 0%,
      #0000 32%, 0%,
      #000 37%, 0%,
      #0000 40%, 0%,
      #000 46%, 0%,
      #0000 48%, 0%,
      #000 55%, 0%,
      #0000 56%, 0%,
      #000 57%     /* visible til end */
    ) no-repeat;

    font-family: "Exo";
    letter-spacing: 0.15em;
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

  .nav-link {
    @apply
      flex
      items-center
      block
      ml-4
      border
      border-transparent
      rounded
      p-1
      transition-all;
    width: 42px;
    height: 42px;

    &:hover {
      @apply
        border-white;
      width: 120px;
    }
  }

  .nav-logo {
    @apply
      w-8
      h-8;
  }

  .nav-text {
    @apply
      block
      text-center
      opacity-0
      grow;
      pointer-events: none;
  }

  .nav-link:hover .nav-text {
    @apply
    transition-all
    opacity-100;
  }
</style>