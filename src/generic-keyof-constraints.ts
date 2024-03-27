type PersonType = {
  name: string;
  age: number;
  address: string;
};

type NewType = "name" | "age" | "address"; //have done manually

type NewTypeUsingKeyOf = keyof PersonType;

const a: NewType = "age";
const b: NewTypeUsingKeyOf = "age";
// const b: NewTypeUsingKeyOf = "afdfdfge"; // not doable

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const property = getProperty({ name: "Mr. X", age: 100 }, "age");

// ({ name: "Mr.x", age: 100 }), "age"; // 100

/* const a = {
  name: "Mr X",
  age: 100,
};

a["age"]; */
