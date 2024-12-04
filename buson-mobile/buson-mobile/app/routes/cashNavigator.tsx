import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import CashScreen from '../(tabs)/internal_pages/internal_cash_pages/cashPage';
import AddCashScreen from '../(tabs)/internal_pages/internal_cash_pages/addCashPage';
import PaymentCashPage from '../(tabs)/internal_pages/internal_cash_pages/paymentCashPage';
import AddCardScreen from '../(tabs)/internal_pages/internal_cash_pages/Cash_card_pages/AddCardScreen';

const Stack = createNativeStackNavigator();

export function CashNavigator() {
    const route = useRoute(); // Hook para acessar os parâmetros da rota
    const { id } = route.params || {}; // Obtém o parâmetro id
    // Teste
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Saldo"
                screenOptions={{
                    headerShown: false,  // Removendo o cabeçalho
                }}>
                <Stack.Screen name="Saldo" component={CashScreen} initialParams={{ id }} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Adicionar-Credito" component={AddCashScreen} initialParams={{ id }} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Realizar-Pagamento" component={PaymentCashPage} initialParams={{ id }} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Visualizar-Cartao" component={AddCardScreen} initialParams={{ id }} options={{
                    animation: 'fade'
                }} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}