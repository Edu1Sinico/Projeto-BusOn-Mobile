import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '@/app/styles/internal_pages/internal_company_page/companyPageStyle';
import Header from '@/components/header/header';
import SemiHeader from "@/components/header/semiHeader";

export default function CompanyScreen() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);

  const companies = [
    {
      id: 1,
      name: "SOU Transportes",
      location: "Limeira - SP",
      image: require('@/assets/images/companiesLogo/LogoSou.png'), // Troque para o caminho correto da imagem
    },
    {
      id: 2,
      name: "Lira Bus",
      location: "Limeira - SP",
      image: require('@/assets/images/companiesLogo/LogoSou.png'), // Troque para o caminho correto da imagem
    },
    {
      id: 3,
      name: "TransLimeira",
      location: "Limeira - SP",
      image: require('@/assets/images/companiesLogo/LogoSou.png'), // Troque para o caminho correto da imagem
    },
  ];

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
          name={favorites.includes(item.id) ? 'star' : 'star-border'}
          size={24}
          color={favorites.includes(item.id) ? '#FFD700' : '#C7C7C7'}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Selecionar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainSection}>
        <SemiHeader title={'Empresas'} />
        <View style={styles.mainTopSection}>
          <View style={styles.inputSection}>
            <View style={styles.iconInputSection}>
              <Icon name="search" size={20} color="#fff" />
            </View>
            <TextInput
              style={[styles.input]}
              placeholder="Pesquisar"
              placeholderTextColor={'#C7C7C7'}
              value={search}
              onChangeText={setSearch}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View style={styles.mainBottomSection}>
          <FlatList
            data={companies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCompanyCard}
          />
        </View>
      </View>
    </View>
  );
}
