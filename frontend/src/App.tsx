import { Outlet } from "react-router";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
 
function App(){
  return <AuthProvider>
  <Header/>
      <Outlet/>
  </AuthProvider>
}

export default App;