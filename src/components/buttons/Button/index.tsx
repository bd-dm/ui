import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";

import { SpinnerIcon } from "components/icons/SpinnerIcon";
import { UIComponent } from "types";

import styles from "./index.module.scss";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps
	extends UIComponent<ButtonAttributes, "disabled" | "onClick" | "type"> {
	onClick?: () => void;
	/** @default 'button' */
	type?: ButtonAttributes["type"];
	/** @default false */
	isDisabled?: boolean;
	/** @default false */
	isLoading?: boolean;
	/** @default false */
	isWithoutStyle?: boolean;
}

const Button: FC<ButtonProps> = ({
	isDisabled,
	isLoading,
	isWithoutStyle,
	children,
	onClick,
	type,
	elementProps,
	className,
}) => {
	return (
		<button
			type={type}
			disabled={isDisabled}
			onClick={onClick}
			className={classNames(
				{ [styles.button]: isWithoutStyle === false },
				className
			)}
			{...elementProps}
		>
			{isLoading ? (
				<SpinnerIcon className={styles.icon} isInversed />
			) : (
				children
			)}
		</button>
	);
};

Button.defaultProps = {
	isDisabled: false,
	isLoading: false,
	isWithoutStyle: false,
	type: "button",
};

export type { ButtonProps };
export { Button };
