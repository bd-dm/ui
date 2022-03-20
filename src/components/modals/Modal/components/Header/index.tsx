import { FC } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
					<FontAwesomeIcon icon={faTimes} className={styles.headerIcon} />
				</button>
			</Row>
		</header>
	);
};

export { Header };
