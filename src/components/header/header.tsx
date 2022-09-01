import React, { ComponentPropsWithoutRef, FC } from "react";
import classes from "./header.module.scss";
import Container from "../ui/container/container";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import Link from "next/link";
import { Button } from "@mui/material";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
	return (
		<header className={classes.header} {...props}>
			<Container>
				<div className={classes.header__inner}>
					<h1 className="logo">
						<Link href="/">
							<a>Rnotes</a>
						</Link>
					</h1>
					<div className={classes.header__buttons}>
						<ThemeSwitcher />
						<Link href="/login">
							<Button
								component="a"
								variant="outlined"
								className="text-white"
							>
								<a>Sign in</a>
							</Button>
						</Link>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
