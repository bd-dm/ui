import { FC } from "react";

import { Column } from "components/layout";

import styles from "../../index.module.scss";

const FormColumn: FC = ({ children }) => {
	return <Column className={styles.formColumn}>{children}</Column>;
};

export { FormColumn as Column };
