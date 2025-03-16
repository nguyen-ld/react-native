import { Pressable, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Headers = ({ title, isIcon }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				paddingHorizontal: 5,
				paddingVertical: 10,
			}}
		>
			<View>
				<Pressable>
					{isIcon && (
						<Ionicons name="arrow-back" size={24} color="black" />
					)}
				</Pressable>
			</View>
			<View>
				<Pressable>
					<Text style={{ fontSize: 14, fontWeight: "bold" }}>
						{title}
					</Text>
				</Pressable>
			</View>
			<View>
				<Pressable>
					<Ionicons name="cart-outline" size={24} color="black" />
				</Pressable>
			</View>
		</View>
	);
};
export default Headers;
