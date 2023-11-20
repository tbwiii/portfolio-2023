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
    width: 200%;
    left: -60%;
    height: 130%;
    bottom: -30%;
    background-image:
      linear-gradient(to bottom, #6eccee 4px, transparent 4px),
      linear-gradient(to left, #6eccee 4px, transparent 4px);
    background-size: 50px 50px, 100px 100px;
    background-position: -1px -1px, -1px -1px;
    transform: rotateX(75deg);
    animation: moveUp 5s infinite linear;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom,  rgb(20, 12, 30) 20%, transparent);
    }
  }

  @keyframes moveUp {
  0% {
    background-position: 0px 0px, -1px -1px;
  }
  100% {
    background-position: -50px -50px, -1px -1px;
  }
}
</style>