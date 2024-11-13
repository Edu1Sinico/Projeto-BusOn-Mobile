import React from "react";
import { useState } from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';

// Importando o Header como componente
import Header from '@/components/header/header';
import SemiHeader from "@/components/header/semiHeader";

export default function PaymentCashPage() {
    return (
        <View>
            <Header />
            <SemiHeader title={'Realizar Pagamento'} />
        </View>
    );
}