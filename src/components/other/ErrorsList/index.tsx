import { VFC } from "react";

import { ErrorItem } from "./components";
import styles from "./index.module.scss";
import { ErrorsListError } from "./types";

interface ErrorsListProps {
	errors: ErrorsListError[];
}

const ErrorsList: VFC<ErrorsListProps> = ({ errors }) => {
	return (
		<ul className={styles.errors}>
			{errors.map((error) => (
				<li key={error.id}>
					<ErrorItem error={error} />
				</li>
			))}
		</ul>
	);
};

export { ErrorsList };
