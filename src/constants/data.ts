import { userIcon, walletIcon } from "../constants/constants";

const items = [
  {
    id: 1,
    crystals: 0,
    price: 0,
    unitPrice: "0.00001",
    seller: "Test0",
  },
  {
    id: 2,
    crystals: 1,
    price: 1,
    unitPrice: "0.00001",
    seller: "Test1",
  },
  {
    id: 3,
    crystals: 2,
    price: 2,
    unitPrice: "0.00001",
    seller: "Test2",
  },
  {
    id: 4,
    crystals: 3,
    price: 3,
    unitPrice: "0.00001",
    seller: "Test3",
  },
];

const history: any[] = [
  {
    id: 1,
    user: "Test0",
    dateDay: "10 Mar",
    dateTime: "12:00",
    value: "+150",
    valueTon: "15",
  },
  {
    id: 2,
    user: "Test1",
    dateDay: "11 Mar",
    dateTime: "11:00",
    value: "-160",
    valueTon: "16",
  },
  {
    id: 3,
    user: "Test2",
    dateDay: "12 Mar",
    dateTime: "10:00",
    value: "+180",
    valueTon: "18",
  },
  {
    id: 4,
    user: "Test3",
    dateDay: "13 Mar",
    dateTime: "15:00",
    value: "-190",
    valueTon: "19",
  },
  {
    id: 5,
    user: "Test3",
    dateDay: "13 Mar",
    dateTime: "15:00",
    value: "-190",
    valueTon: "19",
  },
  {
    id: 6,
    user: "Test3",
    dateDay: "13 Mar",
    dateTime: "15:00",
    value: "-190",
    valueTon: "19",
  },
  {
    id: 7,
    user: "Test3",
    dateDay: "13 Mar",
    dateTime: "15:00",
    value: "-190",
    valueTon: "19",
  },
];

const historyTwo: any[] = [
  {
    id: 1,
    user: "Test0",
    dateDay: "10 Mar",
    dateTime: "12:00",
    value: "+150",
    valueTon: "15",
  },
  {
    id: 2,
    user: "Test1",
    dateDay: "11 Mar",
    dateTime: "11:00",
    value: "-160",
    valueTon: "16",
  },
  {
    id: 3,
    user: "Test2",
    dateDay: "12 Mar",
    dateTime: "10:00",
    value: "+180",
    valueTon: "18",
  },
  {
    id: 4,
    user: "Test0",
    dateDay: "10 Mar",
    dateTime: "12:00",
    value: "+150",
    valueTon: "15",
  },
  {
    id: 5,
    user: "Test1",
    dateDay: "11 Mar",
    dateTime: "11:00",
    value: "-160",
    valueTon: "16",
  },
  {
    id: 6,
    user: "Test2",
    dateDay: "12 Mar",
    dateTime: "10:00",
    value: "+180",
    valueTon: "18",
  },
  {
    id: 7,
    user: "Test2",
    dateDay: "12 Mar",
    dateTime: "10:00",
    value: "+180",
    valueTon: "18",
  },
  {
    id: 8,
    user: "Test2",
    dateDay: "12 Mar",
    dateTime: "10:00",
    value: "+180",
    valueTon: "18",
  },
];

const referralsInfoBlockItems = [
  {
    id: 1,
    icon: walletIcon,
    title: "Reward",
    info: "0 miners",
  },
  {
    id: 2,
    icon: userIcon,
    title: "Referrals",
    info: "0 people",
  },
];

export { historyTwo, history, items, referralsInfoBlockItems };
