import { ReactNode, VFC } from "react";
import classNames from "classnames";
import { useDropdown } from "components/controls/Dropdown/context";
import styles from "./index.module.scss";
import { DropdownListPosition } from "../../constants";

interface ListItem {
	children: ReactNode;
	onClick?: () => void;
}

interface ListProps {
	items: ListItem[];
	/** @default 'ListPosition.LEFT' */
	position?: DropdownListPosition;
}

const List: VFC<ListProps> = ({ items, position }) => {
	const { isActive } = useDropdown();

	return (
		<ul
			className={classNames(styles.list, {
				[styles.active]: isActive,
				[styles.right]: position === DropdownListPosition.RIGHT,
				[styles.left]: position === DropdownListPosition.LEFT,
			})}
		>
			{items.map(({ children, onClick }, idx) => (
				// eslint-disable-next-line react/no-array-index-key
				<li key={idx}>
					<button className={styles.button} type="button" onClick={onClick}>
						{children}
					</button>
				</li>
			))}
		</ul>
	);
};

List.defaultProps = {
	position: DropdownListPosition.LEFT,
};

export { List };
