import { View, Text } from "react-native";

function Footer(props) {
	const { timeUpdate, backGroundColor } = props;
	console.log(backGroundColor);
	return (
		<View
			style={{
				height: 100,
				paddingHorizontal: 20,
				marginTop: 10,
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: backGroundColor,
			}}
		>
			<Text
				style={{
					fontSize: 16,
					color: backGroundColor === "blue" ? "white" : "black",
				}}
			>
				Thời gian bạn cập nhật thông tin
			</Text>
			<Text
				style={{
					fontSize: 18,
					marginTop: 5,
					fontWeight: 500,
					color: backGroundColor === "blue" ? "white" : "black",
				}}
			>
				{timeUpdate}
			</Text>
		</View>
	);
}

export default Footer;
