import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
export default App //cumpulsory this line
AppRegistry.registerComponent(appName, () => App);