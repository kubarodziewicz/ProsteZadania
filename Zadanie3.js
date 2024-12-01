class Student {
    constructor(name, lastName, grades) {
        this.name = name
        this.lastName = lastName
        this.grades = grades
    }

    addGrade(grade) {
        this.grades = [...this.grades, grade]
    }
    
    getAverage() {
        const gradeAverage = (this.grades.reduce((acc, grade) => (acc + grade))/this.grades.length).toFixed(2)
        return console.log(gradeAverage)
    }
}

const student1 = new Student('John', 'Ligme', [5,5,4,3,6])
const student2 = new Student('Jack', 'Pie', [1,3,2,5,5])
const student3 = new Student('Bendo', 'Ver',[3,4,2,5,4])

student1.addGrade(3)
student1.addGrade(7)
console.log(student1.grades)

student1.getAverage()