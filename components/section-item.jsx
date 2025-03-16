import { View, Text, Image } from "react-native";

function SectionItems({ child }) {
	return (
		<>
			<View style={{ marginVertical: 5 }}>
				<Text
					style={{
						fontSize: 14,
						fontWeight: "500",
						color: "#C0C0C0",
					}}
				>
					{child.label}
				</Text>
				<View>
					{child.type === "image" ? (
						<Image
							style={{ width: "100%", height: 150, marginTop: 5 }}
							source={{
								uri: "https://www.saga.co.uk/helix-contentlibrary/exceptional/2024/01/top-ten-best-beach-holiday-destinations-shutterstock-icemanphotos.jpg",
							}}
						/>
					) : (
						<Text style={{ fontSize: 16, fontWeight: "600" }}>
							{child.value}
						</Text>
					)}
				</View>
			</View>
		</>
	);
}
export default SectionItems;
