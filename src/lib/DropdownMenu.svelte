<script>
  import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
  import '@shoelace-style/shoelace/dist/components/menu/menu.js';
  import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
  import '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js';
  import '@shoelace-style/shoelace/dist/components/divider/divider.js';

  import NavButton from './NavButton.svelte';
  import DropdownMenuLinks from './DropdownMenuLinks.svelte';
  
  export let menuLabel;
  export let menuLinks;

  let handleNavigation = function() { };
</script>

<style>

</style>

<sl-dropdown on:sl-select={handleNavigation}>
  <NavButton use="dropdown" label={menuLabel} />
  <sl-menu>
    <DropdownMenuLinks {menuLinks} />
  </sl-menu>
</sl-dropdown>
