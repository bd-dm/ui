import { FC } from "react";

import { useModal } from "../../context";
import styles from "../../index.module.scss";
import { Backdrop } from "../Backdrop";

const Container: FC = ({ children }) => {
	const { id, isOpened } = useModal();

	if (!isOpened) {
		return null;
	}

	return (
		<Backdrop>
			<div role="dialog" id={id} aria-modal="true" className={styles.modal}>
				{children}
			</div>
		</Backdrop>
	);
};

export { Container };
