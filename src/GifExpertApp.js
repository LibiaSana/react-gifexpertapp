import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One punch', 'Samurai X', 'DragonBall'];
    const [categories, setCategories] = useState(['One punch'])
    //const handleAdd = ()=> {
    //setCategories([...categories, 'HunterXHunter']);
    //}

console.log(categories);
    return (
        <div>
          <h2> GifExpertApp </h2>  
          <AddCategory setCategories={setCategories}/>    
          <hr/>
         
          <ol>
          {
          categories.map(category => 
             (<GifGrid 
                key={category}
                category={category}/>)
          )
          }
          </ol>
        </div>
    )
}


