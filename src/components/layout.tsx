import React, { FC, ReactNode } from "react";
import Header from "./header/header";
import SEO from "./seo";

interface LayoutProps {
	children: ReactNode;
	title?: string;
	description?: string;
	twitterHandle?: string;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<SEO />
			<main>{children}</main>
		</>
	);
};

export default Layout;
