import { create, v } from "@dojo/framework/core/vdom";
import dimensions from "@dojo/framework/core/middleware/dimensions";
import * as css from "./index.m.css";
import ide from "@blocklang/designer-core/middleware/ide";
import toStyle from "css-to-style";
import * as previewCss from "@blocklang/harmonyos-lite-wearable-ui/text/Text.m.css";

export interface TextProperties {
	value?: string;
	style?: string;
	classes?: string;
}

const factory = create({ dimensions, ide }).properties<TextProperties>();

export default factory(function Text({ properties, middleware: { dimensions, ide } }) {
	ide.config("root", "value");
	const { value = "", style = "", classes = "" } = properties();
	const _focused = ide.getFromCache("textareaFocus", false);
	let emptyValueClass: string = "";
	if (value === "") {
		if (_focused) {
			emptyValueClass = css.textareaEmpty;
		} else {
			emptyValueClass = css.divEmpty;
		}
	}

	// 因为 span 的高度（29）总是比内容的高度（24）高，没有找到原因，所以这里先获取内容的高度，然后再设置为根节点 span 的高度
	const preDimensions = dimensions.get("pre");
	const rootStyles: any = {};
	if (preDimensions.size.height > 0) {
		rootStyles.height = `${preDimensions.size.height}px`;
	}

	const arrClass = (classes as string).split(",").map((item) => item.trim());
	const objStyle = toStyle(style);

	return [
		v(
			"span",
			{
				key: "root",
				classes: [previewCss.root, css.root, ...arrClass],
				styles: { ...rootStyles, ...objStyle },
				...ide.activeWidgetEvents(),
			},
			[
				v("pre", { key: "pre", classes: [css.pre, emptyValueClass] }, [v("span", [value]), v("br")]),
				!_focused &&
					v(
						"div",
						{
							key: "readonlyDiv",
							classes: [css.div],
							ondblclick: () => {
								ide.cache("textareaFocus", true);
							},
						},
						[value]
					),
				_focused &&
					v(
						"textarea",
						{
							key: "textarea",
							classes: [css.textarea],
							placeholder: "输入文本",
							spellcheck: false,
							focus: () => true,
							onblur: () => {
								ide.cache("textareaFocus", false);
							},
							oninput: (event: KeyboardEvent) => {
								const value = (event.target as HTMLTextAreaElement).value;
								ide.changePropertyValue(value);
							},
						},
						[value]
					),
			]
		),
		ide.alwaysRenderActiveWidget(),
	];
});
