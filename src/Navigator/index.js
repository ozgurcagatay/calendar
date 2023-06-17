import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../Screens/Login';
import SignUp from '../Screens/SingUp';
import CustomCalendar from '../Screens/CustomCalendar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';



const Stack = createStackNavigator();

function Root() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login}  
                    options={{
                        headerShown:false, 
                    }}
                    />
                    <Stack.Screen name="SignUp" component={SignUp} 
                    options={{
                        title: 'Kullanıcı Kayıt',
                        headerBackTitleVisible: false,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#f2f2f2',
                            elevation: 3,
                            shadowOpacity: 3,
                            borderBottomWidth: 1
                        },
                        headerTitleStyle: { color: 'red' },
                    }}/>
                    <Stack.Screen name="CustomCalendar" component={CustomCalendar} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}


// const MainStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Calendar" component={CustomCalender} />
//         </Stack.Navigator>
//     )
// }

// function Root(params) {
//     <SafeAreaView style={{flex:1}}>
//     <NavigationContainer  style={{flex:1}}>
//         <Stack.Navigator>
//             <Stack.Screen name="LoginS" component={LoginStack} />
//         </Stack.Navigator>
//     </NavigationContainer>
//     </SafeAreaView>
// }

export default Root