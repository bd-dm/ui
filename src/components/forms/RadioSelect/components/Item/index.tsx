import { ChangeEvent, FC } from "react";

import isUndefined from "lodash/isUndefined";
import { nanoid } from "nanoid";

import styles from "../../index.module.scss";

interface ItemProps {
	name?: string;
	onChange?: (value: string) => void;
	/** @default false */
	isInitiallySelected?: boolean;
	value: string;
}

const Item: FC<ItemProps> = ({
	children,
	isInitiallySelected,
	name,
	onChange,
	value,
}) => {
	const id = nanoid();

	const changeHandler = ({
		target: { value: newValue },
	}: ChangeEvent<HTMLInputElement>) => {
		if (isUndefined(onChange)) {
			return;
		}

		onChange(newValue);
	};

	return (
		<>
			<input
				name={name}
				value={value}
				type="radio"
				id={id}
				defaultChecked={isInitiallySelected}
				className={styles.input}
				onChange={changeHandler}
			/>
			<label className={styles.item} htmlFor={id}>
				{children}
			</label>
		</>
	);
};

Item.defaultProps = {
	isInitiallySelected: false,
};

export { Item };
