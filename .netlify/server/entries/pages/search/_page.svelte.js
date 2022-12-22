import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index3.js";
const inputValue = writable("");
const filteredWords = writable([]);
const counter = writable("12972");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-hreouo{padding:2rem}h1.svelte-hreouo{margin:0}.sidebar.svelte-hreouo{padding:4rem 0 0 0}@media only screen and (min-width: 1000px){.container.svelte-hreouo{display:grid;grid-template-columns:300px 1fr;min-height:100vh}.content.svelte-hreouo{padding:5rem 3rem}.sidebar.svelte-hreouo{border-right:1px solid var(--color-border);padding:5rem 1rem 1rem 1rem}}.search.svelte-hreouo{width:100%}input.svelte-hreouo{width:100%;padding:15px 25px;border:1px solid var(--color-bg-0);background-color:var(--color-bg-2);color:var(--color-text-1);font-size:1.2em;border:2px solid var(--color-theme-1);border-radius:3px;box-sizing:border-box}input.svelte-hreouo:focus{outline:none;border-color:var(--color-theme-2)}input.svelte-hreouo::placeholder{color:var(--color-text-2)}.meta.svelte-hreouo{display:block;width:100%;margin-bottom:1rem}.word-count.svelte-hreouo{font-size:0.8em;letter-spacing:1px;text-transform:uppercase}.words.svelte-hreouo{display:flex;flex-wrap:wrap;list-style-type:none}.word.svelte-hreouo{padding:0.6em 1em;margin:3px;background-color:var(--color-bg-2);transition:0.2s ease;border-radius:3px}.word.svelte-hreouo:hover{background-color:var(--color-theme-2);color:var(--color-text)}@media only screen and (min-width: 800px){.word.svelte-hreouo{font-size:1.5em}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $filteredWords, $$unsubscribe_filteredWords;
  let $counter, $$unsubscribe_counter;
  let $inputValue, $$unsubscribe_inputValue;
  $$unsubscribe_filteredWords = subscribe(filteredWords, (value) => $filteredWords = value);
  $$unsubscribe_counter = subscribe(counter, (value) => $counter = value);
  $$unsubscribe_inputValue = subscribe(inputValue, (value) => $inputValue = value);
  $$result.css.add(css);
  $$unsubscribe_filteredWords();
  $$unsubscribe_counter();
  $$unsubscribe_inputValue();
  return `${$$result.head += `<!-- HEAD_svelte-xpi1kp_START -->${$$result.title = `<title>Jordle Search</title>`, ""}<meta name="${"description"}" content="${"Jordle Search"}"><!-- HEAD_svelte-xpi1kp_END -->`, ""}

<div class="${"container svelte-hreouo"}"><aside class="${"sidebar svelte-hreouo"}"><div class="${"search svelte-hreouo"}"><input type="${"text"}" placeholder="${"Search"}" autocomplete="${"off"}" class="${"svelte-hreouo"}"${add_attribute("value", $inputValue, 0)}></div></aside>
	
	<section class="${"content svelte-hreouo"}"><div class="${"meta svelte-hreouo"}"><span class="${"word-count svelte-hreouo"}">Words: ${escape($counter)}</span></div>

		${$filteredWords.length > 0 ? `<div class="${"words svelte-hreouo"}">${each($filteredWords, (word) => {
    return `<div class="${"word svelte-hreouo"}">${escape(word)}</div>`;
  })}</div>` : `<div><h1 class="${"svelte-hreouo"}">Jordlebase</h1>
				<p>Search the list of valid guesses, of which the list of possible words is a subset. <br>
				Use . as a wildcard letter.</p></div>`}</section>
</div>`;
});
export {
  Page as default
};
