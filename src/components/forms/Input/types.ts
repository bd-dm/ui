import { InputHTMLAttributes } from "react";

import { UIComponent } from "types";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

interface InputBaseProps
	extends UIComponent<
		InputAttributes,
		"onChange" | "value" | "required" | "type"
	> {
	name?: InputAttributes["name"];
	value: string;
	onChange: (value: string) => void;
	/** @default 'text' */
	type?: InputAttributes["type"];
	/** @default false */
	isRequired?: InputAttributes["required"];
}

export type { InputBaseProps };
