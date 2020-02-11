
const API_ENDPOINT: string = "https://api-adresse.data.gouv.fr/search/"

/**
 * Function use to fetch the api-adresse.data.gouv.fr API and return fetched results
 * @param searchTerm 
 */
const fetchLocation = (searchTerm: string): Promise<any> => {
  let requestOptions: any = {
    method: 'GET',
  };

  return fetch(`${API_ENDPOINT}?q=${searchTerm}&limit=1000&type=housenumber&autocomplete=1`, requestOptions)

}


export default fetchLocation