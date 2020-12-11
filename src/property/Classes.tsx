import { SingleProperty } from "@blocklang/designer-core/interfaces";
import { create, tsx } from "@dojo/framework/core/vdom";

const factory = create().properties<SingleProperty>();

// 需要设置两个值，一个是所有样式，一个是当前选中的样式。

export default factory(function Classes({ properties }) {
	const {} = properties();
	return <div>TODO: Classes</div>;
});
