import React, {
	ComponentPropsWithoutRef,
	FC,
	useEffect,
	useState,
} from "react";
import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

interface ThemeSwitcherProps extends ComponentPropsWithoutRef<"button"> {}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ ...props }) => {
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
				<BsSunFill
					role="button"
					className="w-7 h-7"
					onClick={() => setTheme("light")}
				/>
			);
		} else {
			return (
				<FaMoon
					role="button"
					className="w-7 h-7"
					onClick={() => setTheme("dark")}
				/>
			);
		}
	};

	return <button {...props}>{renderThemeChanger()}</button>;
};

export default ThemeSwitcher;
