import { create, v, w } from "@dojo/framework/core/vdom";
import { InputProperties } from "@blocklang/harmonyos-lite-wearable-ui/input";
import ide from "@blocklang/designer-core/middleware/ide";
import Overlay from "@blocklang/designer-core/widgets/overlay";
import toStyle from "css-to-style";
import * as css from "@blocklang/harmonyos-lite-wearable-ui/input/Input.m.css";

const factory = create({ ide }).properties<InputProperties>();

export default factory(function Input({ properties, middleware: { ide } }) {
	ide.config("root", "value");

	const { type = "button", checked = false, name = "", value = "", class: classes = "", style = "" } = properties();
	const defaultClasses = type === "button" ? css.button : css.checkbox;

	const objStyle = toStyle(style);
	const arrClass = (classes as string).split(",").map((item) => item.trim());

	return [
		v("input", {
			key: "root",
			type,
			checked,
			name,
			value,
			styles: objStyle,
			classes: [defaultClasses, ...arrClass],
		}),
		w(Overlay, { ...ide.getFocusNodeOffset(), ...ide.activeWidgetEvents() }),
		ide.alwaysRenderActiveWidget(),
	];
});
