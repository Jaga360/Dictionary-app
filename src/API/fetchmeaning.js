import * as apidetails from './apidetails';

async function fetchmeaning(query){
    if(query.trim().length !== 0){
        const response=await fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+query+"/?key="+apidetails.key);
        const data=await response.json();
        if(typeof data[0] === "object")
        return data[0].shortdef;   
    }
}

export default fetchmeaning;