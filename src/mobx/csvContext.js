import React from 'react';
import { createCSVStore } from './csvStore';

const CSVContext = React.createContext(null);


export const CSVProvider = ({children}) => {

    const csvStore = createCSVStore();

    return <CSVContext.Provider value={csvStore}>
        {children}
    </CSVContext.Provider>
}

export const useCSVStore = () => React.useContext(CSVContext);