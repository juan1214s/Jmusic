
import React from "react";

function ListItem({ nombre, id,clickCancion }) {
  const handleClick = () => {
    
    clickCancion(id);
  };

  return (
    <div className="renderLista" onClick={handleClick}>
      <p>{nombre}</p>
    </div>
  );
}

export default ListItem;
