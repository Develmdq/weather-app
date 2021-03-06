import "react-native-gesture-handler"
import React, { useState, useCallback, useMemo } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NavigationApp } from "./src/navigation/NavigationApp"
import {
	useFonts,
	RobotoSlab_400Regular,
	RobotoSlab_600SemiBold,
	RobotoSlab_900Black,
} from "@expo-google-fonts/roboto-slab"
import WeatherProvider from "./src/context/WeatherContext"
import { PreferencesContext } from "./src/context/ThemeContext"
import { LightTheme, DarkTheme } from "./src/stylesGlobal/theme"

const App = () => {
	let [fontsLoaded] = useFonts({
		"RobotoSlab-Black": require("./assets/fonts/RobotoSlab-Black.ttf"),
		"RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
		"RobotoSlab-SemiBold": require("./assets/fonts/RobotoSlab-SemiBold.ttf"),
	})
	const [themeDark, setThemeDark] = useState(true)

	let theme = themeDark ? DarkTheme : LightTheme

	const toggleTheme = useCallback(() => {
		return setThemeDark(!themeDark)
	}, [themeDark])

	const preferences = useMemo(
		() => ({
			toggleTheme,
			themeDark,
		}),
		[toggleTheme, themeDark],
	)

	return (
		<PreferencesContext.Provider value={preferences}>
			<WeatherProvider>
				<NavigationContainer style={{ flex: 1 }} theme={theme}>
					<NavigationApp />
				</NavigationContainer>
			</WeatherProvider>
		</PreferencesContext.Provider>
	)
}

export default App
