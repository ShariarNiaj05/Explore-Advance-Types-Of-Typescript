let emni: any;

emni = "Next level web development";

(emni as string).length; //both are same
<string>emni.length; //both are same. But this format won't work in tsx format

const kgToGram = (param: string | Number): string | number | undefined => {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The COnverted result is: ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
};

const resultToBeNumber = kgToGram(5) as number;
const resultToBeNumber1 = <string>kgToGram(5);

const resultToBeString = kgToGram("7") as string;
const resultToBeString1 = <number>kgToGram("10");

type CustomErrorType = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}
