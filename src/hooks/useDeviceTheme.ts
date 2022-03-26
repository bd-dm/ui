import { useState } from "react";
import { UITheme } from "types";

const useDeviceTheme = () => {
	const [deviceTheme, setDeviceTheme] = useState<UITheme>(UITheme.LIGHT);

	const onIsDarkThemeChange = (isDarkTheme: boolean) => {
		setDeviceTheme(isDarkTheme ? UITheme.DARK : UITheme.LIGHT);
	};

	if (typeof window !== "undefined") {
		const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
		isDarkTheme.onchange = (e) => onIsDarkThemeChange(e.matches);
		onIsDarkThemeChange(isDarkTheme.matches);
	}

	return deviceTheme;
};

export { useDeviceTheme };
