import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/app/styles/internal_pages/internal_company_page/companyPageStyle";
import { useLinkTo, useRoute } from '@react-navigation/native';
import Header from "@/components/header/header";
import SemiHeader from "@/components/header/semiHeader";

export default function CompanyScreen() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [companies, setCompanies] = useState([]); // Estado para armazenar as empresas
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
  const [errorAlert, setErrorAlert] = useState(false);

  const route = useRoute(); // Hook para acessar os parâmetros da rota
  const { id } = route.params || {}; // Obtém o parâmetro id

  React.useEffect(() => {
    console.log('ID do usuário:', id);
  }, [id]);


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
        return data.id_empresa;
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
        const favoriteIds = await response.json();
        setFavorites(favoriteIds); // Atualiza o estado com os IDs favoritos
      } else {
        console.error('Erro ao buscar favoritos:', response.status);
      }
    } catch (err) {
      console.error('Erro de conexão ao buscar favoritos:', err);
    }
  };


  // Carrega as empresas ao montar o componente
  useEffect(() => {
    fetchCompanies();
    fetchFavorites();
  }, []);

  const toggleFavorite = async (id_empresa) => {
    const isFavorite = favorites.includes(id_empresa);

    if (isFavorite) {
      setFavorites((prev) => prev.filter((favId) => favId !== id_empresa));
      await removerFavoritos(id_empresa); // Remove no backend
    } else {
      setFavorites((prev) => [...prev, id_empresa]);
      await adicionarFavoritos(id_empresa); // Adiciona no backend
    }
  };


  // Método para adicionar os favoritos
  const adicionarFavoritos = async (id_empresa) => {
    try {
      const response = await fetch('http://localhost:3000/api/adicionarFavoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: id,
          id_empresa: id_empresa,
        }),
      });

      if (response.ok) {
        console.log("Favorito adicionado com sucesso!");
      } else {
        const errorText = await response.text();
        console.error('Erro ao adicionar favorito:', errorText);
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
    }
  };

  // Método para remover os favoritos
  const removerFavoritos = async (id_empresa) => {
    try {
      const response = await fetch('http://localhost:3000/api/removerFavoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: id,
          id_empresa: id_empresa,
        }),
      });

      if (response.ok) {
        console.log("Favorito removido com sucesso!");
      } else {
        const errorText = await response.text();
        console.error('Erro ao remover favorito:', errorText);
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
    }
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
