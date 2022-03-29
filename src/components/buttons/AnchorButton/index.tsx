import { AnchorHTMLAttributes, FC } from "react";
import classNames from "classnames";

import { SpinnerIcon } from "components/icons/SpinnerIcon";
import { UIComponent } from "types";

import styles from "./index.module.scss";

type AnchorAttributes = AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends UIComponent<AnchorAttributes, "href"> {
	href?: string;
	/** @default false */
	isLoading?: boolean;
}

const AnchorButton: FC<ButtonProps> = ({
	isLoading,
	children,
	elementProps,
	href,
	className,
}) => {
	return (
		<a
			href={href}
			className={classNames(styles["anchor-button"], className)}
			{...elementProps}
		>
			{isLoading ? (
				<SpinnerIcon className={styles.icon} isInversed />
			) : (
				children
			)}
		</a>
	);
};

AnchorButton.defaultProps = {
	isLoading: false,
};

export { AnchorButton };
