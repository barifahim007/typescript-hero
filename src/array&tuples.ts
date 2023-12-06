//Array  in type script
/* 
In javascript we used array a lot's of time. in typescript
it's same but diffrent test like type chacking, Explicitly 
type define and many more. 
let's have some examples: 
*/

const friends = ["fahim", "bari", "ehsanul"]; //in js
//string array
const newFriends: string[] = ["shohidul", "kazi", "asif"]; //in ts

//numbers array
const rollnumber: number[] = [2, 3, 4, 5, 6, 7];

//boolean array
const isAdmin: boolean[] = [true, false];

// any type array || mixed array

const asutrlia = [6, "world Champion", "travis Head", true, 2023];

// what is tupples why it used?
/* 
    Tupples is nothing but like a couple.
    see, we have an array and want to maintain strucuture 
    like first numbers , stirng and boolean . 
    we just command it maintin this serial and don't get outter values
    
*/

const coupples: [string, string] = ["fahim", "tiapakhi"];
const newCouples: [string, number, boolean] = ["fahim", 69, true];
