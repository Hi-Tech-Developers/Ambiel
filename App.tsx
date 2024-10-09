import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/core/store/store";
import { AppNavigator } from "./src/navigation/Routing";
import "./i18n"; // Import the i18n instance from your i18n.js file

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <AppNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
