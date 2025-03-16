import { Text, View, TouchableOpacity } from "react-native";
import SectionItems from "./section-item";

function Sections({ item }) {
	console.log(item);
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "600",
					marginTop: 10,
					marginHorizontal: 8,
				}}
			>
				{item.title}
			</Text>
			<View
				style={{
					backgroundColor: "#fff",
					padding: 10,
					marginVertical: 10,
					marginHorizontal: 5,
					borderRadius: 10,
					elevation: 10,
				}}
			>
				{item.data.map((child) => (
					<SectionItems child={child} />
				))}
				{item.buttonLabel && (
					<TouchableOpacity
						style={{
							backgroundColor: "#007bff",
							alignItems: "center",
							flex: 1,
							marginTop: 10,
						}}
					>
						<Text
							style={{
								color: "white",
								paddingVertical: 10,
								fontWeight: "700",
								fontSize: 14,
							}}
						>
							{item.buttonLabel}
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
}
export default Sections;
