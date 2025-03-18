import { StatusBar } from "react-native";
import Main from "./lab2/main";
export default function App() {
	return <Main style={{ flex: 1, paddingTop: StatusBar.currentHeight }} />;
}
