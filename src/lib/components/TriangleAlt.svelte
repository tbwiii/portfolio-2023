<div class="triangleAlt"></div>

<style>

.triangleAlt {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vmin;
  aspect-ratio: 4/3;
  transform: translate(-50%, -50%) rotate(1deg);
  filter: drop-shadow(0 0 15px #fa7ffc);
  z-index: 500;
  perspective: 1000px;
  animation: triangleAlt 25s linear infinite;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #fff, #fa7ffc);
    clip-path: polygon(0% 0%, 57% 93%, 55% 99%, 9% 4%, 100% 1%, 55% 98%, 54% 91%, 90% 5%);
    transform: translateY(4vmin);
  }
}

@keyframes triangleAlt {
  from {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  50% {
    transform: translate(-50%, -49%) rotateX(20deg) rotateY(25deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(20deg);
  }
}
</style>