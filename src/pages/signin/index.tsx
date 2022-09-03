import React from "react";
import { NextPage } from "next";
import { Button, Paper } from "@mui/material";
import SEO from "../../components/seo";
import classes from "./signIn.module.scss";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { signIn } from "next-auth/react";

const SignIn: NextPage = () => {
	return (
		<>
			<SEO title="Sign In" />
			<div className={classes.login}>
				<Paper variant="outlined" className={classes.login__wrapper}>
					<h2 className={classes.login__title}>Sign In</h2>

					<div className={classes.login__button_wrapper}>
						<Button
							variant="outlined"
							startIcon={<GoogleIcon className="w-7 h-7" />}
							className={classes.login__button}
							onClick={() => signIn("google")}
						>
							sign in via google
						</Button>
						<Button
							variant="outlined"
							startIcon={<GitHubIcon className="w-7 h-7" />}
							className={classes.login__button}
							onClick={() => signIn("github")}
						>
							sign in via github
						</Button>
					</div>
				</Paper>
			</div>
		</>
	);
};

export default SignIn;
