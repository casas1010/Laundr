export const CITIES = [
  // { label: "Narnia", value: "Narnia" },
  { label: "Gainsville", value: "Gainsville" },
  { label: "Orlando", value: "Orlando" },
];
export const USERTYPES = [
  { label: "User", value: "User" },
  { label: "Washer", value: "Washer" },
  { label: "Driver", value: "Driver" },
];

export const CARDS = [
  { label: "Visa", value: "Visa" },
  { label: "Amex", value: "Amex" },
  { label: "Master Card", value: "Master Card" },
  { label: "Discover", value: "Discover" },
];
export const MONTHS = [
  { label: "1 January", value: "1 January" },
  { label: "2 February", value: "2 February" },
  { label: "3 March", value: "3 March" },
  { label: "4 April", value: "4 April" },
  { label: "5 May", value: "5 May" },
  { label: "6 June", value: "6 June" },
  { label: "7 July", value: "7 July" },
  { label: "8 August", value: "8 August" },
  { label: "9 September", value: "9 September" },
  { label: "10 October", value: "10 October" },
  { label: "11 November", value: "11 November" },
  { label: "12 December", value: "12 December" },
];

const year = new Date().getFullYear(); //To get the Current Year
export const YEARS = [
  { label: year.toString(), value: year.toString() },
  { label: (year + 1).toString(), value: (year + 1).toString() },
  { label: (year + 2).toString(), value: (year + 2).toString() },
  { label: (year + 3).toString(), value: (year + 3).toString() },
];

export const PLANS = [
  { planName: "Standard", price: 15, weight: 48 },
  { planName: "Plus", price: 20, weight: 66 },
  { planName: "Family", price: 25, weight: 84 },
  { planName: "Student", price: 10, weight: 48 },
];