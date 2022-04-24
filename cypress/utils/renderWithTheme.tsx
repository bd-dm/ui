import { ReactNode } from "react";
import { Layout, UI, UITheme } from "../../src";

const renderWithTheme = (
	children: ReactNode,
	theme: UITheme = UITheme.LIGHT
) => {
	return (
		<UI theme={theme}>
			<Layout>
				<div style={{ padding: "4px" }}>{children}</div>
			</Layout>
		</UI>
	);
};

export { renderWithTheme };
