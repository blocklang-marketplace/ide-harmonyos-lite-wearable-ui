import { PropertyLayout } from "@blocklang/designer-core/interfaces";
import Event from "../property/Event";
import Value from "../property/Value";

const propertiesLayout: PropertyLayout[] = [
	{
		propertyName: "vendor",
		propertyLabel: "厂商",
		propertyWidget: Value,
	},
	{
		propertyName: "onCreate",
		propertyLabel: "当应用创建时调用",
		propertyWidget: Event,
	},
	{
		propertyName: "onDestroy",
		propertyLabel: "当应用退出时调用",
		propertyWidget: Event,
	},
];

export default propertiesLayout;
