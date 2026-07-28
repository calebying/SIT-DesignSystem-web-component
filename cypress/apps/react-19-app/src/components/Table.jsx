import React, { useEffect } from "react";

export const Table = () => {
    const tableData = [
        ["1", "John", "Doe", "@johndoe"],
        ["2", "Jane", "Doe", "@janedoe"],
        ["3", "Bob", "Smith", "@bobsmith"]
      ]
  const [state, setState] = React.useState(tableData)

  useEffect(() => {
    setTimeout(() => {
      setState([])
    }, 5000)
  }, [])
  const rowHeader = ["#", "First Names", "Last Name", "Username"]
  return (
    <>
    <sit-table tableData={state} rowHeader={rowHeader}></sit-table>
    <br/>
    <sit-table>
  <sit-table-row>
    <sit-table-head>#</sit-table-head>
    <sit-table-head>First name</sit-table-head>
    <sit-table-head>Last name</sit-table-head>
    <sit-table-head>Username</sit-table-head>
    <sit-table-head>Action</sit-table-head>
  </sit-table-row>

  <sit-table-row>
    <sit-table-head>1</sit-table-head>
    <sit-table-cell>John</sit-table-cell>
    <sit-table-cell>Doe</sit-table-cell>
    <sit-table-cell>
      <sit-link>
        <a href="#">@johndoe</a>
      </sit-link>
    </sit-table-cell>
    <sit-table-cell>
      <sit-icon-button name="three-dots-vertical"></sit-icon-button>
    </sit-table-cell>
  </sit-table-row>
  <sit-table-row>
    <sit-table-head>2</sit-table-head>
    <sit-table-cell>Jane</sit-table-cell>
    <sit-table-cell>Doe</sit-table-cell>
    <sit-table-cell>
      <sit-link>
        <a href="#">@janedoe</a>
      </sit-link>
    </sit-table-cell>
    <sit-table-cell>-</sit-table-cell>
  </sit-table-row>
  <sit-table-row>
    <sit-table-head>3</sit-table-head>
    <sit-table-cell>Bob</sit-table-cell>
    <sit-table-cell>Smith</sit-table-cell>
    <sit-table-cell>
      <sit-link>
        <a href="#">@bobsmith</a>
      </sit-link>
    </sit-table-cell>
    <sit-table-cell>
      <sit-badge outlined=""> active </sit-badge>
    </sit-table-cell>
  </sit-table-row>
</sit-table>
</>
  );
};
