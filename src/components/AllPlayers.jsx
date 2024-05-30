import {useState, useEffect} from 'react';
import { fetchPlayers } from '../API';
import PlayerCard from './PlayerCard';
 
export default function AllPlayers(){

const [players, setPlayers]= useState([]);
useEffect(()=>{  
    (async function(){
        const receivedPlayers= await fetchPlayers();
        setPlayers(receivedPlayers);
    })(); 
},[]);

return(
    <>
      <div className='flex flex-col justify-center bg-blue-100'>
        <div className='flex justify-between items-center px-20 py-5'>
        <h1 className='PuppyBowlLogo'>
            Puppy Bowl!
        </h1>
       </div>
    </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
      {players.map((player)=>{
        return(
            <PlayerCard
            key={player.id}
            player={player}
            />
        );
        })}  
     </div>
    </>
    );
   }        
      
    
    
    



