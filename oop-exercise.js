/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */

class Student {
  constructor (name, age,grades){
    this.name = name;
    this.age = age;
    this.grades = grades;
  }
  addGrade(grade) {
    if (grade > 0 || grade < 100) {
      console.log("Grade must be between 0 and 100.");
      return;
    } 
    his.grades.push(grade);
    console.log(`Added grade ${grade} for student ${this.name}.`);
  }
  calculateAverageGrade() {
    if (this.grades.length === 0) return 0;
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  }
    hasPassed (passingGrade) {
    return this.calculateAverageGrade() >= passingGrade;
    }
    getName() {
      return this.name;
    }
    getAge() {
      return this.age;
    }
}

class Course {
  constructor(title){
  this.title = title;
  this.students = [];
  }
  enrollStudent(student) {
    this.students.push(student);
    console.log(`Enrolled ${student.getName()} in ${this.title}.`);
  }
  listStudents() {
    console.log(`Students in ${this.title}:`);
    this.students.forEach((student) => {
      console.log(
        `- ${student.getName()}, Age: ${student.getAge()}, Average Grade: ${student.calculateAverageGrade()}`
      );
    });
  }
  calculateCourseAverage () {
    if (this.students.length === 0) return 0;
    const totalGrades = this.students.reduce(
      (acc, student) => acc + student.calculateAverageGrade(),
      0
    )
    return totalGrades / this.students.length;
  }
}
const htmlCourse = new Course("HTML", "CSS");
const student1 = new Student("Milad", 29, );
const student2 = new Student("John", 25,); 
htmlCourse.enrollStudent(student1);
htmlCourse.enrollStudent(student2);
student1.addGrade(90);
student1.addGrade(85);
student2.addGrade(95);
student2.addGrade(87);

htmlCourse.listStudents () 
  console.log(`The average grade for the course is ${htmlCourse.calculateCourseAverage()}`);
  



