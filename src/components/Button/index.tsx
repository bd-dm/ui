import { VFC } from "react";
import styles from "./index.module.scss";

const Button: VFC = () => {
	return (
		<button className={styles.button} type="button">
			Button
		</button>
	);
};

export { Button };
