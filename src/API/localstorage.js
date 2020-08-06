
export function sendToLocalStorage (wordlist){
   localStorage.setItem('dictionary-app',wordlist);
}

export function getFromLocalStorage(){
   let wordlist=localStorage.getItem('dictionary-app');
   if((wordlist !== '') && wordlist !== null){
       wordlist=wordlist.split(',');
       return wordlist;
   }else{
       return [];
   }
  
}