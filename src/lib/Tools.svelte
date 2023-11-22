<script>
  const all = [
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
    {
      name: "NodeJS",
      image: "node"
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
      name: "JavaScript",
      image: "js"
    },
    {
      name: "Ruby",
      image: "ruby"
    },
    {
      name: "Godot",
      image: "godot"
    },
    {
      name: "HTML 5",
      image: "html5"
    },
    {
      name: "CSS 3",
      image: "css3"
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
      name: "Tailwind",
      image: "tailwind"
    },
   ];


  function genDelay() {
    return Math.floor(Math.random() * 10);
  }
</script>

<div class="container m-auto">
    <div class="tools-grid md:grid-cols-3 lg:grid-cols-5">
      {#each all as item}
        <button class="tool" style={`--animation-delay: ${genDelay()};`}>
          <span class="tooltip">{item.name}</span>
          <img class="tool-logo" src={`/tools/${item.image}.png`} alt={item.name}>
        </button>
      {/each}
    </div>
</div>

<style>
  .tools-grid {
    @apply
      grid
      place-content-center
      place-items-center;
    display: grid;

  }

  .tool {
    @apply relative p-8 grid place-items-center;
    animation: floating 8s ease-in-out infinite;
    animation-delay: calc(var(--animation-delay) * 400ms);

    &:hover::after {
      @apply absolute;
      display: block;
      width: 100%;
      height: 100%;
      content: "";
      transform: scale(1.4);
      background: radial-gradient(circle, rgba(254,100,225, .5) 0%, rgba(254,5,225,0) 50%);
      top: 0;
      z-index: -1;
    }
  }

  .tool:hover .tooltip {
      @apply
        opacity-100
        top-1/2;
    }

  .tooltip {
    @apply
      absolute
      bg-black
      bg-opacity-70
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      opacity-0
      p-3
      rounded-full
      text-xl
      top-1/3
      transition-all
      pointer-events-none
      z-20;
    font-family: "Exo";
  }

  .tool-logo {
    @apply
      transition-all
      relative;

    max-height: 150px;
    animation: rotate 6s linear infinite;
    animation-delay: calc(var(--animation-delay) * 400ms);

    &:hover {
      z-index: 2;
      margin-right: 45px;
      margin-left: 45px;
    }
  }

  @keyframes rotate {
    0% { transform: skew(0, 0); }
    25%   { transform: skew(0deg, 2.5deg); }
    75%  { transform: skew(0deg, -2.5deg); }
    0% { transform: skew(0, 0); }
  }

  @keyframes floating {
    0% { transform: translate(0,  0px); }
    25%  { transform: translate(0, 14px); }
    75%  { transform: translate(0, -14px); }
    100%   { transform: translate(0, -0px); }
  }
</style>