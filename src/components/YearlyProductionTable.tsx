import React, { useState } from "react";
import { Table, Title, Pagination, Box, Stack } from "@mantine/core";
import { processYearlyData } from "../utils/dataProcessing";

const YearlyProductionTable: React.FC = () => {
  // Split array into chunks of given size
  function chunk<T>(array: T[], size: number): T[][] {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }

  const data = processYearlyData();
  const dataChunk = chunk(data, data.length/4);
  const [activePage, setPage] = useState(1);

  const items = dataChunk[activePage - 1].map((item) => (
    <Table.Tr key={item.year}>
      <Table.Td>{item.year}</Table.Td>
      <Table.Td>{item.maxCrop}</Table.Td>
      <Table.Td>{item.minCrop}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack spacing="md">
      <Title order={2} align="center">Yearly Production Data</Title>
        <Table
          striped
          withTableBorder
          withColumnBorders
          stickyHeader
          stickyHeaderOffset={1}
        >
          <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production</Table.Th>
            <Table.Th>Crop with Minimum Production</Table.Th>
          </Table.Tr>
        </Table.Thead>
          <Table.Tbody>{items}</Table.Tbody>
        </Table>
      <Pagination 
        total={dataChunk.length} 
        value={activePage} 
        onChange={setPage} 
        align="center"
      />
    </Stack>
  );
};

export default YearlyProductionTable;
