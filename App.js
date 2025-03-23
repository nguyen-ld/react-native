import { store } from "./lab3/redux/stores";
import { Provider } from "react-redux";
import Todos from "./lab3/Todo";
export default function App() {
	return (
		<Provider store={store}>
			<Todos />
		</Provider>
	);
}
