<script>
  import { onMount, onDestroy } from "svelte";
  import { intro } from "$lib/stores/index";
  import FontFaceObserver from "fontfaceobserver";

  let introVal = "";

  let showName = false;
  let showTag = false;

  const unsubscribe = intro.subscribe((value) => introVal = value);

  onDestroy(unsubscribe);

  onMount(() => {
    var nameFont = new FontFaceObserver("Exo");
    nameFont.load().then(function () {
      showName = true;
    });

    var tagFont = new FontFaceObserver("Mr Dafoe");
    tagFont.load().then(function () {
      showTag = true;
    });
  });
</script>

<div class="grid content-center min-h-screen w-full top-0">
  <div class="w-45 m-auto text-center">
    <h1 class={["name", showName && introVal ? "show" : ""].join(" ")}>
      <span class="shadow">Ted Waller</span>
      <span class="gradient">Ted Waller</span>
      <span class="shine"></span>
    </h1>
    <h2 class={["tag-line", showTag && introVal ? "show" : ""].join(" ")}>Full Stack Developer</h2>
  </div>
</div>

<style>
.name {
  @apply relative uppercase m-0 -mt-10 opacity-0;
  font-family: "Exo";
  z-index: 1000;
  font-size: 9em;
  transform: skew(-15deg);
  letter-spacing: 0.03em;
  left: -100%;
  transition: all .2s linear;
  animation: blipName 3.7s linear 2s 1;

  &.show {
    opacity: 1;
    left: 0;
  }
}

.shine {
    content: "";
    position: absolute;
    top: 0.15em;
    right: 0.2rem;
    width: 0.4em;
    height: 0.4em;
    background:
      radial-gradient(white 3%, #ffffff30 15%, #ffffff50 30%, transparent 50%),
      radial-gradient(#ffffff30 50%, transparent 60%) 50% 50% / 5% 100%,
      radial-gradient(#ffffff30 50%, transparent 60%) 50% 50% / 70% 5%;
    background-repeat: no-repeat;
    animation: slide 3s ease-in-out 0s 1 ;

  }

  .shadow {
    display: block;
    text-shadow: 0 0 0.1em #8ba2d0, 0 0 0.2em black,  0 0 5em #165ff3;
    -webkit-text-stroke: 0.06em rgba(black, 0.5);

    perspective: 1000px;
  }

.gradient {
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(#032d50 25%, #00a1ef 40%, white 50%, #20125f 50%, #8313e7 55%, #ff61af 75%);
  -webkit-text-stroke: 0.01em #94a0b9;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tag-line {
  @apply text-white m-0 -mt-16 relative leading-none;
  font-family: "Mr Dafoe";
  font-size: 5.5em;
  text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
  transform: rotate(-7deg);
  z-index: 1000;
  opacity: 0;
  right: -100%;
  transition: all .2s linear;
  animation: blipTag 3.7s linear 5s 1;

  &.show {
    opacity: 1;
    right: 0;
  }
}

@keyframes blipName {
  from {
    transform: skew(-15deg) scaleY(1) skew(0, 0);
  }
  49.5% {
    transform: skew(-15deg) scaleY(1) skew(0, 0);
  }
  50% {
    transform: skew(-15deg)  scaleY(0.01) skew(253deg, 32deg);
  }
  50% {
    transform: skew(-15deg)  scaleY(1) skew(0, 0);
  }


  59% {
    transform: skew(-15deg) scaleY(1) skew(0, 0);
  }
  60% {
    transform: skew(-15deg)  scaleY(0.1) skew(253deg, 32deg);
  }
  61% {
    transform: skew(-15deg) scaleY(1) skew(0, 0);
  }

  to {
    transform: skew(-15deg) scaleY(1) skew(0, 0);
  }
}
@keyframes blipTag {
  from {

  }

  19.5% {
    transform: rotate(-7deg) scaleY(1) skew(0, 0);
  }
  20% {
    transform: rotate(-7deg)  scaleY(0.01) skew(253deg, 32deg);
  }
  20% {
    transform: rotate(-7deg)  scaleY(1) skew(0, 0);
  }


  29% {
    transform: rotate(-7deg) scaleY(1) skew(0, 0);
  }
  30% {
    transform: rotate(-7deg)  scaleY(0.1) skew(253deg, 32deg);
  }
  31% {
    transform: rotate(-7deg) scaleY(1) skew(0, 0);
  }

  90.5% {
    transform: rotate(-7deg) scaleY(1) skew(0, 0);
  }
  91% {
    transform: rotate(-7deg)  scaleY(0.01) skew(253deg, 32deg);
  }
  92% {
    transform: rotate(-7deg)  scaleY(1) skew(0, 0);
  }


  97% {
    transform: rotate(-7deg) scaleY(1) skew(0, 0);
  }
  98% {
    transform: rotate(-7deg)  scaleY(0.1) skew(253deg, 32deg);
  }
  99% {
    transform: rotate(-7deg) scaleY(1) skew(0, 0);
  }

  to {
    transform: rotate(-7deg) ;
  }
}

@keyframes slide {
  from {
    right: 55px;
  }

  to {
    right: .2rem;
  }
}
</style>