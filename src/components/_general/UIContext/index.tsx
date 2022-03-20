import { createContext, FC, useContext, useMemo } from "react";
import isUndefined from "lodash/isUndefined";
import { UITheme, WithClassName } from "types";
import classNames from "classnames";

interface UIContextType {
	theme: UITheme;
}

const DEFAULT_THEME = UITheme.LIGHT;

const UIContext = createContext<Partial<UIContextType>>({});

type UIContextProviderProps = Partial<UIContextType> & WithClassName;

const UIContextProvider: FC<UIContextProviderProps> = ({
	children,
	theme = DEFAULT_THEME,
	className,
}) => {
	const value = useMemo(
		() => ({
			theme,
		}),
		[theme]
	);

	return (
		<UIContext.Provider value={value}>
			<div className={classNames(className, `theme-${theme}`)}>{children}</div>
		</UIContext.Provider>
	);
};

const useUI = (): UIContextType => {
	const { theme } = useContext(UIContext);

	if (isUndefined(theme)) {
		throw new Error("Please, wrap your components in <UIContextProvider />");
	}

	return { theme };
};

export { UIContextProvider, useUI };
