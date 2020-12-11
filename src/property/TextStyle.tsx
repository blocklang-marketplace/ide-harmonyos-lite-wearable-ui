import { SingleProperty } from "@blocklang/designer-core/interfaces";
import { create, tsx } from "@dojo/framework/core/vdom";
import * as c from "@blocklang/bootstrap-classes";
import Color from "./style/Color";
import toStyle from "css-to-style";

const factory = create().properties<SingleProperty>();

export default factory(function TextStyle({ properties }) {
	const { index, value = "", onPropertyChanged } = properties();
	const objStyle = toStyle(value);
	const colorValue = objStyle.color;

	return (
		<div>
			<div key="color" classes={[c.d_flex, c.justify_content_between]}>
				<div classes={[c.text_muted]}>Color</div>
				<div>
					<Color
						value={colorValue}
						onPropertyChanged={(newValue) => {
							objStyle.color = newValue;
							const cssText = objStyle.cssText;
							onPropertyChanged({ index, newValue: cssText, isChanging: false, isExpr: false });
						}}
					/>
				</div>
			</div>
		</div>
	);
});
