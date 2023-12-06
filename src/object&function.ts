// Object and literal

const users: {
  readonly company: string; //comapny literal || specified value not changable
  name: string;
  owner: string;
  age: number;
  wife?: string; //optional,
  isOwner: boolean;
  phone: number;
} = {
  company: "foinnir put ",
  name: "kuddus mia",
  owner: "khoirati saheb",
  age: 32,
  wife: "katrina kaif",
  isOwner: true,
  phone: 128576839,
};

// function and arrow function in typescript
//second parameter is default parameter
function sumNumber(num1: number, num2: number = 10): number {
  return num1 + num2;
}
sumNumber(2, 3);
// arrow function
const ageCalcluter = (firstdate: number, secodndate: number = 20): number =>
  firstdate + secodndate;

// spread operators

const myfriends: string[] = ["fahim", "kabir", "aluzz"];
const newfriends: string[] = ["tiapakhi", "sakhcunni", "action jesmin"];
myfriends.push(...newfriends);

// rest parameters : making an arrow function who greet everyone
const greetings = (...friends): void => {
  friends.forEach((frnd) => {
    console.log(`Hey ${frnd}`);
  });
};
greetings("fahim");
