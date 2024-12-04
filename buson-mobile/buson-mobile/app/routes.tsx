import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from './routes/homeNavigator';
import { CashNavigator } from './routes/cashNavigator';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export function Routes() {
    const route = useRoute(); // Hook para acessar os parâmetros da rota
    const { id } = route.params || {};


    return (
        <Tab.Navigator
            initialRouteName="HomeTab"  // Define "Home" como a página inicial
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },  // Aumenta o tamanho da fonte
                tabBarActiveTintColor: '#0AC86C',  // Cor do ícone quando está focado
                tabBarInactiveTintColor: 'gray',  // Cor do ícone quando não está focado
                tabBarStyle: { height: 70 },  // Aumenta a altura do bottomNavigator
            }}
        >
            <Tab.Screen
                name="Saldo"
                component={CashNavigator} // Use o CashNavigator aqui
                initialParams={{ id }}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Icon size={40} color={color} name="money" />
                    ),
                    tabBarLabel: 'Saldo',  // Define o texto da label
                }}
            />
            <Tab.Screen
                name="HomeTab"
                component={HomeNavigator}
                initialParams={{ id }}
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