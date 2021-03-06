import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create({
	headerContainer: {
		alignItems: "center",
		backgroundColor: "#0007",
		borderColor: "#fff5",
		borderRadius: 15,
		borderWidth: 0.5,
		height: 65,
		justifyContent: "center",
		marginBottom: 5,
		marginHorizontal: 10,
		marginTop: Platform.OS === "ios" ? 20 : 45,
	},
	mainText: {
		color: "#fff",
		letterSpacing: 2,
		fontSize: 30,
		fontFamily: "RobotoSlab-Black",
		textAlign:'center',
	},
})

export default styles
