// import './app.css'
import Header from './lib/Header.svelte';

const apps = [];
document.querySelectorAll('hathi-website-header').forEach((el) => {
  let props = {};
  if ( el.hasAttribute('search_state') ) {
    props['search_state'] = el.getAttribute('search_state');
  }
  const app = new Header({
    target: el,
    props: props
  })
  apps.push(apps);
})

// const app = new Header({
//   target: document.querySelector('hathi-website-header'),
// })

export default apps;
