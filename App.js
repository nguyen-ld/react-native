import { StatusBar } from "expo-status-bar";
import {
	ScrollView,
	StyleSheet,
	View,
	StatusBar as statusBar,
	FlatList,
	Text,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { useState } from "react";

import Headers from "./components/headers";
import Sections from "./components/section";
import Input from "./components/input";

const eventInfo = [
	{
		title: "Lịch trình",
		data: [
			{ label: "Địa điểm", value: "Hồ Tràm, Vũng Tàu" },
			{ label: "Thời gian", value: "09:00 AM - 12:00 AM, 12/12/2024" },
			{ label: "Phương tiện di chuyển", value: "Xe bus" },
			{ label: "Thời gian", value: "21:00 - 22:00" },
			{
				label: "Hình ảnh",
				type: "image",
				value: "https://source.unsplash.com/300x200/?beach",
			},
		],
	},
	{
		title: "Khách sạn",
		data: [
			{ label: "Tên khách sạn", value: "Hồng Quỳnh" },
			{ label: "Giờ mở cửa", value: "06:00 AM - 12:00 AM" },
			{ label: "Địa điểm", value: "234 Quang Trung, Hồ Chí Minh" },
		],
		buttonLabel: "CHI TIẾT",
	},
];

export default function App() {
	const [inputValue, setInputValue] = useState("");
	const [inputError, setInputError] = useState("");

	const handleChangeText = (text) => {
		setInputValue(text);
		if (text.length < 3) {
			setInputError("Nhập ít nhất 3 ký tự");
		} else {
			setInputError("");
		}
	};
	return (
		// <View style={styles.container}>
		// 	<StatusBar style="auto" />
		// 	<Headers title="Componnents Header" isIcon={true} />
		// 	<FlatList
		// 		data={eventInfo}
		// 		renderItem={({ item }) => <Sections item={item} />}
		// 		keyExtractor={(item) => item.title}
		// 	/>
		// </View>
		<KeyboardAvoidingView style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<StatusBar style="auto" />
					<View>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "bold",
								marginTop: 15,
							}}
						>
							Components Input
						</Text>
					</View>
					<Input title="Title" placeholder="Place holder" />
					<Input
						title="Title"
						placeholder="Place holder"
						background={true}
						color={true}
					/>
					<Input
						title="Title"
						placeholder="Place holder"
						background={true}
						color={true}
					/>

					<Input
						title="Tittle"
						placeholder="Place holder"
						error={inputError}
						value={inputValue}
						onChangeText={handleChangeText}
					/>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: statusBar.currentHeight,
		paddingHorizontal: 10,
	},
});
