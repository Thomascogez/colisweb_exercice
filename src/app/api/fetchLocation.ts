
const API_ENDPOINT : string ="https://api-adresse.data.gouv.fr/search/"
 
const fetchLocation = (searchTerm: string): Promise<any> => {
    let requestOptions: any = {
        method: 'GET',
 
      };
      
    return fetch(`${API_ENDPOINT}?q=${searchTerm}&limit=1000&type=housenumber&autocomplete=1`, requestOptions)
       
}


export default fetchLocation