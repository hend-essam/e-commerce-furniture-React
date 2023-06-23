import './catalog.css';
import { useState } from 'react';

const Filter = ({filterCatalog , allCatalog}) => {

  /* filter by catalog */
const onFilter = (catalog)=>{
    filterCatalog(catalog);
  }

  const [state, change]= useState({
    active: allCatalog[0],
    objects: allCatalog
  });

  function toggleActive(index){
    change({...state, active: state.objects[index]})
  }
  function toggleActiveStyle(index){
    if(state.objects[index] === state.active){
      return 'active';
    } else {
      return '';
    }
  }

    return(
      <ul>
      {
        allCatalog.length >= 1 ? (allCatalog.map((catalog , index)=>{
          return(
            <li key={index} 
                onClick={()=> {onFilter(catalog); toggleActive(index)}}
                className={toggleActiveStyle(index)}
                >
              {catalog.toUpperCase()}
            </li>
          )
        })) : <h2>No results found</h2>
      }
      </ul>
    );}

export default Filter;