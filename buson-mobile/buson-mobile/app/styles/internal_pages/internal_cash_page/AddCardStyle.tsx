import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cor de fundo para toda a tela
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 12,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  button: {
    backgroundColor: '#0AC86C',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 25,
  },
  valueButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 12,
    width: '23%', // Ajustando para os botões ocuparem mais espaço de forma equilibrada
    alignItems: 'center',
  },
  valueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    marginVertical: 12,
    marginHorizontal: 25,
    backgroundColor: '#f1f1f1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // Para dispositivos Android com efeito de sombra
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#0AC86C', // Cor do border quando selecionado
  },
  selectedValueButton: {
    backgroundColor: '#0AC86C',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  cardContent: {
    marginBottom: 15, // Espaço entre o conteúdo do cartão e os botões
  },

  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

 


  editButton: {
    backgroundColor: '#FFC107', // Cor amarela para Editar
  },

  deleteButton: {
    backgroundColor: '#F44336', // Cor vermelha para Excluir
  },
});

export default styles;
