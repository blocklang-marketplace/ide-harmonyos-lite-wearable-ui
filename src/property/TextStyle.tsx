import { SingleProperty } from "@blocklang/designer-core/interfaces";
import { create, tsx } from "@dojo/framework/core/vdom";
import * as c from "@blocklang/bootstrap-classes";
import Color from "./style/Color";
import toStyle from "css-to-style";
import styleToCss from "../utils/styleToCss";

const factory = create().properties<SingleProperty>();

// 在此处查看样式默认值
// https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-basic-text-0000001060384604
export default factory(function TextStyle({ properties }) {
	const { index, value = "", onPropertyChanged } = properties();
	const objStyle = toStyle(value);
	const colorValue = objStyle.color || "#ffffff"; // Color 默认为白色

	return (
		<div key="textStyle">
			<div key="color" classes={[c.d_flex, c.justify_content_between, c.align_items_center]}>
				<div classes={[c.text_muted]}>Color</div>
				<div>
					<Color
						value={colorValue}
						onPropertyChanged={(newValue) => {
							objStyle.color = newValue;
							const cssText = styleToCss(objStyle);
							onPropertyChanged({ index, newValue: cssText, isChanging: false, isExpr: false });
						}}
					/>
				</div>
			</div>
		</div>
	);
});
