import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableSystem attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;