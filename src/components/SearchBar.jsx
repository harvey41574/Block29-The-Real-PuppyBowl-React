import {useState} from 'react'
export default function SearchBar({players}){
    const [searchValue, setSearchValue]= useState('');
    const handleChange= (e)=>{
        setSearchValue(e.target.value);
    }
    const searchResults= players.filter(player=>{
        const lowerCaseName= player.name.toLowerCase();
        return lowerCaseName.includes(searchValue.toLowerCase());
        console.log(hi);
    })
    return(
        <>
         <label htmlFor="search">search</label>
         <input
          placeholder="search"
          name="search"
          type="text"
          value={searchValue}
          onChange={handleChange}
          />
          <>
          {
            searchResults.map(result=>{
                return(
                    <div>{result.name}</div>
                )
            })
          }
          
          
          
          </>
        
        
        
        </>
    )
}