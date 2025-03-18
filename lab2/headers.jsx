import { View, Text, Image } from "react-native";
import { memo } from "react";

function Headers({ user }) {
	console.log(user);
	console.log("re-render");
	return (
		<View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 10,
					padding: 20,
					marginTop: 10,
				}}
			>
				<Image
					source={{ uri: user.avatar }}
					style={{ width: 80, height: 80 }}
				/>
				<View>
					<Text style={{ fontSize: 16 }}>Chào ngày mới</Text>
					<Text style={{ fontSize: 18, fontWeight: "500" }}>
						{user.name}
					</Text>
				</View>
			</View>
		</View>
	);
}

export default memo(Headers);
