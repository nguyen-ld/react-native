import {
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
} from "react-native";
import Headers from "./headers";
import Body from "./body";
import Footer from "./footer";
import { useCallback, useEffect, useState } from "react";

const colors = ["white", "blue", "orange", "yellow", "green"];
function Main() {
	const [timeUpdate, setTimeUpdate] = useState("Bạn chưa cập nhật");
	const [users, setUsers] = useState({
		name: "Chưa có tên ",
		avatar: "https://cdn-icons-png.flaticon.com/512/428/428573.png",
	});
	const [backGroundColor, setBackGroundColor] = useState(colors[0]);

	useEffect(() => {
		const currentDate = new Date();
		console.log(currentDate);
		const dateTime =
			currentDate.getDate() +
			"/" +
			(currentDate.getMonth() + 1) +
			"/" +
			currentDate.getFullYear() +
			" | " +
			currentDate.getHours() +
			":" +
			currentDate.getMinutes() +
			":" +
			currentDate.getSeconds();
		setTimeUpdate(dateTime);
	}, [users]);

	const randomColor = useCallback(() => {
		const random = Math.floor(Math.random() * colors.length);
		console.log(">>> color :  ", random);
		setBackGroundColor(colors[random]);
	}, []);
	const handleUpdateUser = useCallback((_user) => {
		console.log("_user", _user);
		setUsers(_user);
	}, []);
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1 }}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={{ flex: 1 }}>
					<Headers user={users} />
					<Body
						randomColor={randomColor}
						handleUpdateUser={handleUpdateUser}
					/>
					<Footer
						timeUpdate={timeUpdate}
						backGroundColor={backGroundColor}
					/>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
export default Main;
