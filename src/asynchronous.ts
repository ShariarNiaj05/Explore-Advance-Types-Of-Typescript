//  Mocking

// 1.
const makePromiseString = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("There was a problem");
    }
  });
};

const getPromiseStringData = async (): Promise<string> => {
  const data = await makePromiseString();
  return data;
};

// 2.

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Error Happened");
    }
  });
};

const getPromiseBooleanData = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};

// 3.

type DataType = { name: "Niaj"; age: 100 };

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { name: "Niaj", age: 100 };
    if (data) {
      resolve(data);
    } else {
      reject("Error Happened");
    }
  });
};

const getPromiseObjectData = async (): Promise<object> => {
  const data = await makePromiseObject();
  return data;
};

// jason placeholder

interface IToDO {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<IToDO> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

const getToDoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};
getToDoData();
