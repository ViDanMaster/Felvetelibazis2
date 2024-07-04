import React from "react";
import { COLORS, icons, images, svgs, SIZES } from '../constants';
import { TantargyValaszto, TipusValaszto, TesztValaszto, FeladatKitolto, Eredmeny } from '../components';
import Menu from "../components/common/Menu";
//import TesztHeader from "./components/teszt/TesztHeader";

import { ValaszokContextProvider } from "../components/Feladatok/ValaszokContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SQLiteProvider } from "expo-sqlite";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(['Require cycle:']);

export default function App() {
  return (
        <ValaszokContextProvider>
          <SQLiteProvider databaseName="FeladatokAdatbazis.db" assetSource={{ assetId: require('../assets/FeladatokAdatbazis.db') }}>
            <Stack.Navigator initialRouteName="TantargyValaszto">
              <Stack.Group>
                <Stack.Screen
                  name="TantargyValaszto"
                  component={TantargyValaszto}
                  options={{
                    headerStyle: { backgroundColor: COLORS.primary },
                    headerLeft: () => <Menu />,
                    headerTitle: "",
                  }}
                />
                <Stack.Screen
                  name="TipusValaszto"
                  component={TipusValaszto}
                  options={{
                    headerStyle: { backgroundColor: COLORS.primary },
                    headerTintColor: 'white',
                  }}
                />
                <Stack.Screen
                  name="TesztValaszto"
                  component={TesztValaszto}
                  options={{
                    headerStyle: { backgroundColor: COLORS.primary },
                    headerTintColor: 'white',
                  }}
                />
              </Stack.Group>

              <Stack.Group>
                <Stack.Screen name="FeladatKitolto" component={FeladatKitolto} options={{ headerShown: false }} />
                <Stack.Screen name="Eredmeny" component={Eredmeny} options={{ headerShown: false }} />
              </Stack.Group>
            </Stack.Navigator>
          </SQLiteProvider>
        </ValaszokContextProvider>
  );
}