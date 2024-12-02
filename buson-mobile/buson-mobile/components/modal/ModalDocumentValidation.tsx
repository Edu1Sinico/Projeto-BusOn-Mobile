
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

// Componente ModalDocumentValidation
export function ModalDocumentValidation() {
  return (
    <View style={stylesModal.container}>
      <View style={stylesModal.content}>
        {/* Componente LaudoComprovacao é chamado aqui */}
        <LaudoComprovacao />
      </View>
    </View>
  );
}

// Componente LaudoComprovacao
const LaudoComprovacao = () => {
  const [isChecked, setIsChecked] = useState(false); // Estado para "Concordo"

  return (
    <View style={stylesLaudo.container}>
      {/* Cabeçalho */}
      <View style={stylesLaudo.header}>
        <Image
          source={require("@/assets/images/BusOn Logo.png")} // Substitua pelo caminho correto da logo
          style={stylesLaudo.logo}
        />
        <Text style={stylesLaudo.title}>Laudo de Comprovação</Text>
      </View>

      {/* Campo para anexar documento */}
      <Text style={stylesLaudo.label}>Anexar o Documento</Text>
      <TextInput style={stylesLaudo.input} placeholder="Anexar arquivo..." />

      {/* Termos e condições */}
      <Text style={stylesLaudo.label}>Termos e Condições</Text>
      <ScrollView style={stylesLaudo.termos}>
        <Text style={stylesLaudo.termoText}>
          1. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ducimus,
          sunt placeat delectus ex earum voluptatibus animi voluptate?
          Cupiditate tempore facere quos ullam sapiente repellendus aliquam
          officia, modi, unde nam voluptate.
        </Text>
        <Text style={stylesLaudo.termoText}>
          2. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ducimus,
          sunt placeat delectus ex earum voluptatibus animi voluptate?
          Cupiditate tempore facere quos ullam sapiente repellendus aliquam
          officia, modi, unde nam voluptate.
        </Text>
      </ScrollView>

      {/* Checkbox para "Concordo" */}
      <View style={stylesLaudo.checkboxContainer}>
        <TouchableOpacity
          style={[
            stylesLaudo.checkbox,
            isChecked && stylesLaudo.checkboxSelected,
          ]}
          onPress={() => setIsChecked(!isChecked)}
        >
          {isChecked && <View style={stylesLaudo.radioDot} />}
        </TouchableOpacity>
        <Text>Concordo</Text>
      </View>

      {/* Botões */}
      <View style={stylesLaudo.buttonContainer}>
        <TouchableOpacity style={stylesLaudo.cancelButton}>
          <Text style={stylesLaudo.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesLaudo.sendButton,
            !isChecked && stylesLaudo.disabledButton,
          ]}
          disabled={!isChecked}
        >
          <Text style={stylesLaudo.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos para ModalDocumentValidation
const stylesModal = StyleSheet.create({
  container: {
    backgroundColor: "rgba(25,25,25,0.5)",
    flex: 1,
    width: "100%",
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#FFF",
    width: "80%",
    height: 750,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 8,
  },
});

// Estilos para LaudoComprovacao
const stylesLaudo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  termos: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    height: 150,
    marginBottom: 16,
  },
  termoText: {
    fontSize: 14,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checkboxSelected: {
    borderColor: "#00A859",
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00A859",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#FF0000",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#00A859",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ModalDocumentValidation;
