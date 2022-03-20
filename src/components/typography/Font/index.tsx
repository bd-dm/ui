import { ReactNode, VFC } from "react";

import classNames from "classnames";

import { WithClassName } from "types";

import styles from "./index.module.scss";

enum FontType {
	TEXT = "text",
	H1 = "h1",
	H2 = "h2",
	H3 = "h3",
	H4 = "h4",
	H5 = "h5",
	H6 = "h6",
}

const FontTypeElement = {
	[FontType.TEXT]: "span",
	[FontType.H1]: "h1",
	[FontType.H2]: "h2",
	[FontType.H3]: "h3",
	[FontType.H4]: "h4",
	[FontType.H5]: "h5",
	[FontType.H6]: "h6",
};

interface FontProps extends WithClassName {
	children: ReactNode | ReactNode[];
	/** @default false */
	useSpanTag?: boolean;
	/** @default FontType.TEXT */
	type?: FontType;
}

interface FontInterface extends VFC<FontProps> {
	Type: typeof FontType;
}

const Font: FontInterface = ({ children, className, useSpanTag, type }) => {
	const Tag = useSpanTag
		? "span"
		: (FontTypeElement[type as FontType] as keyof JSX.IntrinsicElements);

	return (
		<Tag className={classNames(styles.font, className, styles[`type-${type}`])}>
			{children}
		</Tag>
	);
};

Font.defaultProps = {
	useSpanTag: false,
	type: FontType.TEXT,
};

Font.Type = FontType;

export { Font };
