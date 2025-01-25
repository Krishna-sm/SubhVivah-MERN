import { Outlet } from "react-router";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
 
function App(){

  // console.log(import.meta.env.VITE_APP_BACKEND_URI);
  

  return <AuthProvider>
  <Header/>
      <Outlet/>
  </AuthProvider>
}

export default App;