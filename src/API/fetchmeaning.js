
async function fetchmeaning(query){
    if(query.trim().length !== 0){
        const response=await fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+query+"/?key=3fcdddc8-e8a4-4a1a-97f5-ac027e1a4a7a#");
        const data=await response.json();
        if(typeof data[0] === "object")
        return data[0].shortdef;   
    }
}

export default fetchmeaning;