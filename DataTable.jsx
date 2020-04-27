import React from "react";

export default props => {

  
  
  return (
    <MUIDataTable
      {...props}
      options={{...props.options, ...opts}}
    />
  );
};
