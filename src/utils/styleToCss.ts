const regex = RegExp(/[A-Z]/, "g");

function parse(key: string) {
	return key.replace(regex, (matched) => `-${matched.toLowerCase()}`);
}

export default function styleToCss(objStyle: any): string {
	if (!objStyle || typeof objStyle !== "object" || Array.isArray(objStyle)) {
		throw new TypeError(`expected an argument of type object, but got ${typeof objStyle}`);
	}

	const lines = Object.keys(objStyle).map((property: string) => `${parse(property)}: ${objStyle[property]};`);
	return lines.join("");
}
