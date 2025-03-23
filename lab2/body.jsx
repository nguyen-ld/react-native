import { useState } from "react";
import { View, TextInput, Button, ToastAndroid } from "react-native";

function Body(props) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const { randomColor, handleUpdateUser } = props;
	console.log("re-render");
	const handleChageInfo = () => {
		if (name.length > 0 && image.length > 0) {
			handleUpdateUser({ avatar: image, name });
		} else {
			ToastAndroid.show("Không được để trống", ToastAndroid.SHORT);
		}
	};
	console.log(name);
	console.log(image);
	return (
		<View style={{ flex: 1, paddingHorizontal: 20 }}>
			<TextInput
				placeholder="Nhập tên mới"
				style={{
					borderWidth: 1,
					borderColor: "black",
					padding: 10,
				}}
				value={name}
				onChangeText={(text) => setName(text)}
			/>
			<TextInput
				placeholder="Nhập địa chỉ hình ảnh mới"
				style={{
					borderWidth: 1,
					borderColor: "black",
					padding: 10,
					marginVertical: 15,
				}}
				value={image}
				onChangeText={(text) => setImage(text)}
			/>
			<Button title="cập nhật thông tin" onPress={handleChageInfo} />
			<View style={{ marginTop: 10 }}>
				<Button title="đổi màu footer" onPress={randomColor} />
			</View>
		</View>
	);
}

export default Body;
