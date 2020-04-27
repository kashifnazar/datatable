import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import MUIDataTable from "mui-datatables";

const container_data = [
  ["Release", "123"],
  ["Pickup", "456"],
  ["Release", "789"]
];

const Container = ({ billNumber }) => {
  return (
    <TableRow>
      <TableCell colSpan={5}>
        <MUIDataTable
          title="Containers"
          columns={["Container status", "Container number"]}
          data={container_data.map(c => [c[0], billNumber + c[1]])}
          options={{
            disableToolbarSelect: true
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default Container;
