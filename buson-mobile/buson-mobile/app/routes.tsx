import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './(tabs)/home/home';
import CashScreen from './(tabs)/internal_pages/internal_cash_pages/cashPage';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"  // Define "Home" como a página inicial
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },  // Aumenta o tamanho da fonte
                tabBarActiveTintColor: '#166CE2',  // Cor do ícone quando está focado
                tabBarInactiveTintColor: 'gray',  // Cor do ícone quando não está focado
                tabBarStyle: { height: 70 },  // Aumenta a altura do bottomNavigator
            }}
        >
            <Tab.Screen
                name="Saldo"
                component={CashScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Icon size={40} color={color} name="money" />
                    ),
                    tabBarLabel: 'Saldo',  // Define o texto da label
                }}
                initialParams={{ pageType: 'add' }} // Passa o parâmetro "pageType"
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Icon size={40} color={color} name="home" />
                    ),
                    tabBarLabel: 'Início',  // Define o texto da label, caso queira customizar
                }}
            />
        </Tab.Navigator>
    );
};