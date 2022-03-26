# Minimalistic react UI library
## Installation
```
npm i @bd-dm/ui
```

## Import css to your app
```
import "@bd-dm/ui/dist/index.css"
import "@bd-dm/ui/dist/globals.css"
```

## Usage
```jsx
import "@bd-dm/ui/dist/index.css";
import { UI, Layout, useDeviceTheme } from "@bd-dm/ui";

const App = () => {
	const theme = useDeviceTheme();

	return (
		<UI theme={theme}>
			<Layout>
				[Your components here]
			</Layout>
		</UI>
	)
}
```
