<script>
  import { intro } from '$lib/stores/index';
  let showHeader = false;

  intro.subscribe((value) => showHeader = !value);

  function toTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
</script>

<header id="header" class={[`
  site-header
  fixed
  bg-black
  bg-opacity-80
  py-4
  w-full
  transition-all
  -top-72
  z-10`, showHeader ? "show" : ""].join(" ")}
>
  <div class="container m-auto flex justify-between">
    <div class="grid grid-cols-2 gap-12 items-center">
      <h1 class={showHeader ? "show" : ""}>
        <button class="
          name
          relative
          uppercase
          italic
          text-5xl
          font-bold
          left-0
          text-white"
          on:click={toTop}
        >
          <span class="shadow">Ted Waller</span>
          <span class="gradient">Ted Waller</span>
        </button>
      </h1>

      <h2 class={[`
        tag-line
        text-white
        m-0
        relative
        leading-none
        pt-2
        text-3xl`, showHeader ? "show" : ""].join(" ")}
      >
        Full Stack Developer
      </h2>
    </div>
    <div class="flex items-center gap-2">
      <a class="
        nav-link
        flex
        items-center
        ml-4
        border
        border-transparent
        rounded
        p-1
        transition-all
        hover:border-white"
        href="https://github.com/tbwiii/"
      >
        <img class="w-8 h-8" src="/github.png" alt="GitHub Logo">
        <span class="nav-text block pointer-events-none text-center opacity-0 grow">GitHub</span>
      </a>
      <a class="
        nav-link
        flex
        items-center
        ml-4
        border
        border-transparent
        rounded
        p-1
        transition-all
        hover:border-white"
        href="https://www.linkedin.com/in/tbwiii/"
      >
        <img class="w-8 h-8" src="/linkedin.png" alt="LinkedIn Logo">
        <span class="nav-text block pointer-events-none text-center opacity-0 grow">LinkedIn</span>
      </a>
    </div>
  </div>
</header>

<style>
  .site-header {
      /* box-shadow: 0 0 0.3em #fff, 0 0 0.4em #fe05e1, 0 0 1.8em #f958e6; */
    display: none;
    @media (min-width: 1060px) {
      display: block;
    }

      &.show {
        top: 0;
        opacity: 100;
    }
  }

  .site-header:hover {
    & .name {
      animation-play-state: running;
    }
  }
  .name {
    font-family: "Exo";
    letter-spacing: 0.08em;
    transform: skew(-15deg);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    color: transparent;
    animation: float 3s ease-in-out 0s infinite alternate;
    animation-play-state: paused;
    left: -12rem;
    transition: all .4s ease-out .2s;

    &::after {
      content: "";
      position: absolute;
      top: -0.1em;
      right: 0.05em;
      width: 0.4em;
      height: 0.4em;
      background:
        radial-gradient(white 3%, #ffffff30 15%, #ffffff50 30%, transparent 50%),
        radial-gradient(#ffffff30 50%, transparent 60%) 50% 50% / 5% 100%,
        radial-gradient(#ffffff30 50%, transparent 60%) 50% 50% / 70% 5%;
      background-repeat: no-repeat;
    }
  }

  .show .name {
      left: 0;
    }

  .shadow {
    display: block;
    text-shadow: 0 0 0.1em #8ba2d0, 0 0 0.2em black,  0 0 5em #165ff3;
    -webkit-text-stroke: 0.1em rgba(black, 0.5);
  }
  .gradient {
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(#032d50 25%, #00a1ef 40%, white 50%, #20125f 50%, #8313e7 55%, #ff61af 75%);
    -webkit-background-clip: text;
    -webkit-text-stroke: 0.02em #94a0b9;
  }

  .tag-line {
    font-family: "Mr Dafoe";
    text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
    opacity: 0;
    top: -4rem;
    transition: all .4s ease-out .3s;

    &.show {
      opacity: 1;
      top: 0;
    }
  }

  .nav-link {
    width: 42px;
    height: 42px;

    &:hover {
      width: 120px;
    }
  }

  .nav-link:hover .nav-text {
    transition: all ease .3s;
    opacity: 1;
  }

  @keyframes float {
    from {
      transform: translateY(5px) skew(-15deg);
    }

    to {
      transform: translateY(-5px) skew(-15deg);
    }
  }
</style>