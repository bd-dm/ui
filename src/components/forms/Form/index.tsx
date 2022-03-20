import { FC, FormHTMLAttributes } from "react";

import classNames from "classnames";

import { UIComponent } from "types";

import { Column, Error, Row } from "./components";
import styles from "./index.module.scss";

type FormAttributes = FormHTMLAttributes<HTMLFormElement>;

interface FormProps extends UIComponent<FormAttributes, "onSubmit"> {
	onSubmit: NonNullable<FormAttributes["onSubmit"]>;
}

interface FormInterface extends FC<FormProps> {
	Column: typeof Column;
	Error: typeof Error;
	Row: typeof Row;
}

const Form: FormInterface = ({
	children,
	onSubmit,
	elementProps,
	className,
}) => {
	const submitHandler: FormAttributes["onSubmit"] = (event) => {
		event.preventDefault();
		onSubmit(event);

		return false;
	};

	return (
		<form
			className={classNames(styles.form, className)}
			onSubmit={submitHandler}
			{...elementProps}
		>
			{children}
		</form>
	);
};

Form.Column = Column;
Form.Error = Error;
Form.Row = Row;

export { Form };
export type { FormInterface };
