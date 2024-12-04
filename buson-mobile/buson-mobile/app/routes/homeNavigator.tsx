import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../(tabs)/home/home';
import CompanyScreen from '../(tabs)/internal_pages/internal_company_pages/companyPage';
import FavoritesCompanyPage from '../(tabs)/internal_pages/internal_company_pages/favoriteCompaniesPage';
import ProfileScreen from '../(tabs)/internal_pages/internal_user_pages/userPage';
import RegisterPlus from '../(tabs)/login_register/registerplus';
const Stack = createNativeStackNavigator();
import { useRoute } from '@react-navigation/native';

export function HomeNavigator() {

    const route = useRoute(); // Hook para acessar os parâmetros da rota
    const { id } = route.params || {};

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false,  // Removendo o cabeçalho
                }}>
                <Stack.Screen name="Home" component={HomeScreen} initialParams={{ id }} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Empresas" component={CompanyScreen} initialParams={{ id }} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Empresas-Favoritas" component={FavoritesCompanyPage} initialParams={{ id }} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Perfil" component={ProfileScreen} initialParams={{ id }} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Register-Plus" component={RegisterPlus} options={{
                    animation: 'fade'
                }} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}