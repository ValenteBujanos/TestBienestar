import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "./Index";
import Reports from './Reports';
import Home from './Home';
import FormData from './FormData';
import FormU from './FormU';

const stack= createNativeStackNavigator()

const MainStack = () => {
    return ( 
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name="Index"
                    component={Index}
                    options={{ headerShown: false }} 
                />
                <stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }} 
                />
                <stack.Screen
                    name="Reports"
                    component={Reports}
                    options={{ headerShown: false }} 
                />
                <stack.Screen
                    name="FormData"
                    component={FormData}
                    options={{ headerShown: false }} 
                />
                <stack.Screen
                    name="FormU"
                    component={FormU}
                    options={{ headerShown: false }} 
                />
            </stack.Navigator>
        </NavigationContainer>
     );
}

 
export default MainStack;