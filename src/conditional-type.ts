type a1 = null;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

//   ----------------------------------
type sheikh = {
  wife1: string;
  wife2: string;
};
type A = keyof sheikh; // "wife1" | "wife2"

type checkProperty<T, K> = K extends keyof sheikh ? true : false;

// K ("wife1") extends keyof sheikh ("wife1" | "wife2"). return true
// K ("wife3") extends keyof sheikh ("wife1" | "wife2"). return false. Because there is no wife3 property in sheikh.

type checkWife1 = checkProperty<sheikh, "wife1">; // true
type checkWife2 = checkProperty<sheikh, "wife2">; // true
type checkWife3 = checkProperty<sheikh, "wife3">; // false

// Different example

type Friends = "Monika" | "Rachel" | "Pheobe";

/* type RemoveFriend<T> = T extends "Rachel" ? never : T;
type CurrentFriend = RemoveFriend<Friends>; //CurrentFriend = "Monika" | "Pheobe" */

type RemoveFriend<T, K> = T extends K ? never : T;
type CurrentFriend = RemoveFriend<Friends, "Monika">; //CurrentFriend = "Rachel" | "Pheobe"
