import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const background = "/_app/immutable/assets/intro-bg-2-41d71ed6.jpg";
const Hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".intro.svelte-1wek7f8.svelte-1wek7f8{min-height:100vh;max-width:100%;text-align:center;position:relative;z-index:2}.intro-content.svelte-1wek7f8.svelte-1wek7f8{overflow:hidden;position:relative;padding-top:15vh}.intro-bg.svelte-1wek7f8.svelte-1wek7f8{position:fixed;width:100%;height:100%;top:0;left:0;overflow:hidden}.intro-bg-img.svelte-1wek7f8.svelte-1wek7f8{position:absolute;top:0;left:0;z-index:-2;width:100%;min-height:100vh;object-fit:cover}.start.svelte-1wek7f8.svelte-1wek7f8{font-size:1.5em;text-transform:uppercase;letter-spacing:0.1em;text-shadow:0 0 1em var(--color-theme-1)}.intro-title.svelte-1wek7f8.svelte-1wek7f8{margin-top:10vh;font-weight:900;text-transform:uppercase;letter-spacing:-0.1em;font-style:italic;font-size:3.5em;filter:blur(1px);color:var(--color-text)}@media only screen and (min-width: 800px){.intro-title.svelte-1wek7f8.svelte-1wek7f8{font-size:8vw}}.layers.svelte-1wek7f8.svelte-1wek7f8{position:relative}.layers.svelte-1wek7f8.svelte-1wek7f8::before,.layers.svelte-1wek7f8.svelte-1wek7f8::after{content:attr(data-text);position:absolute;width:110%;z-index:-1}.layers.svelte-1wek7f8.svelte-1wek7f8::before{top:10px;left:15px;color:var(--color-theme-1)}.layers.svelte-1wek7f8.svelte-1wek7f8::after{top:5px;left:-10px;color:var(--color-theme-2)}@keyframes svelte-1wek7f8-paths{0%{clip-path:polygon(\n				0% 43%,\n				83% 43%,\n				83% 22%,\n				23% 22%,\n				23% 24%,\n				91% 24%,\n				91% 26%,\n				18% 26%,\n				18% 83%,\n				29% 83%,\n				29% 17%,\n				41% 17%,\n				41% 39%,\n				18% 39%,\n				18% 82%,\n				54% 82%,\n				54% 88%,\n				19% 88%,\n				19% 4%,\n				39% 4%,\n				39% 14%,\n				76% 14%,\n				76% 52%,\n				23% 52%,\n				23% 35%,\n				19% 35%,\n				19% 8%,\n				36% 8%,\n				36% 31%,\n				73% 31%,\n				73% 16%,\n				1% 16%,\n				1% 56%,\n				50% 56%,\n				50% 8%\n			)}5%{clip-path:polygon(\n				0% 29%,\n				44% 29%,\n				44% 83%,\n				94% 83%,\n				94% 56%,\n				11% 56%,\n				11% 64%,\n				94% 64%,\n				94% 70%,\n				88% 70%,\n				88% 32%,\n				18% 32%,\n				18% 96%,\n				10% 96%,\n				10% 62%,\n				9% 62%,\n				9% 84%,\n				68% 84%,\n				68% 50%,\n				52% 50%,\n				52% 55%,\n				35% 55%,\n				35% 87%,\n				25% 87%,\n				25% 39%,\n				15% 39%,\n				15% 88%,\n				52% 88%\n			)}30%{clip-path:polygon(\n				0% 53%,\n				93% 53%,\n				93% 62%,\n				68% 62%,\n				68% 37%,\n				97% 37%,\n				97% 89%,\n				13% 89%,\n				13% 45%,\n				51% 45%,\n				51% 88%,\n				17% 88%,\n				17% 54%,\n				81% 54%,\n				81% 75%,\n				79% 75%,\n				79% 76%,\n				38% 76%,\n				38% 28%,\n				61% 28%,\n				61% 12%,\n				55% 12%,\n				55% 62%,\n				68% 62%,\n				68% 51%,\n				0% 51%,\n				0% 92%,\n				63% 92%,\n				63% 4%,\n				65% 4%\n			)}45%{clip-path:polygon(\n				0% 33%,\n				2% 33%,\n				2% 69%,\n				58% 69%,\n				58% 94%,\n				55% 94%,\n				55% 25%,\n				33% 25%,\n				33% 85%,\n				16% 85%,\n				16% 19%,\n				5% 19%,\n				5% 20%,\n				79% 20%,\n				79% 96%,\n				93% 96%,\n				93% 50%,\n				5% 50%,\n				5% 74%,\n				55% 74%,\n				55% 57%,\n				96% 57%,\n				96% 59%,\n				87% 59%,\n				87% 65%,\n				82% 65%,\n				82% 39%,\n				63% 39%,\n				63% 92%,\n				4% 92%,\n				4% 36%,\n				24% 36%,\n				24% 70%,\n				1% 70%,\n				1% 43%,\n				15% 43%,\n				15% 28%,\n				23% 28%,\n				23% 71%,\n				90% 71%,\n				90% 86%,\n				97% 86%,\n				97% 1%,\n				60% 1%,\n				60% 67%,\n				71% 67%,\n				71% 91%,\n				17% 91%,\n				17% 14%,\n				39% 14%,\n				39% 30%,\n				58% 30%,\n				58% 11%,\n				52% 11%,\n				52% 83%,\n				68% 83%\n			)}76%{clip-path:polygon(\n				0% 26%,\n				15% 26%,\n				15% 73%,\n				72% 73%,\n				72% 70%,\n				77% 70%,\n				77% 75%,\n				8% 75%,\n				8% 42%,\n				4% 42%,\n				4% 61%,\n				17% 61%,\n				17% 12%,\n				26% 12%,\n				26% 63%,\n				73% 63%,\n				73% 43%,\n				90% 43%,\n				90% 67%,\n				50% 67%,\n				50% 41%,\n				42% 41%,\n				42% 46%,\n				50% 46%,\n				50% 84%,\n				96% 84%,\n				96% 78%,\n				49% 78%,\n				49% 25%,\n				63% 25%,\n				63% 14%\n			)}90%{clip-path:polygon(\n				0% 41%,\n				13% 41%,\n				13% 6%,\n				87% 6%,\n				87% 93%,\n				10% 93%,\n				10% 13%,\n				89% 13%,\n				89% 6%,\n				3% 6%,\n				3% 8%,\n				16% 8%,\n				16% 79%,\n				0% 79%,\n				0% 99%,\n				92% 99%,\n				92% 90%,\n				5% 90%,\n				5% 60%,\n				0% 60%,\n				0% 48%,\n				89% 48%,\n				89% 13%,\n				80% 13%,\n				80% 43%,\n				95% 43%,\n				95% 19%,\n				80% 19%,\n				80% 85%,\n				38% 85%,\n				38% 62%\n			)}1%,7%,33%,47%,78%,93%{clip-path:none}}@keyframes svelte-1wek7f8-movement{0%{top:0px;left:-20px}15%{top:10px;left:10px}60%{top:5px;left:-10px}75%{top:-5px;left:20px}100%{top:10px;left:5px}}@keyframes svelte-1wek7f8-opacity{0%{opacity:0.1}5%{opacity:0.7}30%{opacity:0.4}45%{opacity:0.6}76%{opacity:0.4}90%{opacity:0.8}1%,7%,33%,47%,78%,93%{opacity:0}}@keyframes svelte-1wek7f8-font{0%{font-weight:100;color:var(--color-theme-2);filter:blur(3px)}20%{font-weight:500;color:var(--color-text);filter:blur(0)}50%{font-weight:300;color:var(--color-theme-1);filter:blur(2px)}60%{font-weight:700;color:var(--color-text);filter:blur(0)}90%{font-weight:500;color:var(--color-theme-2);filter:blur(6px)}}.glitch.svelte-1wek7f8 span.svelte-1wek7f8{animation:svelte-1wek7f8-paths 5s step-end infinite}.glitch.svelte-1wek7f8.svelte-1wek7f8::before{animation:svelte-1wek7f8-paths 5s step-end infinite, svelte-1wek7f8-opacity 5s step-end infinite,\n			svelte-1wek7f8-font 8s step-end infinite, svelte-1wek7f8-movement 10s step-end infinite}.glitch.svelte-1wek7f8.svelte-1wek7f8::after{animation:svelte-1wek7f8-paths 5s step-end infinite, svelte-1wek7f8-opacity 5s step-end infinite,\n			svelte-1wek7f8-font 7s step-end infinite, svelte-1wek7f8-movement 8s step-end infinite}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"intro-bg svelte-1wek7f8"}"><img${add_attribute("src", background, 0)} class="${"intro-bg-img svelte-1wek7f8"}" alt="${"A sunset view of extropy eclipsing entropy"}"></div>

