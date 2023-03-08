import { Router } from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const fetchUsers = async () => {
    try {
      const headers = {
        headers: {
          Authorization: "yuri-moralles-conway",
        },
      };
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        headers
      );
      setUsersList(response.data);
    } catch (error) {
      console.log("Erro ao buscar os usuários");
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const context = {
    usersList: usersList,
    setUsersList: setUsersList
  };
  return (
    <ChakraProvider>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </ChakraProvider>
  );
}

export default App;
