export const AutoCompleteApi = async (searchType) => {
    try {
        const response = await fetch(`http://localhost:5001/api/AutoComplete/${searchType}/all`);
        
        if (!response.status === 200) {
            throw new Error(`Error:${response.status}`)
        }
        const data = await response.json();
        
        return data.data || []
    }
    catch (error) {
        console.error(`Error`, error);
        return []
    }
}