import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-10kk3go.svelte-10kk3go{display:flex;justify-content:space-between;position:fixed;top:0;width:100%;z-index:100}.logo.svelte-10kk3go.svelte-10kk3go{display:flex;align-items:center;margin-left:1em}.logo.svelte-10kk3go a.svelte-10kk3go{color:var(--color-text);font-size:1.2em;text-decoration:none;font-weight:900;text-transform:uppercase;letter-spacing:-0.1em;font-style:italic;transition:0.2s ease}.logo.svelte-10kk3go a.svelte-10kk3go:hover{text-shadow:0 0 1em var(--color-theme-1)}nav.svelte-10kk3go.svelte-10kk3go{display:flex;justify-content:center;margin-right:1em}ul.svelte-10kk3go.svelte-10kk3go{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-10kk3go.svelte-10kk3go{position:relative;height:100%}li[aria-current='page'].svelte-10kk3go.svelte-10kk3go::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-10kk3go a.svelte-10kk3go{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-size:0.8rem;text-transform:uppercase;letter-spacing:0.15em;text-decoration:none;transition:color 0.2s linear}a.svelte-10kk3go.svelte-10kk3go:hover{color:var(--color-theme-1);text-shadow:0 0 1em var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-10kk3go"}"><div class="${"logo svelte-10kk3go"}"><a href="${"/"}" class="${"svelte-10kk3go"}">Jordle
		</a></div>

	<nav class="${"svelte-10kk3go"}"><ul class="${"svelte-10kk3go"}"><li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/jordle") ? "page" : void 0,
    0
  )} class="${"svelte-10kk3go"}"><a href="${"/jordle"}" class="${"svelte-10kk3go"}">Jordle</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/search" ? "page" : void 0, 0)} class="${"svelte-10kk3go"}"><a href="${"/search"}" class="${"svelte-10kk3go"}">Search</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="${"svelte-10kk3go"}"><a href="${"/#help"}" class="${"svelte-10kk3go"}">Help</a></li></ul></nav>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-p17ot4.svelte-p17ot4{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px;border-top:1px solid var(--color-border);background-color:var(--color-bg-1)}footer.svelte-p17ot4 a.svelte-p17ot4{font-weight:bold}footer.svelte-p17ot4 p.svelte-p17ot4{font-size:12px;letter-spacing:1px}@media(min-width: 480px){footer.svelte-p17ot4.svelte-p17ot4{padding:12px 0}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let year = new Date().getFullYear();
  $$result.css.add(css);
  return `<footer class="${"svelte-p17ot4"}"><p class="${"svelte-p17ot4"}"><a href="${"/"}" class="${"svelte-p17ot4"}">JORDLE</a> ⓒ ${escape(year)}</p>
</footer>`;
});
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
