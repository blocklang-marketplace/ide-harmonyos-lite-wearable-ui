import { SingleProperty } from "@blocklang/designer-core/interfaces";
import { create, tsx } from "@dojo/framework/core/vdom";
import * as c from "@blocklang/bootstrap-classes";

const factory = create().properties<SingleProperty>();

/**
 * 文本块，常用语描述多行文本。
 */
export default factory(function TextBlock({ properties }) {
	const { index, value = "", onPropertyChanged } = properties();
	return (
		<div>
			<textarea
				key="textarrea"
				rows="5"
				classes={[c.form_control]}
				oninput={(event: KeyboardEvent<HTMLTextAreaElement>) => {
					const value = event.target.value;
					onPropertyChanged({ index, newValue: value, isChanging: false, isExpr: false });
				}}
			>
				{value}
			</textarea>
		</div>
	);
});
