import React, { useState } from 'react';
import { Table, Title, Pagination, Box, Stack } from '@mantine/core';
import { processCropAverages } from '../utils/dataProcessing';

const CropAveragesTable: React.FC = () => {
  // Split array into chunks of given size
  function chunk<T>(array: T[], size: number): T[][] {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }

  const data = processCropAverages();
  const dataChunk = chunk(data, 20);
  const [activePage, setPage] = useState(1);

  //Generate table rows for the current page
  const items = dataChunk[activePage - 1].map((item) => (
    <Table.Tr key={item.crop}>
      <Table.Td>{item.crop}</Table.Td>
      <Table.Td>{item.avgYield}</Table.Td>
      <Table.Td>{item.avgArea}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack spacing="md">
      <Title order={2} align="center">Crop Averages (1950-2020)</Title>
        <Table
          striped
          withTableBorder
          withColumnBorders
          stickyHeader
          stickyHeaderOffset={1}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Crop</Table.Th>
              <Table.Th>Average Yield (Kg/Ha)</Table.Th>
              <Table.Th>Average Cultivation Area (Ha)</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{items}</Table.Tbody>
        </Table>
      <Pagination 
        total={dataChunk.length} 
        value={activePage} 
        onChange={setPage} 
        position="center"
      />
    </Stack>
  );
};

export default CropAveragesTable;