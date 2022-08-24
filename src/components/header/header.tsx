import React, { ComponentPropsWithoutRef, FC } from "react";
import classes from "./header.module.scss";
import Container from "../ui/container/container";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
	return (
		<header className={classes.header} {...props}>
			<Container>
				<div className={classes.header__inner}>
					<h1 className="logo">Rnotes</h1>
					<ThemeSwitcher />
				</div>
			</Container>
		</header>
	);
};

export default Header;
