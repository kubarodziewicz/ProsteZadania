class testAnalysis {
    calculateAverage() {
        const gradeAverage = (
            testAnalysis.testResults.reduce((acc, result) => acc + result.score, 0)/testAnalysis.testResults.length).toFixed(2)
        return console.log(`Average score: ${gradeAverage}`)
    }

    displayStudentResult(studentName) {
        const studentSearch = testAnalysis.testResults.find(result => result.name == studentName)
        return console.log(`Student: ${studentSearch.name}, Score: ${studentSearch.score}`)
    }

    findHighestScore() {
        const highestScoreStudent = Math.max(...testAnalysis.testResults.map(result => result.score))
        const student = testAnalysis.testResults.find(result => result.score === highestScoreStudent)
        return console.log(`highest score: ${student.name}, score: ${student.score}`)
    }
    findLowestScore() {
        const highestScoreStudent = Math.min(...testAnalysis.testResults.map(result => result.score))
        const student = testAnalysis.testResults.find(result => result.score === highestScoreStudent)
        return console.log(`lowest score: ${student.name}, score: ${student.score}`)
    }

    static testResults = [
        { name: 'John', score: 95 },
        { name: 'Alice', score: 88 },
        { name: 'Bob', score: 92 },
        { name: 'Charlie', score: 85 },
        { name: 'David', score: 98 },
        { name: 'Eve', score: 90 },
        { name: 'Frank', score: 87 },
        { name: 'Grace', score: 95 },
        { name: 'Harry', score: 89 },
        { name: 'Ivy', score: 92 }
    ]
}
const student1 = new testAnalysis()
student1.findHighestScore()