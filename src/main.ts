import * as blocklang from "@blocklang/designer-core/blocklang";
import { ExtensionWidgetMap, GitUrlSegment } from "@blocklang/designer-core/interfaces";
import AppPreview from "@blocklang/harmonyos-lite-wearable-ui/app";
import AppIde from "./app";
import PagePreview from "@blocklang/harmonyos-lite-wearable-ui/page";
import PageIde from "./page";
import { widgetInstanceMap } from "@dojo/framework/core/vdom";
import AppPropertiesLayout from "./app/propertiesLayout";
import PagePropertiesLayout from "./page/propertiesLayout";

const gitUrlSegment: GitUrlSegment = {
	website: "github.com",
	owner: "blocklang-marketplace",
	repoName: "ide-harmonyos-lite-wearable-ui",
};
const widgets: ExtensionWidgetMap = {
	App: { widget: AppPreview, ideWidget: AppIde, propertiesLayout: AppPropertiesLayout },
	Page: { widget: PagePreview, ideWidget: PageIde, propertiesLayout: PagePropertiesLayout },
};

blocklang.registerWidgets(gitUrlSegment, widgets);
blocklang.cacheWidgetInstanceMap(gitUrlSegment, widgetInstanceMap);
