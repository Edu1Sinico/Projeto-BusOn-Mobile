import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0AC86C",
  },

  // Top Section
  sectionTop: {
    width: "100%",
    height: "45%",
    alignItems: "center",
  },

  header: {
    width: "100%",
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

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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

  button: {
    backgroundColor: "#0AC86C",
    borderRadius: 8,
    marginTop: 30,
    alignItems: "center",
    paddingVertical: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
