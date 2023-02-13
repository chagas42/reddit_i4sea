import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/HomeScreen';
import WebViewScreen from '../pages/WebView';

export type StackParamList = {
  Home: undefined;
  WebView: { url: string; title:string };
};

const Stack = createStackNavigator<StackParamList>();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="WebView" component={WebViewScreen} 
      options={({ route }) => ({ title: route.params.title, animationEnabled: false })} />
    </Stack.Navigator>
  );
}
