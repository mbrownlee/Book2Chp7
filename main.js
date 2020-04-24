/*const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const createStudentComponent = (name, subject, info, passFail) => {
    return `
        <div class="student">
            <h1 class="${passFail}">${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
        </div>
    `
}
//Assigning the article with ID container2 to the variable studentContainer in order to be able to manipulate the article HTML from the JS
const studentContainer = document.querySelector("#container2")

let studentComponent = ""
//loop interating over the students array and creating an HTML string createStudentComponent
for (let i = 0; i < students.length; i++) {
    const student = students[i]
    
    if (student.score >= 60) {
        studentComponent = createStudentComponent(
            student.name,
            student.subject,
            student.info,
            "passing"
        )
    } else {
        studentComponent = createStudentComponent(
            student.name,
            student.subject,
            student.info,
            "failing"
        )
    }
//studentComponent string is then appended to article id container2 which is held in the studentContainer variable
    studentContainer.innerHTML+=studentComponent
}
*/



const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
//Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

//Then refactor your string interpolation code to use the object properties.

const createStudentComponent = (student) => {
    return `
        <div class="student">
            <h1 class="${student.passFail}">${student.name}</h1>
            <section>${student.subject}</section>
            <aside>${student.info}</aside>
        </div>
    `
}
//Assigning the article with ID container2 to the variable studentContainer in order to be able to manipulate the article HTML from the JS
const studentContainer = document.querySelector("#container2")


//loop interating over the students array and creating an HTML string createStudentComponent
for (let i = 0; i < students.length; i++) {
    const student = students[i]
    
    if (student.score >= 60) {
        student.passFail = "passing"
    } else {
        student.passFail = "failing"
    }
//studentComponent string is then appended to article id container2 which is held in the studentContainer variable
    studentContainer.innerHTML+= createStudentComponent(student)
}