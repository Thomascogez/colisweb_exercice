import React, { createContext, useState } from 'react'
import { getLocalStorageByKey, hasKey, addItemToLocalStorage } from '../util/localStorageUtil';
import fetchLocation from '../api/fetchLocation'
type Coordinate = {
    lat: number,
    lng: number
}
type AppContext = {
    searchResult: Array<any>,
    getResult(searchTerm: string): void,
    coordinate: Coordinate,
    setCoordinate(newCoordinate: Coordinate): void,
    zoom: number,
    setZoom(zoom: number): void;
}

const AppContext = createContext<AppContext>({
    searchResult: [],
    getResult: () => {
        throw new Error('getResult() not implemented');
    },
    coordinate: { lat: 0, lng: 0 },
    setCoordinate: () => {
        throw new Error('setCoordinate() not implemented');
    },
    zoom: 6,
    setZoom: () => {
        throw new Error('setZoom() not implemented');
    },
})

const AppContextProvider = ({ children }) => {
    const [searchResult, setSearchResult] = useState([])
    const [coordinate, setCoordinate] = useState({ lat: 48.8534, lng: 2.3488 })
    const [zoom, setZoom] = useState(10)

    const getResult = (searchTerm: string) => {
        if (hasKey(searchTerm.toLowerCase())) {
            setSearchResult(getLocalStorageByKey(searchTerm.toLowerCase()))
            console.log('from local storage');

        }
        fetchLocation(searchTerm)
            .then(resp => resp.json())
            .then(resp => {
                setSearchResult(resp.features);
                addItemToLocalStorage(searchTerm.toLowerCase(), resp.features);
            })
            .catch(err => console.log(err));
    }
    return(
        <AppContext.Provider value ={{searchResult, getResult, coordinate, setCoordinate, zoom, setZoom}}>
            {children}
        </AppContext.Provider>
    )
}


export {AppContext, AppContextProvider}

