<div class="triangle"></div>

<style>

.triangle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vmin;
  aspect-ratio: 4/3;
  transform: translate(-50%, -50%) rotate(1deg);
  filter: drop-shadow(0 0 15px #6eccee);
  z-index: 500;
  perspective: 1000px;
  animation: triangle 18s linear infinite;
  animation-direction: alternate;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #6eccee, #c7f0ff, #6eccee);
    clip-path: polygon(0% 0%, 50% 100%, 51% 85%, 0 0, 93% 4%, 48% 89%, 50% 100%, 100% 0%);
    transform: translateY(4vmin);
  }
}

@keyframes triangle {
  from {
    transform: translate(-50%, -50%) rotate(-4deg);
  }

  to {
    transform: translate(-50%, -49%) rotateX(-20deg) rotateY(-25deg);
  }
}
</style>