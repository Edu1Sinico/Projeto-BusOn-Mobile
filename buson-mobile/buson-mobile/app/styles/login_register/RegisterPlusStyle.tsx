import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0AC86C",
  },

  // Top Section
  sectionTop: {
    width: "100%",
    height: "40%",
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },

  userbanner: {
    width: 90,
    height: 90,
    borderRadius: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },

  logo_section: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  title: {
    fontWeight: "bold",
    color: "#fff",
    margin: 5,
    fontSize: 20,
  },

  // Bottom Section
  sectionBottom: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  formSection: {
    width: '100%',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 5,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  radioGroup: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0AC86C",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },

  radioSelected: {
    backgroundColor: "#0AC86C",
  },

  addButton: {
    padding: 10,
    height: 70,
    width: 120,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0AB060',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  addTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  inputSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '65%',
    height: 50,
    backgroundColor: '#EDEDED',
    paddingLeft: 10,
  },

  iconInputSection: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0AC86C',
  },

});
