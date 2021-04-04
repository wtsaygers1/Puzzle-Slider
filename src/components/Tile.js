import React from "react";

function Tile(props){
    return(
        <div className= "col-3 border border-dark" onClick={() => (props.tileClick())}>
            <p>id:{props.id}</p>
            <p>currentPos:{props.currentPos}</p>
            <p>winPos:{props.winPos}</p>
        </div>
    )
}

export default Tile;