
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfilePage from "./pages/ProfilePage/ProfilePage";
import BiographyPage from "./pages/BiographyPage/BiographyPage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";

import UserProvider from "./context/Provider";



const Stack = createNativeStackNavigator()
const Router = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen name="ProfilePage" component={ProfilePage}
            options={{
              headerShown: false,
            }}
          />
          
          <Stack.Screen name="ProfileEditPage" component={ProfileEditPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen name="BiographyPage" component={BiographyPage}
            options={{
              headerShown: false,
            }}
          />

          

        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>

  )
}

export default Router;