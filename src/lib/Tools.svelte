<script>
  const all = [
    {
      name: "HTML 5",
      image: "html5"
    },
    {
      name: "CSS 3",
      image: "css3"
    },
    {
      name: "Ruby",
      image: "ruby"
    },
    {
      name: "JavaScript",
      image: "js"
    },
    {
      name: "NodeJS",
      image: "node"
    },
    {
      name: "Figma",
      image: "figma"
    },
    {
      name: "Sketch",
      image: "sketch"
    },
    {
      name: "VS Code",
      image: "vscode"
    },
    {
      name: "MongoDB",
      image: "mongo"
    },
    {
      name: "PostgreSQL",
      image: "postgresql"
    },
    {
      name: "Tailwind",
      image: "tailwind"
    },
    {
      name: "VueJS",
      image: "vue"
    },
    {
      name: "Svelte",
      image: "svelte"
    },
    {
      name: "React",
      image: "react"
    },
   ];


  function genDelay() {
    return Math.floor(Math.random() * 10);
  }
</script>

<div class="container m-auto">
  <h2 class="h2">What I Use</h2>

  <div class="container m-auto">
    <div class="text-center">
      {#each all as item}
        <button class="tool" style={`--animation-delay: ${genDelay()};`}>
          <span class="tooltip">{item.name}</span>
          <img class="tool-logo" src={`/tools/${item.image}.png`} alt={item.name}>
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .tool {
    @apply relative;

    &:hover::after {
      @apply absolute;
      display: block;
      width: 100%;
      height: 100%;
      content: "";
      transform: scale(1.4);
      background: radial-gradient(circle, rgba(254,100,225, .7) 0%, rgba(254,5,225,0) 60%);
      top: 0;
      z-index: -1;
    }
  }

  .tool:hover .tooltip {
      @apply
        opacity-100
        -top-12;
    }

  .tooltip {
    @apply
      absolute
      bg-black
      bg-opacity-70
      left-1/2
      -translate-x-1/2
      opacity-0
      p-3
      rounded-full
      text-xl
      -top-16
      transition-all
      pointer-events-none;
    font-family: "Exo";
    width: 100%;

  }

  .tool-logo {
    @apply
      transition-all
      relative;
    max-width: 150px;
    max-height: 100px;
    margin-right: -15px;
    margin-left: -15px;
    animation: floating 10s ease-in-out infinite;
    animation-delay: calc(var(--animation-delay) * 400ms);

    &:hover {
      z-index: 2;
      margin-right: 45px;
      margin-left: 45px;
    }
  }

  @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }
  }
</style>