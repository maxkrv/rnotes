import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import classes from "./container.module.scss";

interface ContainerProps extends ComponentPropsWithoutRef<"div">{
	children: ReactNode;
}

const Container: FC<ContainerProps> = ({children, ...props}) => {
	return (
		<div className={classes.container} {...props}>
			{children}
		</div>
	);
};

export default Container;