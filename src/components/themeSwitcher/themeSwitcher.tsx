import React, { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

const ThemeSwitcher: FC = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, [mounted]);

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<IconButton onClick={() => setTheme("light")}>
					<LightModeIcon className="w-7 h-7 fill-white" />
				</IconButton>
			);
		} else {
			return (
				<IconButton onClick={() => setTheme("dark")}>
					<DarkModeIcon className="w-7 h-7 fill-white" />
				</IconButton>
			);
		}
	};

	return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
