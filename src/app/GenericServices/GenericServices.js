import { AutoCompleteApi } from "../Services/AutoCompleteApi"

export const searchTypes = {
    location: 'location',
    experience: 'experience',
    workMode: 'workMode',
    speciality: 'speciality'
}

const dataFetcherFactory = {
    [searchTypes.location]: AutoCompleteApi,
    [searchTypes.experience]: AutoCompleteApi,
    [searchTypes.workMode]: AutoCompleteApi,
    [searchTypes.speciality]: AutoCompleteApi,

}

const dataMapper = (d) => d.field_value

export const autoCompletedataFetcher = async (searchType) => {
    console.log({searchType});
    
   const data = await dataFetcherFactory[searchType](searchType);
   const mappedData = data.map(dataMapper);
   console.log(mappedData);
   return mappedData
   
}