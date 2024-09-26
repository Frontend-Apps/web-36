//call, apply, bind

// const studentMethods = {
//   web36: function () {
//     console.log(
//       `I am from web36, and my name is ${this.firstName} ${this.lastName}.`
//     );
//   },
// };

function web36(roll, course) {
  console.log(
    `I am from web36, and my name is ${this.firstName} ${this.lastName} 
    and my roll number is ${roll}. I am enrolled in ${course}`
  );
}
const student1 = {
  firstName: "Arjun",
  lastName: "Sharma",
};

const student2 = {
  firstName: "Ashwani",
  lastName: "Masai",
};

//call the method web36 from student1
// student1.web36();
// student1.web36.call(student2);

//web36.call(student1, 101, "FSD");
//web36.apply(student2, [101, "Frontend"]);

//bind

let s1 = web36.bind(student1);
//s1(101, "FSD");
