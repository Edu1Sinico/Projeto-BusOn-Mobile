

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/app/styles/internal_pages/internal_company_page/companyPageStyle";
import Header from "@/components/header/header";
import SemiHeader from "@/components/header/semiHeader";

export default function FavoritesCompanyPage({ navigation }) {
  // Estado inicial com favorito já selecionado
  const [isFavorite, setIsFavorite] = useState(true);

  const company = {
    id: 1,
    name: "SOU Transportes",
    location: "Limeira - SP",
    image: require("@/assets/images/companiesLogo/LogoSou.png"),
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Header backgroundActive={true} />
      <View style={styles.mainSection}>
        <SemiHeader title={"Empresas Favoritas"} />

        <View style={styles.card}>
          <Image source={company.image} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{company.name}</Text>
            <Text style={styles.cardSubtitle}>{company.location}</Text>
          </View>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={toggleFavorite}
          >
            <Icon
              name={isFavorite ? "star" : "star-border"}
              size={24}
              color={isFavorite ? "#FFD700" : "#C7C7C7"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectButton}
            // onPress={() =>
            //   navigation.navigate("FavoriteCompaniesPage", { company })
            // }
          >
            <Text style={styles.selectButtonText}>Selecionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
