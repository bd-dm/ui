import { VFC } from "react";

import classNames from "classnames";

import styles from "./index.module.scss";
import { InputBaseProps } from "./types";

const Input: VFC<InputBaseProps> = ({
	name,
	value,
	onChange,
	elementProps,
	isRequired,
	type,
	className,
}) => {
	return (
		<input
			name={name}
			type={type}
			value={value}
			onChange={({ target: { value: newValue } }) => onChange(newValue)}
			className={classNames(styles.input, className)}
			required={isRequired}
			{...elementProps}
		/>
	);
};

Input.defaultProps = {
	isRequired: false,
	type: "text",
};

export { Input };
