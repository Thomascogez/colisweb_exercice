
const LOCALSTORAGE_KEY = "LOCATION"; // key of the stored local storage

/**
 * get json object pf the stored data from the local storage
 */
const getLocalStorage = (): Object => {
    let localStorageData = localStorage.getItem(LOCALSTORAGE_KEY) || "";
    try {
        let parsedData = JSON.parse(localStorageData);
        return parsedData
    } catch (error) {
        return {};
    }
}

/**
 * Method use to add new key to the stored data from the local storage
 * @param key 
 * @param item 
 */
const addItemToLocalStorage = (key: string, item: any, ): void => {
    let localStorageData: object = getLocalStorage() || {};
    localStorageData[key] = {};
    localStorageData[key] = item;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localStorageData));
}

/**
 * Check if local stored data contain a specific key
 * @param key value of the key to check
 */
const hasKey = (key: string): boolean => {
    return getLocalStorage().hasOwnProperty(key);
}

/**
 * Get an specific property of the stored object
 * @param key object key to retrieved
 */
const getLocalStorageByKey = (key: string) => {
    return (getLocalStorage().hasOwnProperty(key)) ? getLocalStorage()[key] : null;
}

export { addItemToLocalStorage, hasKey, getLocalStorageByKey };

