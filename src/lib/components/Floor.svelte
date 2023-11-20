<div class="floor-wrapper">
  <div class="floor"></div>
</div>

<style>
  .floor-wrapper {
    position: absolute;
    background: rgb(20, 12, 30);
    position: absolute;
    width: 100%;
    min-height: 100vh;
    display: flex;
    margin: 0 auto;
    overflow: hidden;
    perspective: 180px;
    perspective-origin: 50% 50%;
    perspective: 180px;
    top: 0;
  }
  .floor {
    overflow: hidden;
    position: absolute;
    width: 140%;
    left: -20%;
    height: 80%;
    bottom: -0%;
    background-image:
      linear-gradient(to bottom, #6eccee 2px, transparent 2px),
      linear-gradient(to left, #6eccee 2px, transparent 2px);
    background-size: 20px 20px, 50px 50px;
    background-position: -1px -1px, -1px -1px;
    transform: rotateX(75deg);
    animation: moveUp 5s infinite linear;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom,  rgb(20, 12, 30) 40%, transparent 70%);
    }
  }

  @keyframes moveUp {
  0% {
    background-position: 0px 0px, -1px -1px;
  }
  100% {
    background-position: -20px -20px, -1px -1px;
  }
}
</style>