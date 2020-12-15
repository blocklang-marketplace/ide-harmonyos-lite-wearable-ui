import { create, tsx } from "@dojo/framework/core/vdom";
import * as c from "@blocklang/bootstrap-classes";

export interface ColorProperties {
	value: string;
	onPropertyChanged: (newValue: string) => void;
}

const factory = create().properties<ColorProperties>();

export default factory(function Color({ properties }) {
	const { value = "", onPropertyChanged } = properties();
	return (
		<input
			key="color"
			type="color"
			styles={{ width: "3rem" }}
			classes={[c.form_control, c.form_control_color]}
			value={value}
			title="选取颜色"
			oninput={(event: MouseEvent<HTMLInputElement>) => {
				const value = event.target.value;
				onPropertyChanged(value);
			}}
		/>
	);
});
