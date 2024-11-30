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

  // Buscar favoritos
  const fetchFavorites = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/buscarFavoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: id, // ID do usuário logado
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setFavorites(data); // Atualiza com um array vazio se `id_empresa` for indefinido
        return data;

      } else {
        console.error('Erro ao buscar favoritos:', response.status);
      }
    } catch (err) {
      console.error('Erro de conexão ao buscar favoritos:', err);
    }
  };


  // Função para buscar os favoritos do backend
  const fetchCompanies = async (favoriteIds) => {
    try {
      setIsLoading(true); // Ativa o estado de carregamento
      const response = await fetch('http://localhost:3000/api/buscarEmpresaID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_empresas: favoriteIds,
        }),
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

        setFavorites(formattedData);
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

  // Método para remover os favoritos
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
    const loadFavoritesAndCompanies = async () => {
      const favoriteIds = await fetchFavorites(); // Obtém os IDs favoritos
      if (favoriteIds && favoriteIds.length > 0) {
        await fetchCompanies(favoriteIds); // Passa os IDs favoritos
      }
    };

    loadFavoritesAndCompanies();
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
                <Text style={styles.alertMessage}>
                  Falha ao carregar favoritos. Verifique sua conexão e tente novamente.
                </Text>
              ) : (
                <ActivityIndicator size="large" color="#0AC86C" />
              )}
            </View>
          ) : errorAlert ? (
            <View style={styles.loadingSection}>
              <Text style={styles.alertMessage}>
                Falha ao carregar favoritos. Verifique sua conexão e tente novamente.
              </Text>
            </View>
          ) : favorites.length === 0 ? (
            // Mensagem se nenhum favorito for encontrado
            <View style={styles.loadingSection}>
              <Text style={styles.alertMessage}>
                Você ainda não marcou nenhuma empresa como favorita.
              </Text>
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