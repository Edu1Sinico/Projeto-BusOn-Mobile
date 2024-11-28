import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/app/styles/internal_pages/internal_company_page/companyPageStyle";
import { useLinkTo } from '@react-navigation/native';
import Header from "@/components/header/header";
import SemiHeader from "@/components/header/semiHeader";

export default function CompanyScreen() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [companies, setCompanies] = useState([]); // Estado para armazenar as empresas
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
  const [errorAlert, setErrorAlert] = useState(false);

  const linkTo = useLinkTo(); // Sistema de links do react navigator

  // Função para buscar empresas do backend
  const fetchCompanies = async () => {
    try {
      setIsLoading(true); // Ativa o estado de carregamento
      const response = await fetch('http://localhost:3000/api/buscarEmpresas', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        const formattedData = Array.isArray(data)
          ? data.map((item) => ({
            id: item.id_empresa,
            name: item.nome_empresa,
            location: item.cidade_empresa,
            image: item.logo || require('@/assets/images/companiesLogo/LogoSou.png'),
          }))
          : [{
            id: data.id_empresa,
            name: data.nome_empresa,
            location: data.cidade_empresa,
            image: data.logo || require('@/assets/images/companiesLogo/LogoSou.png'),
          }];

        setCompanies(formattedData);
        setErrorAlert(false);
      } else {
        setErrorAlert(true);
        console.error('Erro ao buscar empresas:', response.status);
      }
    } catch (err) {
      setErrorAlert(true);
      console.error('Erro ao conectar ao servidor:', err);
    } finally {
      setIsLoading(false); // Desativa o estado de carregamento
    }
  };

  // Carrega as empresas ao montar o componente
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
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSubtitle}>{item.location}</Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item.id)}
      >
        <Icon
          name={favorites.includes(item.id) ? "star" : "star-border"}
          size={24}
          color={favorites.includes(item.id) ? "#FFD700" : "#C7C7C7"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectButton}
      >
        <Text style={styles.selectButtonText}>Selecionar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header backgroundActive={true} />
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
            onPress={() => { linkTo('/Empresas-Favoritas') }}
          >
            <Text style={styles.selectButtonText} >Visualizar Favoritos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainBottomSection}>
          {isLoading ? (
            <View style={styles.loadingSection}>
              {errorAlert ? (
                <Text style={styles.errorMessage}>Falha ao buscar empresas. Verifique 
                sua conexão e tente novamente.</Text>
              ) : (
                <ActivityIndicator size="large" color="#0AC86C" />
              )}
            </View>
          ) : errorAlert ? (
            <View style={styles.loadingSection}>
              <Text style={styles.errorMessage}>Falha ao buscar empresas. Verifique sua conexão e tente novamente.</Text>
            </View>
          ) : (
            <FlatList
              data={companies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderCompanyCard}
            />
          )}
        </View>
      </View>
    </View>
  );
}
