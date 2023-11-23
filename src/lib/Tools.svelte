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

<h2 class="h2">
  Tools
</h2>

<div class="container m-auto mb-36">
    <div class="tools-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {#each all as item}
        <button class="tool" style={`--animation-delay: ${genDelay()};`}>
          <span class="tooltip">{item.name}</span>
          <img class="tool-logo" src={`/tools/${item.image}.png`}  style={`--animation-delay: ${genDelay()};`} alt={item.name}>
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
    animation: floating 6s ease-in-out infinite alternate;
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
    animation: rotate 7s ease-in-out infinite alternate;
    animation-delay: calc(var(--animation-delay) * 400ms);

    &:hover {
      z-index: 2;
      margin-right: 45px;
      margin-left: 45px;
    }
  }

  @keyframes rotate {
    from { transform: rotateY(0deg) scale(1); }
    25% { transform: rotateY(10deg) scale(.95); }
    75% { transform: rotateY(0deg) scale(1); }
    to  { transform: rotateY(-10deg) scale(.95); }
  }

  @keyframes floating {
    from  { transform: translateY(0); }
    25%  { transform: translateY(10px); }
    to { transform: translateY(-10px); }
  }
</style>