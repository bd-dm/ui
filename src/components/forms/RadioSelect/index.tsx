import { Children, cloneElement, ReactElement, VFC } from "react";

import classNames from "classnames";
import isUndefined from "lodash/isUndefined";

import { Row } from "components/layout";

import { WithClassName } from "types";

import { Item } from "./components";
import styles from "./index.module.scss";

interface RadioSelectProps extends WithClassName {
	name: string;
	children: ReactElement[];
	initialValue?: string;
	onChange: (value: string) => void;
}

interface RadioSelectInterface extends VFC<RadioSelectProps> {
	Item: typeof Item;
}

const RadioSelect: RadioSelectInterface = ({
	children,
	className,
	onChange,
	name,
	initialValue,
}) => {
	return (
		<Row className={classNames(styles.row, className)}>
			{Children.map(children, (child) => {
				if (isUndefined(child)) {
					return null;
				}

				return cloneElement(child, {
					name,
					onChange,
					isInitiallySelected: initialValue === child.props.value,
				});
			})}
		</Row>
	);
};

RadioSelect.Item = Item;

export { RadioSelect };
