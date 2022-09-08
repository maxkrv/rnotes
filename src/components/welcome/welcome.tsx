import React, { FC } from "react";
import classes from "./welcome.module.scss";
import Link from "next/link";

const Welcome: FC = () => {
	return (
		<div className={classes.welcome}>
			<h1 className={classes.welcome__title}>Rnotes</h1>
			<h3 className={classes.welcome__subtitle}>
				Free safety notes & todos.
			</h3>
			<p className={classes.welcome__desc}>
				<Link href="/signin">
					<a className={classes.welcome__link}>Sign in </a>
				</Link>
				to use the app
			</p>
		</div>
	);
};

export default Welcome;
