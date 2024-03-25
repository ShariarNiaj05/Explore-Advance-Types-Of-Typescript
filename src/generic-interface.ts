// Generic Interface

/* interface CrushInterFace<T> {
  name: string;
  husband: T;
}

const crush1: CrushInterFace<boolean> = { name: "Kate Winslet", husband: true };
const crush2: CrushInterFace<string> = {  name: "Kate Winslet", husband: "Jack",}; */

interface CrushInterFace<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush1: CrushInterFace<boolean, string> = { name: "Kate Winslet", husband: true, wife: "Rose" };

const crush2: CrushInterFace<string> = {
  name: "Kate Winslet",
  husband: "Jack",
};









/* type GenericTuple<X, Y> = [X, Y];


interface relationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<relationWithSalaryInterface, string> = [
  {
    name: "Niaj",
    salary: 10000000,
  },
  "Kate Winslet",
]; */
