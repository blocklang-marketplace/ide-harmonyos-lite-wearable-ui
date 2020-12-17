import * as blocklang from "@blocklang/designer-core/blocklang";
import { ExtensionWidgetMap, GitUrlSegment } from "@blocklang/designer-core/interfaces";
import AppPreview from "@blocklang/harmonyos-lite-wearable-ui/app";
import AppIde from "./app";
import PagePreview from "@blocklang/harmonyos-lite-wearable-ui/page";
import PageIde from "./page";
import TextPreview from "@blocklang/harmonyos-lite-wearable-ui/text";
import TextIde from "./text";
import { widgetInstanceMap } from "@dojo/framework/core/vdom";
import AppPropertiesLayout from "./app/propertiesLayout";
import PagePropertiesLayout from "./page/propertiesLayout";
import TextPropertiesLayout from "./text/propertiesLayout";
import InputPreview from "@blocklang/harmonyos-lite-wearable-ui/input";
import InputIde from "./input";
import InputPropertiesLayout from "./input/propertiesLayout";

const gitUrlSegment: GitUrlSegment = {
	website: "github.com",
	owner: "blocklang-marketplace",
	repoName: "ide-harmonyos-lite-wearable-ui",
};
const widgets: ExtensionWidgetMap = {
	App: { widget: AppPreview, ideWidget: AppIde, propertiesLayout: AppPropertiesLayout },
	Page: { widget: PagePreview, ideWidget: PageIde, propertiesLayout: PagePropertiesLayout },
	Text: { widget: TextPreview, ideWidget: TextIde, propertiesLayout: TextPropertiesLayout },
	Input: { widget: InputPreview, ideWidget: InputIde, propertiesLayout: InputPropertiesLayout },
};

blocklang.registerWidgets(gitUrlSegment, widgets);
blocklang.cacheWidgetInstanceMap(gitUrlSegment, widgetInstanceMap);
