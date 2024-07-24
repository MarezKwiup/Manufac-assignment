import React from 'react';
import { Container, Title, Space } from '@mantine/core';
import YearlyProductionTable from './components/YearlyProductionTable';
import CropAveragesTable from './components/CropAveragesTable';

const App: React.FC = () => {
  return (
    <Container size="xl" p="md">
      <Title order={1} align="center" mb="xl">Indian Agriculture Data Analysis</Title>
      <YearlyProductionTable />
      <Space h="xl" />
      <CropAveragesTable />
    </Container>
  );
};

export default App;
