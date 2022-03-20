import { Children, cloneElement, ReactElement, VFC } from "react";

import isUndefined from "lodash/isUndefined";

import { Row } from "../Row";
import { Item } from "./components";
import styles from "./index.module.scss";

interface TabsProps {
	index: number;
	onChangeIndex: (index: number) => void;
	children: ReactElement[];
}

interface TabsInterface extends VFC<TabsProps> {
	Item: typeof Item;
}

const Tabs: TabsInterface = ({ children, index, onChangeIndex }) => {
	return (
		<Row className={styles.tabs}>
			{Children.map(
				children,
				(child, childIndex) =>
					!isUndefined(child) &&
					cloneElement(child, {
						isChosen: childIndex === index,
						onClick: () => {
							onChangeIndex(childIndex);
						},
					})
			)}
		</Row>
	);
};

Tabs.Item = Item;

export { Tabs };
