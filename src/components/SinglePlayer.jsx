//fetch a single player
import { useParams } from 'react-router-dom'


export default function SinglePlayer(){
    const {playerId} = useParams();
    return(
        <>
        <h1>Single Player</h1>
          <p>{playerId}</p>
        </>
    );
}

