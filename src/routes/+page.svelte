<Stars />
<div class="grid content-center min-h-screen">
  <div class="w-45 m-auto text-center">
    <h1 class="name uppercase">
      <span>Ted Waller</span>
      <span>Ted Waller</span>
    </h1>
    <h2 class="subhead">Full Stack Developer</h2>
  </div>
</div>
<TriangleAlt />
<Triangle />

<script>
  import { Triangle, TriangleAlt, Stars } from "$lib/components";
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=REM:wght@900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Exo:wght@900&display=swap");

.name {
  font-family: "Exo", monospace;
  position: relative;
  z-index: 1000;
  position: relative;
  font-size: 9em;
  margin: 0;
  transform: skew(-15deg);
  letter-spacing: 0.03em;

  &::after {
    content: "";
    position: absolute;
    top: -0.1em;
    right: 0.05em;
    width: 0.4em;
    height: 0.4em;
    background:
      radial-gradient(white 3%, rgba(white, 0.3) 15%, rgba(white, 0.05) 60%, transparent 80%),
      radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 5% 100%,
      radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 70% 5%;
    background-repeat: no-repeat;
  }
}

.name > span:first-child {
    display: block;
    text-shadow: 0 0 0.1em #8ba2d0, 0 0 0.2em black,  0 0 5em #165ff3;
    -webkit-text-stroke: 0.06em rgba(black, 0.5);
  }

.name > span:last-child {
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(#032d50 25%, #00a1ef 40%, white 50%, #20125f 50%, #8313e7 55%, #ff61af 75%);
  -webkit-text-stroke: 0.01em #94a0b9;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subhead {
  @apply text-white m-0 -mt-24 relative;
  font-family: "Mr Dafoe";
  font-size: 5.5em;
  text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
  transform: rotate(-7deg);
  z-index: 1000;
}
</style>