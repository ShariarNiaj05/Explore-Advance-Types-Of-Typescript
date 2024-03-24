// type alias mostly used to the type of primitive data
type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
  role: string;
};

// interface mostly used to the type of Object
interface IUser {
  name: string;
  age: number;
}
// Interface can be extended
interface IExtendUser extends IUser {
  role: string;
}

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 100,
};

const userWithInterface: IUser = {
  name: "Interface",
  age: 200,
};

const userWithExtendUser: IExtendUser = {
  name: "Extended User",
  age: 300,
  role: "Demo",
};

const user: extendedUser = {
  name: "Type user",
  age: 101,
  role: "Unknown",
};

/***
 * recommended way to write function in typeScript.
 * I can use either type alias or interface. But type alias is recommended!
 */

type addNumbersType = (num1: number, num2: number) => number;

const addNumber: addNumbersType = (num1, num2) => {
  return num1 + num2;
};

/***
 * recommended way to write array in typeScript.
 * I can use either type alias or interface. But type alias is recommended!
 * */

type rollNumbersType = number[];
interface iRollNumbers {
  [index: number]: number;
}
const rollNumbers: rollNumbersType | iRollNumbers = [1, 5, 7, 50, 54, 65]; // rollNumbersType | iRollNumbers both are same

// Interface is highly recommended of object type 