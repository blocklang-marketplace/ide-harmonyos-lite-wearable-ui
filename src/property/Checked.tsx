import { SingleProperty } from "@blocklang/designer-core/interfaces";
import { create, tsx } from "@dojo/framework/core/vdom";
import * as c from "@blocklang/bootstrap-classes";

const factory = create().properties<SingleProperty>();

export default factory(function Checked({ properties }) {
	const { index, value = "", onPropertyChanged } = properties();
	const cbxLabel = value === "false" ? "未选中" : "已选中";
	return (
		<div>
			<input
				id="btn-check"
				type="checkbox"
				classes={[c.btn_check]}
				autocomplete="off"
				onclick={(event: MouseEvent<HTMLInputElement>) => {
					const checked = event.target.checked;
					onPropertyChanged({ index, newValue: String(checked), isChanging: false, isExpr: false });
				}}
			/>
			<label for="btn-check" classes={[c.btn, c.btn_outline_secondary, c.btn_sm]}>
				{cbxLabel}
			</label>
		</div>
	);
});
