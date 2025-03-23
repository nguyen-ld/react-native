import { View, Text, Image } from "react-native";
import { memo } from "react";
import { useContext } from "react";
import { context } from "./main";

function Headers() {
	const { users } = useContext(context);
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
					source={{ uri: users.avatar }}
					style={{ width: 80, height: 80 }}
				/>
				<View>
					<Text style={{ fontSize: 16 }}>Chào ngày mới</Text>
					<Text style={{ fontSize: 18, fontWeight: "500" }}>
						{users.name}
					</Text>
				</View>
			</View>
		</View>
	);
}

export default memo(Headers);
