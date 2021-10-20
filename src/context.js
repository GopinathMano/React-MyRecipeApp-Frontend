import { createContext,useState } from "react";
export const MYContext = createContext();
function AppContext ({children}){
    const [recipes,setRecipes]= useState([]);
    const[user,setUser] =useState(null);

    return(
        <MYContext.Provider value={{recipes,setRecipes,user,setUser}}>{children}</MYContext.Provider>
    );
}

export default AppContext;