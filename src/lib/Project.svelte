<script>
  export let title, tool, url, image, desc, role, tech;
</script>

<div class="
      project
      relative
      container
      text-white
      m-auto
      my-40
      text-lg">
  <div class="grid lg:grid-cols-3 xl:grid-cols-2 gap-8 items-center">
    <div class="lg:mx-12 lg:col-span-2 xl:col-span-1">
      <h3 class="title absolute text-white text-7xl">{title}</h3>
      <div class="
        box
        bg-fuchsia-800
        bg-opacity-40
        border-2
        border-fuchsia-200
        rounded
        p-12
        grid
        gap-8
        "
      >
        <p class="">{@html desc}</p>

        {#if role}
        <div>
          <h4 class="role-title mb-2 text-2xl uppercase text-white">Role</h4>
          <p>{role}</p>
        </div>
        {/if}

        <div class="flex flex-wrap">
          {#each tech as item}
            <span class="
              tech
              block
              uppercase
              px-3
              mr-2
              bg-orange-200
              text-orange-900
              text-sm mb-4 sm:mb-0"
            >{item}</span>
          {/each}
        </div>
        {#if url}
          <a class="
            button
            bg-fuchsia-300
            text-fuchsia-800
              p-2
              uppercase
              text-center
              -ml-4
              transition-all" 
            href={url}>
              Check out {title}
          </a>
        {:else}
          <span>{title} is no longer online</span>
        {/if}
      </div>
    </div>
    <div class="image-wrap rounded block bg-white p-1">
      <img class="image block drop-shadow-xl rounded" src={image} alt="">
    </div>
  </div>
  <img class="tool" src={tool.image} alt={tool.name}>
</div>

<style>
  .project {
    font-family: "Exo";
  }

  .box {
    box-shadow: 0 0 0.3em #fff, 0 0 1em #fe05e1, inset 0 0 40em #fe05e1;
  }

  .title {
    font-family: "Mr Dafoe";
    text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1;
    transform: rotate(-5deg) translateY(-80%);
    transition: all .2s linear;

  }

  .role-title {
    font-family: "Exo";
  }

  .tech {
      font-family: "exo";
      transform: skewX(-20deg);
  }

  .button {
      transform: skewX(-20deg);

      &:hover {
          transform: skewX(-20deg) scale(1.04);
      }
  }

  .image-wrap {
      box-shadow: 0 0 0.05em #024775, 0 0 0.8em #00a1ef;
  }

  .image {
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