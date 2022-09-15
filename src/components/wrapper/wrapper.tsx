import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import classes from "./wrapper.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, ButtonGroup, Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

interface WrapperProps extends ComponentPropsWithoutRef<"div"> {
	children?: ReactNode;
	header?: boolean;
	title?: string;
	links?: string[];
	button?: boolean;
	onClick?: () => void;
}

const Wrapper: FC<WrapperProps> = ({
	children,
	header = true,
	title,
	links = ["link1", "link2"],
	button = true,
	onClick,
	...props
}) => {
	const router = useRouter();

	return (
		<div className={classes.wrapper} {...props}>
			<ButtonGroup
				variant="contained"
				fullWidth
				className={classes.wrapper__button_wrapper}
			>
				{links?.map((link) => (
					<Link key={link} href={`/${link}`}>
						<Button
							className={`${
								router.pathname == `/${link}`
									? classes.active
									: ""
							}`}
							component="a"
						>
							{link}
						</Button>
					</Link>
				))}
			</ButtonGroup>

			<div className={classes.wrapper__container}>
				{header ? (
					<div className={classes.wrapper__header}>
						<h2>{title}</h2>
					</div>
				) : null}

				<div className={classes.wrapper__scroll}>
					<PerfectScrollbar>
						<div className={classes.wrapper__content}>
							{children}
						</div>
					</PerfectScrollbar>
				</div>

				{button ? (
					<Tooltip title="Add" placement="top">
						<Fab
							color="primary"
							aria-label="add"
							className={classes.wrapper__button}
						>
							<AddIcon />
						</Fab>
					</Tooltip>
				) : null}
			</div>
		</div>
	);
};

export default Wrapper;
