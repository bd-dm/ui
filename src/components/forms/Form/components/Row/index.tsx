import { FC } from "react";

import { Row } from "components/layout";

import styles from "../../index.module.scss";

const FormRow: FC = ({ children }) => {
	return (
		<Row
			verticalAlignment={Row.VerticalAlignment.CENTER}
			horizontalAlignment={Row.HorizontalAlignment.SPACE_BETWEEN}
			className={styles.formRow}
		>
			{children}
		</Row>
	);
};

export { FormRow as Row };
