import agricultureData from '../data/agriculture_data.json';


//Define the structure of each crop data entry
interface CropData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string | number;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number;
  "Area Under Cultivation (UOM:Ha(Hectares))": string | number;
}

//Extract year from string
const parseYear = (yearString: string): number => {
  const match = yearString.match(/\d{4}/);
  return match ? parseInt(match[0]) : 0;
};

//Convert string or number to number, treating empty string as 0
const parseNumber = (value: string | number): number => {
  if (typeof value === 'number') return value;
  if (value === "") return 0;
  return parseFloat(value);
};

//Process data to get max and min crop for the year
export const processYearlyData = (): { year: number; maxCrop: string; minCrop: string }[] => {
  const yearlyData: { [year: number]: { [crop: string]: number } } = {};

  agricultureData.forEach((entry: CropData) => {
    const year = parseYear(entry.Year);
    const production = parseNumber(entry["Crop Production (UOM:t(Tonnes))"]);

    if (!yearlyData[year]) {
      yearlyData[year] = {};
    }
    yearlyData[year][entry["Crop Name"]] = production;
  });

  return Object.entries(yearlyData).map(([year, crops]) => {
    const sortedCrops = Object.entries(crops).sort((a, b) => b[1] - a[1]);
    return {
      year: parseInt(year),
      maxCrop: sortedCrops[0][0],
      minCrop: sortedCrops[sortedCrops.length - 1][0],
    };
  });
};

//Calculate average yield and area for each crop
export const processCropAverages = (): { crop: string; avgYield: number; avgArea: number }[] => {
  const cropData: { [crop: string]: { yields: number[]; areas: number[] } } = {};

  agricultureData.forEach((entry: CropData) => {
    const yield_ = parseNumber(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]);
    const area = parseNumber(entry["Area Under Cultivation (UOM:Ha(Hectares))"]);

    if (!cropData[entry["Crop Name"]]) {
      cropData[entry["Crop Name"]] = { yields: [], areas: [] };
    }
    cropData[entry["Crop Name"]].yields.push(yield_);
    cropData[entry["Crop Name"]].areas.push(area);
  });

  return Object.entries(cropData).map(([crop, data]) => ({
    crop,
    avgYield: Number((data.yields.reduce((a, b) => a + b, 0) / data.yields.length).toFixed(3)),
    avgArea: Number((data.areas.reduce((a, b) => a + b, 0) / data.areas.length).toFixed(3)),
  }));
};