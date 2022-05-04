import { FC } from "react";

import { useModal } from "../../context";
import styles from "../../index.module.scss";
import { Backdrop } from "../Backdrop";

interface ContainerProps {
	backdropClassName?: string;
}

const Container: FC<ContainerProps> = ({ children, backdropClassName }) => {
	const { id, isOpened } = useModal();

	if (!isOpened) {
		return null;
	}

	return (
		<Backdrop className={backdropClassName}>
			<div role="dialog" id={id} aria-modal="true" className={styles.modal}>
				{children}
			</div>
		</Backdrop>
	);
};

export { Container };
