import { c as create_ssr_component, b as subscribe, f as each, e as escape, v as validate_component, d as add_attribute, h as null_to_empty } from "../../../chunks/index.js";
import html2canvas from "html2canvas";
import "devalue";
import { r as readable } from "../../../chunks/index3.js";
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
  return `<button class="${"button"}">Download screenshot</button>`;
});
const get_initial_motion_preference = () => {
  return false;
};
const reduced_motion = readable(get_initial_motion_preference(), (set) => {
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#capture.svelte-1xwh1b0.svelte-1xwh1b0{background:var(--color-bg-1)}form.svelte-1xwh1b0.svelte-1xwh1b0{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;flex:1}.how-to-play.svelte-1xwh1b0.svelte-1xwh1b0{color:var(--color-text);margin-bottom:2em}.how-to-play.svelte-1xwh1b0.svelte-1xwh1b0::before{content:'i';display:inline-block;font-size:0.8em;font-weight:900;width:1em;height:1em;padding:0.2em;line-height:1;border:1.5px solid var(--color-text);border-radius:50%;text-align:center;margin:0 0.5em 0 0;position:relative;top:-0.05em}.grid.svelte-1xwh1b0.svelte-1xwh1b0{--width:min(100vw, 40vh, 380px);max-width:var(--width);align-self:center;justify-self:center;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start}.grid.svelte-1xwh1b0 .row.svelte-1xwh1b0{display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:0.2rem;margin:0 0 0.2rem 0}@media(prefers-reduced-motion: no-preference){.grid.bad-guess.svelte-1xwh1b0 .row.current.svelte-1xwh1b0{animation:svelte-1xwh1b0-wiggle 0.5s}}.grid.playing.svelte-1xwh1b0 .row.current.svelte-1xwh1b0{filter:drop-shadow(3px 3px 10px var(--color-bg-0))}.letter.svelte-1xwh1b0.svelte-1xwh1b0{aspect-ratio:1;width:100%;display:flex;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;text-transform:lowercase;border:none;font-size:calc(0.08 * var(--width));border-radius:2px;background:var(--color-bg-2);margin:0;color:var(--color-text)}.current.svelte-1xwh1b0 .letter.svelte-1xwh1b0{background-color:#363142}.letter.missing.svelte-1xwh1b0.svelte-1xwh1b0{background:var(--color-bg-1);color:var(--color-text)}.letter.exact.svelte-1xwh1b0.svelte-1xwh1b0{background:var(--color-theme-2);color:var(--color-text)}.letter.close.svelte-1xwh1b0.svelte-1xwh1b0{border:2px solid var(--color-theme-2)}.selected.svelte-1xwh1b0.svelte-1xwh1b0{outline:2px solid var(--color-theme-1)}.controls.svelte-1xwh1b0.svelte-1xwh1b0{text-align:center;justify-content:center;height:min(18vh, 10rem)}.keyboard.svelte-1xwh1b0.svelte-1xwh1b0{--gap:0.2rem;position:relative;display:flex;flex-direction:column;gap:var(--gap);height:100%}.keyboard.svelte-1xwh1b0 .row.svelte-1xwh1b0{display:flex;justify-content:center;gap:0.2rem;flex:1}.keyboard.svelte-1xwh1b0 button.svelte-1xwh1b0,.keyboard.svelte-1xwh1b0 button.svelte-1xwh1b0:disabled{--size:min(8vw, 4vh, 40px);background-color:var(--color-bg-2);color:var(--color-text);width:var(--size);border:none;border-radius:2px;font-size:calc(var(--size) * 0.5);margin:0}.keyboard.svelte-1xwh1b0 button.exact.svelte-1xwh1b0{background:var(--color-theme-2);color:var(--color-text)}.keyboard.svelte-1xwh1b0 button.missing.svelte-1xwh1b0{opacity:0.3}.keyboard.svelte-1xwh1b0 button.close.svelte-1xwh1b0{border:2px solid var(--color-theme-2)}.keyboard.svelte-1xwh1b0 button.svelte-1xwh1b0:focus{background:var(--color-theme-1);color:var(--color-text);outline:none}.keyboard.svelte-1xwh1b0 button[data-key='enter'].svelte-1xwh1b0,.keyboard.svelte-1xwh1b0 button[data-key='backspace'].svelte-1xwh1b0{position:absolute;bottom:0;width:calc(1.5 * var(--size));height:calc(1 / 3 * (100% - 2 * var(--gap)));text-transform:uppercase;font-size:calc(0.3 * var(--size));padding-top:calc(0.15 * var(--size))}.keyboard.svelte-1xwh1b0 button[data-key='enter'].svelte-1xwh1b0{right:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.svelte-1xwh1b0 button[data-key='backspace'].svelte-1xwh1b0{left:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.svelte-1xwh1b0 button[data-key='enter'].svelte-1xwh1b0:disabled{opacity:1}@keyframes svelte-1xwh1b0-wiggle{0%{transform:translateX(0)}10%{transform:translateX(-2px)}30%{transform:translateX(4px)}50%{transform:translateX(-6px)}70%{transform:translateX(+4px)}90%{transform:translateX(-2px)}100%{transform:translateX(0)}}",
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

<form method="${"POST"}" action="${"?/enter"}" class="${"svelte-1xwh1b0"}"><a class="${"how-to-play svelte-1xwh1b0"}" href="${"/#help"}">How to play</a>

	<div id="${"capture"}" class="${[
    "grid svelte-1xwh1b0",
    (!won ? "playing" : "") + " " + (form?.badGuess ? "bad-guess" : "")
  ].join(" ").trim()}">${each(Array(6), (_, row) => {
    let current = row === i;
    return `
			<h2 class="${"visually-hidden"}">Row ${escape(row + 1)}</h2>
			<div class="${["row svelte-1xwh1b0", current ? "current" : ""].join(" ").trim()}">${each(Array(5), (_2, column) => {
      let answer = data.answers[row]?.[column], value = data.guesses[row]?.[column] ?? "", selected = current && column === data.guesses[row].length, exact = answer === "x", close = answer === "c", missing = answer === "_";
      return `
					
					
					
					
					
					<div class="${[
        "letter svelte-1xwh1b0",
        (exact ? "exact" : "") + " " + (close ? "close" : "") + " " + (missing ? "missing" : "") + " " + (selected ? "selected" : "")
      ].join(" ").trim()}">${escape(value)}
						<span class="${"visually-hidden"}">${exact ? `(correct)` : `${close ? `(present)` : `${missing ? `(absent)` : `empty`}`}`}</span>
						<input name="${"guess"}" ${!current ? "disabled" : ""} type="${"hidden"}"${add_attribute("value", value, 0)}>
					</div>`;
    })}
			</div>`;
  })}</div>

	<div class="${"controls svelte-1xwh1b0"}">${won || data.answers.length >= 6 ? `${!won && data.answer ? `<p>the answer was &quot;${escape(data.answer)}&quot;</p>` : ``}
			<button data-key="${"enter"}" class="${"button"}" formaction="${"?/restart"}">${escape(won ? "You won!" : `Game over.`)} Play again?
			</button>

			${validate_component(Screenshot, "Screenshot").$$render($$result, {}, {}, {})}` : `<div class="${"keyboard svelte-1xwh1b0"}"><button data-key="${"enter"}" ${!submittable ? "disabled" : ""} class="${["svelte-1xwh1b0", submittable ? "selected" : ""].join(" ").trim()}">enter</button>

				<button data-key="${"backspace"}" formaction="${"?/update"}" name="${"key"}" value="${"backspace"}" class="${"svelte-1xwh1b0"}">back
				</button>

				${each(["qwertyuiop", "asdfghjkl", "zxcvbnm"], (row) => {
    return `<div class="${"row svelte-1xwh1b0"}">${each(row, (letter) => {
      return `<button${add_attribute("data-key", letter, 0)} class="${escape(null_to_empty(classnames[letter]), true) + " svelte-1xwh1b0"}" ${data.guesses[i].length === 5 ? "disabled" : ""} formaction="${"?/update"}" name="${"key"}"${add_attribute("value", letter, 0)} aria-label="${escape(letter, true) + " " + escape(description[letter] || "", true)}">${escape(letter)}
							</button>`;
    })}
					</div>`;
  })}</div>`}</div></form>

${won ? `<div style="${"position: absolute; left: 50%; top: 30%"}"></div>` : ``}`;
});
export {
  Page as default
};
