import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { SessionProvider } from "next-auth/react";
import { StyledEngineProvider } from "@mui/material";

function App({ Component, pageProps: { session, pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<ThemeProvider enableSystem attribute="class">
				<StyledEngineProvider injectFirst>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</StyledEngineProvider>
			</ThemeProvider>
		</SessionProvider>
	);
}

export default App;
