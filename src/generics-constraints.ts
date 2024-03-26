const addMeInMyCrushMind = <
  T extends { name: string; age: number; salary: number }
>(
  myInfo: T
) => {
  const crush = "Kate Winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

type DetailedInfoType = {
  name: string;
  age: number;
  salary: number;
};

const detailedInfo: DetailedInfoType = {
  name: "My Name",
  age: 100,
  salary: 1000000,
};

const updatedResult = addMeInMyCrushMind<DetailedInfoType>(myInfo);
