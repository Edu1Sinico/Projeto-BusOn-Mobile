import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../(tabs)/home/home';
import CompanyPage from '../(tabs)/internal_pages/internal_company_pages/companyPage';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false,  // Removendo o cabeçalho
                }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Empresas" component={CompanyPage} options={{
                    animation: 'fade'
                }} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}