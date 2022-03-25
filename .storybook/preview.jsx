import { UI } from "../src/components/_general";
import { UITheme } from "../src/types";

const themes = [
	{
		name: UITheme.LIGHT,
		value: "#ffffff",
	},
	{
		name: UITheme.DARK,
		value: "#202023",
	},
];

const getThemeByColor = (color) => {
	return (themes.find((theme) => theme.value === color) || themes[0]).name;
}

const themeDecorator = (Story, context) => {
	const currentTheme = getThemeByColor(context.globals.backgrounds?.value || "");

	return (
		<UI theme={currentTheme}>
			<Story />
		</UI>
	);
};

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  },
	backgrounds: {
		default: themes[0].name,
		values: themes,
	},
}

const decorators = [themeDecorator];

export { parameters, decorators };
