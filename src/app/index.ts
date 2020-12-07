import { create, v, destroy } from "@dojo/framework/core/vdom";
import { AppProperties } from "@blocklang/harmonyos-lite-wearable-ui/app";
import ide from "@blocklang/designer-core/middleware/ide";
import icache from "@dojo/framework/core/middleware/icache";
import * as c from "@blocklang/bootstrap-classes";

const factory = create({ ide, destroy, icache }).properties<AppProperties>();

export default factory(function index({ properties, children, middleware: { ide, destroy, icache } }) {
	const { onCreate, onDestroy } = properties();
	ide.config("root");
	const activeWidgetEvents = ide.activeWidgetEvents();

	// 第一次创建时调用
	const counter = icache.get<number>("counter") || 0;
	icache.set("counter", counter + 1);
	if (counter === 1) {
		onCreate();
	}

	// 销毁时调用
	destroy(() => {
		onDestroy();
	});

	return [
		v(
			"div",
			{
				key: "root",
				classes: [c.d_flex, c.justify_content_center, c.align_items_center, "h-100", c.text_white],
				...activeWidgetEvents,
			},
			[v("div", ["配置应用程序"])]
		),
		ide.alwaysRenderActiveWidget(),
	];
});
