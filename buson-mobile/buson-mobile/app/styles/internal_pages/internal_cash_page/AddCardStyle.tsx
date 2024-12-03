import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cor de fundo
  },
  form: {
    marginTop: 20,
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#0AC86C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  valueButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  valueButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    width: '22%', // Para caber 4 botões em uma linha
    alignItems: 'center',
  },
  valueButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 20,
    backgroundColor: '#f1f1f1',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
});

export default styles;