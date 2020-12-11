import { PropertyLayout } from "@blocklang/designer-core/interfaces";
import Classes from "../property/Classes";
import TextBlock from "../property/TextBlock";
import TextStyle from "../property/TextStyle";

const propertiesLayout: PropertyLayout[] = [
	{
		propertyName: "value",
		propertyLabel: "值",
		propertyWidget: TextBlock,
	},
	{
		propertyName: "style",
		propertyLabel: "样式",
		propertyWidget: TextStyle,
	},
	{
		propertyName: "classes",
		propertyLabel: "样式类",
		propertyWidget: Classes,
	},
	{
		propertyName: "onclick",
		propertyLabel: "点击动作触发该事件",
		propertyWidget: Event,
	},
	{
		propertyName: "onlongpress",
		propertyLabel: "长按动作触发该事件",
		propertyWidget: Event,
	},
	{
		propertyName: "onswipe",
		propertyLabel: "组件上快速滑动后触发",
		propertyWidget: Event,
	},
];

export default propertiesLayout;
