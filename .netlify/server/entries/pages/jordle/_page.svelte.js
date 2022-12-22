import { c as create_ssr_component, b as subscribe, f as each, e as escape, v as validate_component, d as add_attribute, h as null_to_empty } from "../../../chunks/index.js";
import html2canvas from "html2canvas";
import "devalue";
import { r as readable } from "../../../chunks/index3.js";
const Screenshot_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".controls-finished.svelte-jvh7jz{max-width:250px}",
  map: null
};
const Screenshot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const takeScreenshot = () => {
    const captureElement = document.querySelector("#capture");
    html2canvas(captureElement).then((canvas) => {
      canvas.style.display = "none";
      document.body.appendChild(canvas);
      return canvas;
    }).then((canvas) => {
      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const a = document.createElement("a");
      a.setAttribute("download", "jordle-win.png");
      a.setAttribute("href", image);
      a.click();
      canvas.remove();
    });
  };
  if ($$props.takeScreenshot === void 0 && $$bindings.takeScreenshot && takeScreenshot !== void 0)
    $$bindings.takeScreenshot(takeScreenshot);
  $$result.css.add(css$1);
  return `<button class="${"button controls-finished svelte-jvh7jz"}">Download screenshot</button>`;
});
const get_initial_motion_preference = () => {
  return false;
};
const reduced_motion = readable(get_initial_motion_preference(), (set) => {
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#capture.svelte-1asm7d.svelte-1asm7d{background:var(--color-bg-1)}form.svelte-1asm7d.svelte-1asm7d{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;flex:1;margin-top:3rem}.how-to-play.svelte-1asm7d.svelte-1asm7d{color:var(--color-text);margin-top:2em}.how-to-play.svelte-1asm7d.svelte-1asm7d::before{content:'i';display:inline-block;font-size:0.8em;font-weight:900;width:1em;height:1em;padding:0.2em;line-height:1;border:1.5px solid var(--color-text);border-radius:50%;text-align:center;margin:0 0.5em 0 0;position:relative;top:-0.05em}.grid.svelte-1asm7d.svelte-1asm7d{--width:min(100vw, 40vh, 420px);align-self:center;justify-self:center;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start}.grid.svelte-1asm7d .row.svelte-1asm7d{display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:0.2rem;margin:0 0 0.2rem 0}@media only screen and (min-width: 420px){.grid.svelte-1asm7d.svelte-1asm7d{max-width:var(--width)}}@media(prefers-reduced-motion: no-preference){.grid.bad-guess.svelte-1asm7d .row.current.svelte-1asm7d{animation:svelte-1asm7d-wiggle 0.5s}}.grid.playing.svelte-1asm7d .row.current.svelte-1asm7d{filter:drop-shadow(3px 3px 10px var(--color-bg-0))}.letter.svelte-1asm7d.svelte-1asm7d{aspect-ratio:1;width:100%;display:flex;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;text-transform:lowercase;border:none;font-size:calc(0.08 * var(--width));border-radius:2px;background:var(--color-bg-2);margin:0;color:var(--color-text)}.current.svelte-1asm7d .letter.svelte-1asm7d{background-color:#363142}.letter.missing.svelte-1asm7d.svelte-1asm7d{background:var(--color-bg-1);color:var(--color-text)}.letter.exact.svelte-1asm7d.svelte-1asm7d{background:var(--color-theme-2);color:var(--color-text)}.letter.close.svelte-1asm7d.svelte-1asm7d{border:2px solid var(--color-theme-2)}.selected.svelte-1asm7d.svelte-1asm7d{outline:2px solid var(--color-theme-1)}.controls.svelte-1asm7d.svelte-1asm7d{text-align:center;justify-content:center;height:min(20vh, 10rem);width:100%}.controls-finished.svelte-1asm7d.svelte-1asm7d{max-width:250px}.keyboard.svelte-1asm7d.svelte-1asm7d{--gap:0.2rem;position:relative;display:flex;flex-direction:column;gap:var(--gap);height:100%}.keyboard.svelte-1asm7d .row.svelte-1asm7d{display:flex;justify-content:center;gap:0.2rem;flex:1}.keyboard.svelte-1asm7d button.svelte-1asm7d,.keyboard.svelte-1asm7d button.svelte-1asm7d:disabled{--size:min(8vw, 8vh, 40px);background-color:var(--color-bg-2);color:var(--color-text);width:var(--size);border:none;border-radius:2px;font-size:calc(var(--size) * 0.5);margin:0}.keyboard.svelte-1asm7d button.exact.svelte-1asm7d{background:var(--color-theme-2);color:var(--color-text)}.keyboard.svelte-1asm7d button.missing.svelte-1asm7d{opacity:0.3}.keyboard.svelte-1asm7d button.close.svelte-1asm7d{border:2px solid var(--color-theme-2)}.keyboard.svelte-1asm7d button.svelte-1asm7d:hover{border:2px solid var(--color-theme-1)}.keyboard.svelte-1asm7d button.svelte-1asm7d:focus{background:var(--color-theme-1);color:var(--color-bg-1);outline:none}.keyboard.svelte-1asm7d button[data-key='enter'].svelte-1asm7d,.keyboard.svelte-1asm7d button[data-key='backspace'].svelte-1asm7d{position:absolute;bottom:0;width:calc(1.5 * var(--size));height:calc(1 / 3 * (100% - 2 * var(--gap)));text-transform:uppercase;font-size:calc(0.3 * var(--size));padding-top:calc(0.15 * var(--size))}.keyboard.svelte-1asm7d button[data-key='enter'].svelte-1asm7d{right:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.svelte-1asm7d button[data-key='backspace'].svelte-1asm7d{left:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.svelte-1asm7d button[data-key='enter'].svelte-1asm7d:disabled{opacity:1}@keyframes svelte-1asm7d-wiggle{0%{transform:translateX(0)}10%{transform:translateX(-2px)}30%{transform:translateX(4px)}50%{transform:translateX(-6px)}70%{transform:translateX(+4px)}90%{transform:translateX(-2px)}100%{transform:translateX(0)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let won;
  let i;
  let submittable;
  let $$unsubscribe_reduced_motion;
  $$unsubscribe_reduced_motion = subscribe(reduced_motion, (value) => value);
  let { data } = $$props;
  let { form } = $$props;
  let classnames;
  let description;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  won = data.answers.at(-1) === "xxxxx";
  i = won ? -1 : data.answers.length;
  {
    {
      classnames = {};
      description = {};
      data.answers.forEach((answer, i2) => {
        const guess = data.guesses[i2];
        for (let i3 = 0; i3 < 5; i3 += 1) {
          const letter = guess[i3];
          if (answer[i3] === "x") {
            classnames[letter] = "exact";
            description[letter] = "correct";
          } else if (!classnames[letter]) {
            classnames[letter] = answer[i3] === "c" ? "close" : "missing";
            description[letter] = answer[i3] === "c" ? "present" : "absent";
          }
        }
      });
    }
  }
  submittable = data.guesses[i]?.length === 5;
  $$unsubscribe_reduced_motion();
  return `

${$$result.head += `<!-- HEAD_svelte-10volg8_START -->${$$result.title = `<title>Jordle</title>`, ""}<meta name="${"description"}" content="${"A Wordle clone."}"><!-- HEAD_svelte-10volg8_END -->`, ""}

<h1 class="${"visually-hidden"}">Jordle</h1>

<form method="${"POST"}" action="${"?/enter"}" class="${"svelte-1asm7d"}"><div id="${"capture"}" class="${[
    "grid svelte-1asm7d",
    (!won ? "playing" : "") + " " + (form?.badGuess ? "bad-guess" : "")
  ].join(" ").trim()}">${each(Array(6), (_, row) => {
    let current = row === i;
    return `
			<h2 class="${"visually-hidden"}">Row ${escape(row + 1)}</h2>
			<div class="${["row svelte-1asm7d", current ? "current" : ""].join(" ").trim()}">${each(Array(5), (_2, column) => {
      let answer = data.answers[row]?.[column], value = data.guesses[row]?.[column] ?? "", selected = current && column === data.guesses[row].length, exact = answer === "x", close = answer === "c", missing = answer === "_";
      return `
					
					
					
					
					
					<div class="${[
        "letter svelte-1asm7d",
        (exact ? "exact" : "") + " " + (close ? "close" : "") + " " + (missing ? "missing" : "") + " " + (selected ? "selected" : "")
      ].join(" ").trim()}">${escape(value)}
						<span class="${"visually-hidden"}">${exact ? `(correct)` : `${close ? `(present)` : `${missing ? `(absent)` : `empty`}`}`}</span>
						<input name="${"guess"}" ${!current ? "disabled" : ""} type="${"hidden"}"${add_attribute("value", value, 0)}>
					</div>`;
    })}
			</div>`;
  })}</div>

	<div class="${"controls svelte-1asm7d"}">${won || data.answers.length >= 6 ? `${!won && data.answer ? `<p>the answer was &quot;${escape(data.answer)}&quot;</p>` : ``}
			<button data-key="${"enter"}" class="${"button controls-finished svelte-1asm7d"}" formaction="${"?/restart"}">${escape(won ? "You won!" : `Game over.`)} Play again?
			</button>

			${validate_component(Screenshot, "Screenshot").$$render($$result, {}, {}, {})}` : `<div class="${"keyboard svelte-1asm7d"}"><button data-key="${"enter"}" ${!submittable ? "disabled" : ""} class="${["svelte-1asm7d", submittable ? "selected" : ""].join(" ").trim()}">enter</button>

				<button data-key="${"backspace"}" formaction="${"?/update"}" name="${"key"}" value="${"backspace"}" class="${"svelte-1asm7d"}">back
				</button>

				${each(["qwertyuiop", "asdfghjkl", "zxcvbnm"], (row) => {
    return `<div class="${"row svelte-1asm7d"}">${each(row, (letter) => {
      return `<button${add_attribute("data-key", letter, 0)} class="${escape(null_to_empty(classnames[letter]), true) + " svelte-1asm7d"}" ${data.guesses[i].length === 5 ? "disabled" : ""} formaction="${"?/update"}" name="${"key"}"${add_attribute("value", letter, 0)} aria-label="${escape(letter, true) + " " + escape(description[letter] || "", true)}">${escape(letter)}
							</button>`;
    })}
					</div>`;
  })}</div>`}</div>

	<a class="${"how-to-play svelte-1asm7d"}" href="${"/#help"}">How to play</a></form>

${won ? `<div style="${"position: absolute; left: 50%; top: 30%"}"></div>` : ``}`;
});
export {
  Page as default
};
