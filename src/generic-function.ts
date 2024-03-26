// Arrow Function

// ---------------------Usual function

const createArray = (param: string): string[] => {
  return [param];
};

const result = createArray("this is param");

// ------------------------Generic type function

/**
 * The function can be passed as:
 * 1. string
 * 2. Number
 * 3. Boolean
 * 4. Array
 * 5. Object
 * 6. etc
 *
 * Finally it'll return the param wrapping in a array!
 *
 * * */

const createArray1 = <T>(param: T): T[] => {
  return [param];
};

const result1 = createArray1<string>("this is param");
const result2 = createArray1<number>(10);
const result3 = createArray1<boolean>(true);

const result4 = createArray1<{ name: string }>({ name: "Niaj" });

// Better version is below
type NameType = {
  name: string;
};

const result5 = createArray1<NameType>({ name: "Shariar" });

const crush = "Kate winslet";
const myInfo = {
  name: "Niaj",
  age: 20,
  salary: 100000,
};

// Spread operator
const newData = {
  crush,
  ...myInfo,
};


// Using Function
const myDetailsInfo = <T>(param: T) => {
  const newData = { ...param, crush };
  return newData;
};

const result6 = myDetailsInfo(myInfo);
