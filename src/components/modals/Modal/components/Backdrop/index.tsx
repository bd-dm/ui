import { FC } from "react";

import styles from "../../index.module.scss";

const Backdrop: FC = ({ children }) => {
	return <div className={styles.backdrop}>{children}</div>;
};

export { Backdrop };
