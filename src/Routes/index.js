import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Forgot from '../pages/forgot/forgot'
import Product from '../pages/product/product'
import SignIn from '../pages/signIn/signIn'
import SignUp from '../pages/signup/signup'
import Welcome from '../pages/welcome/welcome'


const Stack = createNativeStackNavigator()

export default function Routes() {

   return (
      <Stack.Navigator>
         <Stack.Screen
         name='Welcome'
         component={Welcome}
         options={{headerShown: false}}
         />
         <Stack.Screen
         name='SignIn'
         component={SignIn}
         options={{headerShown: false}}
         />
         <Stack.Screen
         name='SignUp'
         component={SignUp}
         options={{headerShown: false}}
         />
         <Stack.Screen
         name='Product'
         component={Product}
         options={{headerShown: false}}
         />
         <Stack.Screen
         name='Forgot'
         component={Forgot}
         options={{headerShown: false}}
         />

      </Stack.Navigator>
   )
}