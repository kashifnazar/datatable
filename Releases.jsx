import React, { useReducer, useEffect } from "react";

import Container from "./Containers";
import MUIDataTable from "mui-datatables";

const columns = [
  "Bill of lading",
  "Port of loading",
  "Port of destination",
  "Vessel"
];

const data = [
  ["123456000", "Lisbon", "Antwerp", "MSC Antwerp"],
  ["123456001", "Moscow", "Antwerp", "MSC Antwerp"],
  ["123456002", "Berlin", "Antwerp", "MSC Antwerp"],
  ["123456003", "Oslo", "Antwerp", "MSC Antwerp"]
];

const reducer = (prevState, action) => {
  
  if (action.type === "SELECTION") {
    const { index } = action
    const state = [...prevState]
    state[index].selected = !state[index].selected
    return state
  }

  return [...prevState];
};

export default () => {
  const [state, dispatch] = useReducer(
    reducer,
    data.map(([billNumber]) => ({
      billNumber,
      selected: false
    }))
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  const options = {
    expandableRows: true,
    expandableRowsOnClick: true,
    customToolbarSelect: () => null,
    disableToolbarSelect: true,
    onRowsSelect: (a, b) => dispatch({ type: "SELECTION", index: a[0].index }),
    renderExpandableRow: (rowData, rowMeta) => {
      const [billNumber] = rowData;
      return <Container billNumber={billNumber} />;
    }
  };

  return (
    <MUIDataTable
      title={"Releases"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};
