import { createContext, FC, useContext, useMemo } from "react";
import isUndefined from "lodash/isUndefined";
import { UITheme } from "types";
import "styles/globals.css";

interface UIContextType {
	theme: UITheme;
}

const DEFAULT_THEME = UITheme.LIGHT;

const UIContext = createContext<Partial<UIContextType>>({});

const UI: FC<Partial<UIContextType>> = ({
	children,
	theme = DEFAULT_THEME,
}) => {
	const value = useMemo(
		() => ({
			theme,
		}),
		[theme]
	);

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

const useUI = (): UIContextType => {
	const { theme } = useContext(UIContext);

	if (isUndefined(theme)) {
		throw new Error("Please, wrap your components in <UI /> component");
	}

	return { theme };
};

export { UI, useUI };
