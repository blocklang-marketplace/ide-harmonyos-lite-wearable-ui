import { create, v } from "@dojo/framework/core/vdom";
import { PageProperties } from "@blocklang/harmonyos-lite-wearable-ui/page";
import * as c from "@blocklang/bootstrap-classes";

import ide from "@blocklang/designer-core/middleware/ide";

const factory = create({ ide }).properties<PageProperties>();

export default factory(function index({ properties, children, middleware: { ide } }) {
	const {} = properties();
	ide.config("root");
	const activeWidgetEvents = ide.activeWidgetEvents();

	return [
		v(
			"div",
			{
				key: "root",
				classes: [c.d_block, c.justify_content_center, c.align_items_center, c.h_100],
				...activeWidgetEvents,
			},
			children()
		),
		ide.alwaysRenderActiveWidget(),
	];
});
