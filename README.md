<img width="1259" alt="Screenshot 2024-07-24 at 5 48 23 PM" src="https://github.com/user-attachments/assets/ffb4a9e6-8919-42fb-8182-bded1f729ef1"># Indian Agriculture Data Analysis

This project analyzes Indian Agriculture data and displays the results in two tables using React, TypeScript, and Mantine.

## Setup and Running

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Run the development server:
   ```
   yarn dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
my-agriculture-analysis/
├── src/
│   ├── components/
│   │   ├── MaxMinProductionTable.tsx
│   │   └── AverageCropStatsTable.tsx
│   ├── utils/
│   │   └── dataProcessor.ts
│   ├── data/
│   │   └── agriculture_data.json
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Tables

### Yearly Production Data

This table shows the crops with maximum and minimum production for each year from 1950 to 2020.

<img width="1354" alt="Screenshot 2024-07-24 at 5 48 11 PM" src="https://github.com/user-attachments/assets/deb192e5-712e-4ba1-ae9b-72a20771ae86">


<img width="1100" alt="Screenshot 2024-07-24 at 5 54 59 PM" src="https://github.com/user-attachments/assets/01c296e3-69d8-4a24-8cf8-4a6610d6b419">


### Crop Averages (1950-2020)

This table displays the average yield and average cultivation area for each crop between 1950 and 2020.

[Insert screenshot of Crop Averages Table here]

## Data Processing

The data processing functions can be found in `src/utils/dataProcessing.ts`. These functions aggregate the raw data to produce the information displayed in the tables.

## Technologies Used

- React
- TypeScript
- Vite
- Mantine v7

No additional libraries or frameworks were used in this project.
