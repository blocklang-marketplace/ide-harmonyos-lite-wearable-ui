import { SingleProperty } from "@blocklang/designer-core/interfaces";
import { create, tsx } from "@dojo/framework/core/vdom";
import * as c from "@blocklang/bootstrap-classes";

const factory = create().properties<SingleProperty>();

export default factory(function InputType({ properties }) {
	const { index, value = "", onPropertyChanged } = properties();
	const types = ["button", "checkbox", "radio"];

	return (
		<div classes={[c.btn_group, c.btn_group_sm]} role="group">
			{types.map((item, typeIndex) => (
				<virtual>
					<input
						id={`btnInputType_${typeIndex}`}
						name="btnInputType"
						type="radio"
						classes={[c.btn_check]}
						autocomplete="false"
						checked={item === value}
						onclick={() => {
							onPropertyChanged({ index, newValue: item, isChanging: false, isExpr: false });
						}}
					/>
					<label classes={[c.btn, c.btn_outline_secondary]} for={`btnInputType_${typeIndex}`}>
						{item}
					</label>
				</virtual>
			))}
		</div>
	);
});
