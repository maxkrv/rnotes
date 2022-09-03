import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { SessionProvider } from "next-auth/react";
import { StyledEngineProvider } from "@mui/material";
import { useEffect } from "react";

function App({ Component, pageProps: { session, pageProps } }: AppProps) {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				let vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty("--vh", `${vh}px`);
			};

			window.addEventListener("resize", handleResize);

			handleResize();

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

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
