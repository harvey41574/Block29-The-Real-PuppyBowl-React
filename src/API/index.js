const BASEURL= (`https://fsa-puppy-bowl.herokuapp.com/api/2401-FTB-ET-WEB-PT`);
 
export async function fetchPlayers(){
   try{
    const response= await fetch(`${BASEURL}/players`);
    const result= await response.json();
    if(result.success){
        return result.data.players;
    }
    }catch(error){
        console.log(error);
    }    
}
