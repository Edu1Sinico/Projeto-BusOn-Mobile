import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0AC86C",
  },

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
  sectionBottom: {
    width: "100%",
    flex: 1,
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
});
