const arrayOfNumbers = [1, 2, 3];
const arrayOfString = arrayOfNumbers.map((number) => number.toString()); //[ '1', '2', '3' ]

// console.log(arrayOfString);

const obj = {
  name: "Shariar",
};

// console.log(obj.name || obj["name"]); //both are same

type AreaNumber = {
  height: number;
  width: number;
};

type AA = AreaNumber["height"]; // Lookup type
type B = keyof AreaNumber;

type AreaString = {
  height: string;
  width: string;
};

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

const rectangularArea: AreaReadOnly = {
  height: 10,
  width: 12,
};

// rectangularArea.width = 15 //Cannot assign to 'width' because it is a read-only property.

type Volume = {
  height: number;
  width: number;
  depth: number;
};
// mapped types
type Area<T> = {
  //   [key in "height" | "width"]: number;
    // [key in keyof Volume]: string;
    
  // dynamic type based on Volume
    //   [key in keyof Volume]: Volume[key];
    
    // to make it generic
    [key in keyof T] : T[key]
};
