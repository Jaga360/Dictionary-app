
async function fetchmeaning(query){
    const key=process.env.REACT_APP_API_KEY;
    if(query.trim().length !== 0){
        const response=await fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+query+"/?key="+key);
        const data=await response.json();
        if(typeof data[0] === "object")
        return data[0].shortdef;   
    }
}

export default fetchmeaning;