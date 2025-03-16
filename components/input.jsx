import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function Input({ title, placeholder, color, error, onChangeText, value }) {
	const [focus, setFocus] = useState(false);

	return (
		<View style={{ marginVertical: 10 }}>
			<Text style={styles.label}>
				{title} <Text style={{ color: "#ec7063" }}>*</Text>
			</Text>
			<View
				style={[
					styles.inputContainer,
					focus && styles.focused,
					error && styles.errorBorder,
				]}
			>
				<TextInput
					style={[
						styles.input,
						{ backgroundColor: color ? "#ebf5fb" : "" },
					]}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					placeholder={placeholder}
					onChangeText={onChangeText}
					value={value}
				/>

				{error && <Text style={styles.errorIcon}>❗</Text>}
			</View>
			{error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	label: {
		fontSize: 18,
		fontWeight: "500",
		marginBottom: 5,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 2,
		borderRadius: 8,
		borderColor: "#d5dbdb",
	},
	input: {
		flex: 1,
		fontSize: 16,
		padding: 15,
	},
	focused: {
		borderColor: "#aed6f1",
	},
	errorBorder: {
		borderColor: "red",
		backgroundColor: "#fdecea",
	},
	errorIcon: {
		color: "red",
		marginRight: 10,
		fontSize: 16,
	},
	errorText: {
		color: "red",
		marginTop: 5,
		fontSize: 14,
	},
});

export default Input;
