import { create, tsx } from "@dojo/framework/core/vdom";
import App, { AppProperties } from "@blocklang/harmonyos-lite-wearable-ui/app";
import ide from "@blocklang/designer-core/middleware/ide";

const factory = create({ ide }).properties<AppProperties>();

export default factory(function index({ properties, children, middleware: { ide } }) {
	ide.config("root");

	return <App></App>;
});
