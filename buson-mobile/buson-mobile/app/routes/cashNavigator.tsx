import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CashScreen from '../(tabs)/internal_pages/internal_cash_pages/cashPage';
import AddCashScreen from '../(tabs)/internal_pages/internal_cash_pages/addCashPage';
import PaymentCashPage from '../(tabs)/internal_pages/internal_cash_pages/paymentCashPage';

const Stack = createNativeStackNavigator();

export function CashNavigator() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Saldo"
                screenOptions={{
                    headerShown: false,  // Removendo o cabeçalho
                }}>
                <Stack.Screen name="Saldo" component={CashScreen} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Adicionar-Credito" component={AddCashScreen} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Realizar-Pagamento" component={PaymentCashPage} options={{
                    animation: 'fade'
                }} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}