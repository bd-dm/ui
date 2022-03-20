import { SVGProps, VFC } from "react";

import classNames from "classnames";
import { UIComponent } from "types";
import styles from "./index.module.scss";

interface SpinnerIconProps
	extends UIComponent<SVGProps<SVGSVGElement>, "className"> {
	/** @default false */
	isInversed?: boolean;
}

const SpinnerIcon: VFC<SpinnerIconProps> = ({
	isInversed,
	className,
	elementProps,
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		style={{
			margin: "auto",
			background: "transparent",
			display: "block",
			shapeRendering: "auto",
		}}
		viewBox="0 0 23 23"
		preserveAspectRatio="xMidYMid"
		className={classNames(
			styles.icon,
			{ [styles.inversed]: isInversed },
			className
		)}
		{...elementProps}
	>
		<circle
			cx={11.5}
			cy={11.5}
			r={10}
			strokeWidth={3}
			strokeDasharray="15.707963267948966 15.707963267948966"
			fill="none"
			strokeLinecap="round"
		>
			<animateTransform
				attributeName="transform"
				type="rotate"
				repeatCount="indefinite"
				dur="1.8518518518518516s"
				keyTimes="0;1"
				values="0 11.5 11.5;360 11.5 11.5"
			/>
		</circle>
	</svg>
);

SpinnerIcon.defaultProps = {
	isInversed: false,
};

export { SpinnerIcon };
