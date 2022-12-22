import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".jordle.svelte-4o7dd3{display:flex;flex-direction:column;min-height:100vh}.jordle-container.svelte-4o7dd3{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"jordle svelte-4o7dd3"}"><div class="${"jordle-container svelte-4o7dd3"}">${slots.default ? slots.default({}) : ``}</div>
</section>`;
});
export {
  Layout as default
};