<section class="${"intro svelte-1wek7f8"}"><div class="${"intro-content svelte-1wek7f8"}"><a href="${"/jordle"}" class="${"intro-title glitch layers svelte-1wek7f8"}" data-text="${"JORDLE"}"><span class="${"svelte-1wek7f8"}">JORDLE</span></a> <br>
		<a href="${"/jordle"}" class="${"start svelte-1wek7f8"}">Serenity Now</a></div>
</section>`;
});
const Help_svelte_svelte_type_style_lang = "";
const css = {
  code: ".help.svelte-1cpylwt.svelte-1cpylwt{position:relative;z-index:10}.help-content.svelte-1cpylwt.svelte-1cpylwt{max-width:600px;margin:0 auto;padding:10vh 2em;background:rgba(0,0,0,0.9);border-radius:3px}@media only screen and (min-width: 800px){.help-content.svelte-1cpylwt.svelte-1cpylwt{padding:3em}}h2.svelte-1cpylwt.svelte-1cpylwt{font-weight:900;font-size:2em;margin:0 0 1em 0}span.svelte-1cpylwt.svelte-1cpylwt{display:inline-flex;justify-content:center;align-items:center;font-size:0.8em;width:2.4em;height:2.4em;background-color:var(--color-bg-2);box-sizing:border-box;border-radius:2px;border-width:2px;color:var(--color-text)}.missing.svelte-1cpylwt.svelte-1cpylwt{background:var(--color-bg-2);color:var(--color-text)}.close.svelte-1cpylwt.svelte-1cpylwt{border-style:solid;border-color:var(--color-theme-2)}.exact.svelte-1cpylwt.svelte-1cpylwt{background:var(--color-theme-2);color:white}.example.svelte-1cpylwt.svelte-1cpylwt{display:flex;justify-content:flex-start;margin:1rem 0;gap:0.2rem}.example.svelte-1cpylwt span.svelte-1cpylwt{font-size:1.4rem}p.svelte-1cpylwt span.svelte-1cpylwt{position:relative;border-width:1px;border-radius:1px;font-size:0.4em;transform:scale(2) translate(0, -10%);margin:0 1em}",
  map: null
};
const Help = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"help svelte-1cpylwt"}" id="${"help"}"><div class="${"help-content svelte-1cpylwt"}"><h2 class="${"svelte-1cpylwt"}">How to play Jordle</h2>

    <p>Jordle is a clone of Sverdle which is a clone of <a href="${"https://www.nytimes.com/games/wordle/index.html"}">Wordle</a>, the
      word guessing game. To play, enter a five-letter English word. For example:
    </p>
  
    <div class="${"example svelte-1cpylwt"}"><span class="${"close svelte-1cpylwt"}">r</span>
      <span class="${"missing svelte-1cpylwt"}">i</span>
      <span class="${"close svelte-1cpylwt"}">t</span>
      <span class="${"missing svelte-1cpylwt"}">z</span>
      <span class="${"exact svelte-1cpylwt"}">y</span></div>
  
    <p class="${"svelte-1cpylwt"}">The <span class="${"exact svelte-1cpylwt"}">y</span> is in the right place. <span class="${"close svelte-1cpylwt"}">r</span> and
      <span class="${"close svelte-1cpylwt"}">t</span>
      are the right letters, but in the wrong place. The other letters are wrong, and can be discarded.
      Let&#39;s make another guess:
    </p>
  
    <div class="${"example svelte-1cpylwt"}"><span class="${"exact svelte-1cpylwt"}">p</span>
      <span class="${"exact svelte-1cpylwt"}">a</span>
      <span class="${"exact svelte-1cpylwt"}">r</span>
      <span class="${"exact svelte-1cpylwt"}">t</span>
      <span class="${"exact svelte-1cpylwt"}">y</span></div>
  
    <p>This time we guessed right! You have <strong>six</strong> guesses to get the word.</p>
  
    <p>Unlike the original Wordle, Sverdle and Jordle run on the server instead of in the browser, making it
      impossible to cheat. It uses <code>&lt;form&gt;</code> and cookies to submit data, meaning you can
      even play with JavaScript disabled!
    </p>

		<a href="${"/jordle"}">Play here.</a></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-15io6bb_START -->${$$result.title = `<title>Jordle</title>`, ""}<meta name="${"description"}" content="${"Jordle"}"><!-- HEAD_svelte-15io6bb_END -->`, ""}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Help, "Help").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
