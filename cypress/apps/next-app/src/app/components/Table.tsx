'use client';

import { useRef, useEffect } from "react";

export const Table = () => {
  const rowHeaderRef = useRef<any>(null);
  const colHeaderRef = useRef<any>(null);

  useEffect(() => {
    if (rowHeaderRef.current) {
      rowHeaderRef.current.rowHeader = ["#", "First Names", "Last Name", "Username"];
      rowHeaderRef.current.tableData = [
        ["1", "John", "Doe", "@johndoe"],
        ["2", "Jane", "Doe", "@janedoe"],
        ["3", "Bob", "Smith", "@bobsmith"]
      ];
    }
    if (colHeaderRef.current) {
      colHeaderRef.current.headerPosition = "vertical";
      colHeaderRef.current.columnHeader = ["#", "First Names", "Last Name", "Username"];
      colHeaderRef.current.tableData = [
        [1, "John", "Doe", "@johndoe"],
        [2, "Jane", "Doe", "@janedoe"],
        [3, "Bob", "Smith", "@bobsmith"]
      ];
    }
  }, []);

  return (
    <>
      <sit-table ref={rowHeaderRef} suppressHydrationWarning></sit-table>
      <sit-table ref={colHeaderRef} suppressHydrationWarning></sit-table>
    </>
  );
};
