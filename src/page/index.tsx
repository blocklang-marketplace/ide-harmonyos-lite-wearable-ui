import { create, tsx } from "@dojo/framework/core/vdom";
import Page, { PageProperties } from "@blocklang/harmonyos-lite-wearable-ui/page";

import ide from "@blocklang/designer-core/middleware/ide";

const factory = create({ ide }).properties<PageProperties>();

export default factory(function index({ properties, children, middleware: { ide } }) {
	const {} = properties();
	ide.config("page");
	ide.measureActiveWidget();

	return <Page></Page>;
});
