<script>
  import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
  import '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js';
  import '@shoelace-style/shoelace/dist/components/divider/divider.js';

  export let menuLinks;

</script>

{#each menuLinks as linkText}
<sl-menu-item>{linkText}</sl-menu-item>
{/each}
