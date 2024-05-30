import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <div id="navigation">
          <Link to= '/'>Home</Link>
          <Link to= '/add player'>add player</Link>
          <Link to= '/delete player'>delete player</Link>
        </div>
    )
}