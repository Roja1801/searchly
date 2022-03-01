import React,{createContext,useContext,useState} from "react";
const ResultContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/google-search';


export const ResultContextProvider = ({children}) => {
    const [results, setResults ] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('Priyanka Chopra');

    const getResults = async(type) => {
        setIsLoading(true);
        
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search1.p.rapidapi.com',
                'x-rapidapi-key': 'dd0a38f1c1msh96c4670d7ea8a01p18bc9djsnf4bf15148dc0'

            }
        })
        const data = await response.json();
        console.log(data);


        setResults(data);
        setIsLoading(false);

    }
    return(
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
            {children}


        </ResultContext.Provider>
    )
}
export const useResultContext = () => useContext(ResultContext);