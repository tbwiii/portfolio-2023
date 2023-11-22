<script>
  import { onMount, onDestroy } from "svelte";
  import { Splash, Tools, MissionStatement } from "$lib";
  import { intro } from '$lib/stores/index';

  let introVal = "";
  let y = 0;

  $: if (y > 200) {
    intro.set(false)
  } else if (y < 10) {
    intro.set(true)
  }

  const unsubscribe = intro.subscribe((value) => introVal = value);

  onDestroy(unsubscribe);
</script>

<svelte:window bind:scrollY={y} />
<Splash />
<MissionStatement />
<Tools />
