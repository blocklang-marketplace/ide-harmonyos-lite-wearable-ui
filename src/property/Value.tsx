import * as c from "@blocklang/bootstrap-classes";
import { SingleProperty } from "@blocklang/designer-core/interfaces";
import { create, tsx } from "@dojo/framework/core/vdom";

const factory = create().properties<SingleProperty>();

export default factory(function Value({ properties }) {
	const { index, value = "", onPropertyChanged } = properties();
	return (
		<div>
			<input
				key="input"
				value={value}
				classes={[c.form_control]}
				oninput={(event: KeyboardEvent<HTMLInputElement>) => {
					const value = event.target.value;
					onPropertyChanged({ index, newValue: value, isChanging: false, isExpr: false });
				}}
			/>
		</div>
	);
});
