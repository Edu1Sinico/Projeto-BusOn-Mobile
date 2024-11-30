import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/app/styles/internal_pages/internal_company_page/companyPageStyle";
import Header from "@/components/header/header";
import SemiHeader from "@/components/header/semiHeader";
import { useRoute } from "@react-navigation/native";

export default function FavoritesCompanyPage() {
  const [favorites, setFavorites] = useState([]); // Estado para armazenar os favoritos
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
  const [errorAlert, setErrorAlert] = useState(false);

  const route = useRoute(); // Hook para acessar os parâmetros da rota
  const { id } = route.params || {}; // Obtém o ID do usuário dos parâmetros da rota

  // Função para buscar os favoritos do backend
  const fetchFavorites = async () => {
    try {
      setIsLoading(true); // Ativa o estado de carregamento

      // Buscar os IDs das empresas favoritas
      const favoriteResponse = await fetch('http://localhost:3000/api/buscarFavoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_usuario: id }),
      });

      if (!favoriteResponse.ok) {
        throw new Error('Erro ao buscar IDs favoritos.');
      }

      const favoriteData = await favoriteResponse.json(); // Retorna um array com os IDs
      const favoriteIds = favoriteData.map((fav) => fav.id_empresa);

      // Buscar os dados das empresas favoritas com base nos IDs
      const companyResponse = await fetch('http://localhost:3000/api/buscarEmpresasID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: favoriteIds }), // Envia os IDs como array
      });

      if (!companyResponse.ok) {
        throw new Error('Erro ao buscar empresas favoritas.');
      }

      const companies = await companyResponse.json();

      // Formatar os dados das empresas
      const formattedData = Array.isArray(companies)
        ? companies.map((item) => ({
          id: item.id_empresa,
          name: item.nome_empresa,
          location: item.cidade_empresa,
          image: item.logo || require('@/assets/images/companiesLogo/LogoSou.png'),
        }))
        : [];

      setFavorites(formattedData); // Atualiza o estado com as empresas favoritas
      setErrorAlert(false);
    } catch (error) {
      console.error(error);
      setErrorAlert(true);
    } finally {
      setIsLoading(false); // Desativa o estado de carregamento
    }
  };

  // Função para remover um favorito
  const removeFavorite = async (id_empresa) => {
    try {
      const response = await fetch('http://localhost:3000/api/removerFavoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: id,
          id_empresa,
        }),
      });

      if (response.ok) {
        // Remove o favorito da lista localmente
        setFavorites((prev) => prev.filter((fav) => fav.id !== id_empresa));
        console.log("Favorito removido com sucesso!");
      } else {
        const errorText = await response.text();
        console.error('Erro ao remover favorito:', errorText);
      }
    } catch (error) {
      console.error('Erro de conexão ao remover favorito:', error);
    }
  };

  // Carrega os favoritos ao montar o componente
  useEffect(() => {
    fetchFavorites();
  }, []);

  // Renderiza cada empresa favorita
  const renderFavoriteCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSubtitle}>{item.location}</Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => removeFavorite(item.id)}
      >
        <Icon name="star" size={24} color="#FFD700" /> {/* Sempre amarelo */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Selecionar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header backgroundActive={true} />
      <View style={styles.mainSection}>
        <SemiHeader title={"Empresas Favoritas"} />

        <View style={styles.mainBottomSection}>
          {isLoading ? (
            <View style={styles.loadingSection}>
              {errorAlert ? (
                <Text style={styles.errorMessage}>Falha ao carregar favoritos. Verifique sua conexão e tente novamente.</Text>
              ) : (
                <ActivityIndicator size="large" color="#0AC86C" />
              )}
            </View>
          ) : errorAlert ? (
            <View style={styles.loadingSection}>
              <Text style={styles.errorMessage}>Falha ao carregar favoritos. Verifique sua conexão e tente novamente.</Text>
            </View>
          ) : (
            <FlatList
              data={favorites}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderFavoriteCard}
            />
          )}
        </View>
      </View>
    </View>
  );
}
