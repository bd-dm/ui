import { FC } from "react";

import { Row } from "components/layout";

import { useModal } from "../../context";
import styles from "../../index.module.scss";

const Header: FC = ({ children }) => {
	const { closeHandler } = useModal();

	return (
		<header>
			<Row
				horizontalAlignment={Row.HorizontalAlignment.SPACE_BETWEEN}
				verticalAlignment={Row.VerticalAlignment.CENTER}
				className={styles.header}
			>
				{children}
				<button
					type="button"
					onClick={closeHandler}
					className={styles.headerCloseButton}
				>
					&times;
				</button>
			</Row>
		</header>
	);
};

export { Header };
