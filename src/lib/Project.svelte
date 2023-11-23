<script>
  export let title, tool, url, image, desc, role, tech;
</script>

<div class="project">
  <div class="grid lg:grid-cols-3 xl:grid-cols-2 gap-8 items-center">
    <div class="lg:mx-12 lg:col-span-2 xl:col-span-1">
      <h3 class="title">{title}</h3>
      <div class="box">
        <p class="">{@html desc}</p>

        <div>
          <h4 class="role-title">Role</h4>
          <p>{role}</p>
        </div>

        <div class="flex flex-wrap">
          {#each tech as item}
            <span class="tech mb-4 sm:mb-0">{item}</span>
          {/each}
        </div>
        <a class="button" href={url}>Check out {title}</a>
      </div>
    </div>
    <div class="image-wrap">
      <img class="image" src={image} alt="">
    </div>
  </div>
  <img class="tool" src={tool.image} alt={tool.name}>
</div>

<style>
  .project {
    @apply
      relative
      container
      text-white
      m-auto
      my-40
      text-lg;
    font-family: "Exo";
  }

  .box {
    @apply
      bg-fuchsia-800
      bg-opacity-40
      border-2
      border-fuchsia-200
      rounded
      p-12
      grid
      gap-8;
    box-shadow: 0 0 0.3em #fff, 0 0 1em #fe05e1, inset 0 0 40em #fe05e1;
  }

  .title {
    @apply
      absolute
      text-white
      text-7xl;
    font-family: "Mr Dafoe";
    text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1;
    transform: rotate(-5deg) translateY(-80%);
    transition: all .2s linear;

  }

  .role-title {
    @apply
      mb-2
      text-2xl
      uppercase
      text-white;
    font-family: "Exo";
  }

  .tech {
    @apply
      block
      uppercase
      px-3
      mr-2
      bg-orange-200
      text-orange-900
      text-sm;
      font-family: "exo";
      transform: skewX(-20deg);
  }

  .button {
    @apply
      bg-fuchsia-300
      text-fuchsia-800
      p-2
      uppercase
      text-center
      -ml-4
      transition-all;
      transform: skewX(-20deg);

      &:hover {
          transform: skewX(-20deg) scale(1.04);
      }
  }

  .image-wrap {
    @apply
      rounded
      block
      bg-white
      p-1;
      box-shadow: 0 0 0.05em #024775, 0 0 0.8em #00a1ef;
  }

  .image {
    @apply
      block
      drop-shadow-xl
      rounded;
      box-shadow: 0 0 0.05em #024775, 0 0 0.8em #00a1ef;
  }

  .tool {
    position: absolute;
    right: 50%;
    top: -40px;
    transform: translateX(64%);
    width: 100px;
    height: auto;
    display: none;

    @media (min-width: 1280px) {
      display: block;
    }
  }
</style>