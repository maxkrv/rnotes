import React, { ComponentPropsWithoutRef, FC } from "react";
import classes from "./header.module.scss";
import Container from "../ui/container/container";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import Link from "next/link";
import { Avatar, Button } from "@mui/material";
import { signOut, useSession } from "next-auth/react";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
	const { data: session } = useSession();

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
						{session ? (
							<>
								<Avatar
									alt={session.user?.email as string}
									src={session.user?.image as string}
								/>
								<Button
									variant="outlined"
									className="text-white"
									onClick={() => signOut()}
								>
									Sign out
								</Button>
							</>
						) : (
							<Link href="/signin">
								<Button
									component="a"
									variant="outlined"
									className="text-white"
								>
									Sign in
								</Button>
							</Link>
						)}
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
