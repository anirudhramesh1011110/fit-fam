import {
  createRouter,
} from '@expo/ex-navigation';

// Import screens here
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';

// Creates routes to sceen mapping
export default createRouter(() => ({
    auth: () => AuthScreen,
    home: () => HomeScreen

}), {
  ignoreSerializableWarnings: true,
});
