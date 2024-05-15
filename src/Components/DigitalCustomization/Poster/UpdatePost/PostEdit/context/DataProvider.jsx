import { createContext, useState } from 'react'; 

//this part helps to read and update this state without direct prop passing

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [html, setHtml] = useState('');
    const [js, setJs] = useState('');
    const [css, setCss] = useState('');

    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;