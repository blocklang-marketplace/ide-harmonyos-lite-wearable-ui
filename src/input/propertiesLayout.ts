import { PropertyLayout } from "@blocklang/designer-core/interfaces";
import Checked from "../property/Checked";
import Classes from "../property/Classes";
import InputType from "../property/InputType";
import TextStyle from "../property/TextStyle";
import Value from "../property/Value";

const propertiesLayout: PropertyLayout[] = [
	{
		propertyName: "type",
		propertyLabel: "类型",
		propertyWidget: InputType,
	},
	{
		propertyName: "name",
		propertyLabel: "名称",
		propertyWidget: Value,
	},
	{
		propertyName: "value",
		propertyLabel: "值",
		propertyWidget: Value,
	},
	{
		propertyName: "checked",
		propertyLabel: "是否选中",
		propertyWidget: Checked,
	},
	{
		propertyName: "style",
		propertyLabel: "样式",
		propertyWidget: TextStyle,
	},
	{
		propertyName: "class",
		propertyLabel: "样式类",
		propertyWidget: Classes,
	},
	{
		propertyName: "onchange",
		propertyLabel: "状态发生变化时触发",
		propertyWidget: Event,
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
