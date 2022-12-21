<script>
  import '@shoelace-style/shoelace/dist/components/button/button.js';
  import { onMount } from 'svelte';

  export let label;
  export let href;
  export let use;
  export let variant;

  let button;

  onMount(() => {
    if ( use == 'dropdown' ) {
      // can't set "slot" attribute in in the HTML
      button.setAttribute('slot', 'trigger');
    }
  })

</script>

<style>
  sl-button::part(base) {
    color: black;
    padding: 0;
  }

  sl-button::part(label) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
</style>

<sl-button bind:this={button} variant="text" caret={use !== undefined}>{label}</sl-button>
