import { PropertyLayout } from "@blocklang/designer-core/interfaces";
import Event from "../property/Event";

const propertiesLayout: PropertyLayout[] = [
	{
		propertyName: "onInit",
		propertyLabel: "页面数据初始化完成时触发",
		propertyWidget: Event,
	},
	{
		propertyName: "onReady",
		propertyLabel: "页面创建完成时触发",
		propertyWidget: Event,
	},
	{
		propertyName: "onShow",
		propertyLabel: "页面显示时触发",
		propertyWidget: Event,
	},
	{
		propertyName: "onHide",
		propertyLabel: "页面消失时触发",
		propertyWidget: Event,
	},
	{
		propertyName: "onDestroy",
		propertyLabel: "页面销毁时触发",
		propertyWidget: Event,
	},
];

export default propertiesLayout;
