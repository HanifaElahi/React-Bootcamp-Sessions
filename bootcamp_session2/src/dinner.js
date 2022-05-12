import React from 'react';

function Dinner (props){
    return(
        <div>
            <h1>Serving :</h1>
            <h2>Main dish : {props.dishName}        Sweet Dish : {props.sweetDish}</h2>
    
        </div>

        
    )
}

export default Dinner;
