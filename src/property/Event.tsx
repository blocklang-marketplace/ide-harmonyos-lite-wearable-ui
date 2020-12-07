import { create, tsx } from "@dojo/framework/core/vdom";
import { uuid } from "@dojo/framework/core/util";
import { SingleProperty } from "@blocklang/designer-core/interfaces";
import FontAwesomeIcon from "@blocklang/dojo-fontawesome/FontAwesomeIcon";
import * as c from "@blocklang/bootstrap-classes";
import * as css from "./Event.m.css";

const factory = create().properties<SingleProperty>();

export default factory(function Event({ properties }) {
	const { index, value, onPropertyChanged, onChangePaneLayout } = properties();

	return (
		<div key="root" classes={[c.d_flex, c.justify_content_between]}>
			<div key="label" classes={[c.text_muted]}>
				{value === undefined ? "未定义" : "已定义"}
			</div>
			<div>
				<span
					key="icon"
					classes={[c.text_muted, css.icon]}
					title="定义事件处理函数"
					onclick={() => {
						const newValue = value === undefined ? uuid().replace("-", "") : value;
						onPropertyChanged({ index, newValue, isChanging: false, isExpr: false });
						onChangePaneLayout({}, { propertyIndex: index, propertyValue: newValue });
					}}
				>
					<FontAwesomeIcon icon="edit" />
				</span>
			</div>
		</div>
	);
});
