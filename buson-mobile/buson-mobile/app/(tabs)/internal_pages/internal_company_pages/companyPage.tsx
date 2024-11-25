import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/app/styles/internal_pages/internal_company_page/companyPageStyle";
import Header from "@/components/header/header";
import SemiHeader from "@/components/header/semiHeader";
import { useLinkTo } from '@react-navigation/native';

export default function CompanyScreen() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true); // Indica se os dados estão carregando

  // Função para buscar empresas da API
  const fetchCompanies = async () => {
    try {
      // Define o endpoint da API (ajuste o endereço do backend)
      const response = await fetch('http://localhost:3000/api/obterEmpresas', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null;
      }
    } catch (err) {
      console.error('Erro ao buscar as empresas:', err);
      return null;
    }
  };
  // useEffect para carregar os dados ao montar o componente
  useEffect(() => {
    fetchCompanies();
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const renderCompanyCard = ({ item }) => (
    <View style={styles.card}>
      {item.logo ? (
        <Image source={{ uri: item.logo }} style={styles.cardImage} />
      ) : (
        <Image source={require('@/assets/images/companiesLogo/LogoSou.png')} style={styles.cardImage} />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.nome_empresa}</Text>
        <Text style={styles.cardSubtitle}>{item.cidade_empresa}</Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item.id_empresa)}
      >
        <Icon
          name={favorites.includes(item.id_empresa) ? "star" : "star-border"}
          size={24}
          color={favorites.includes(item.id_empresa) ? "#FFD700" : "#C7C7C7"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainSection}>
        <SemiHeader title={"Empresas"} />
        <View style={styles.mainTopSection}>
          <View style={styles.inputSection}>
            <View style={styles.iconInputSection}>
              <Icon name="search" size={20} color="#fff" />
            </View>
            <TextInput
              style={[styles.input]}
              placeholder="Pesquisar"
              placeholderTextColor={"#C7C7C7"}
              value={search}
              onChangeText={setSearch}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity
            style={[styles.selectButton, { marginTop: 10 }]}
          // onPress={() =>
          //   navigation.navigate("FavoriteCompaniesPage", { favorites, companies })
          // }
          >
            <Text style={styles.selectButtonText}>Ver Favoritas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainBottomSection}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={companies.filter((company) =>
                company.nome_empresa.toLowerCase().includes(search.toLowerCase())
              )}
              keyExtractor={(item) => item.id_empresa.toString()}
              renderItem={renderCompanyCard}
            />
          )}
        </View>
      </View>
    </View>
  );
}
