
class trainBox {
 person: number;
 next: trainBox | null;
 constructor(person: number) {

 this.person = person;
 this.next = null;
 console.log(`Created box with ${person} person(s)`);
 
 }
}

let trainOneBoxOne = new trainBox(10);
let trainOneBoxTwo = new trainBox(20);
trainOneBoxOne.next = trainOneBoxTwo; // 10 → 20

let trainTwoBoxOne = new trainBox(30);
let trainTwoBoxTwo = new trainBox(40);
trainTwoBoxOne.next = trainTwoBoxTwo; // 30 → 40


let printTrain = (trainOne: trainBox | null, trainTwo: trainBox | null) => {
 let head: trainBox | null = null;
 let tail: trainBox | null = null;
 let count = 1;

 while (trainOne !== null && trainTwo !== null) {
 
 const valueOne = trainOne.person;
 const valueTwo = trainTwo.person;
 const totalPeople = valueOne + valueTwo;


 console.log(`\n[Iteration ${count}]`);
 console.log(`Train One box: ${valueOne}, Train Two box: ${valueTwo}`);
 console.log(`Total: ${totalPeople}`);
 const newBox = new trainBox(totalPeople);

 if (head === null) {
    head = newBox;
    tail = newBox;
 } else {
    tail!.next = newBox;
    tail = tail!.next;
 }
    trainOne = trainOne.next;
    trainTwo = trainTwo.next;
    count++;
 }

 console.log("\n🚆 Final Train Three:");
 let current = head;
 let i = 1;
 while (current !== null) {
    console.log(`Box ${i}: ${current.person} person(s)`);
    current = current.next;
    i++;
  }
};




