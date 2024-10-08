// Toggle theme between light and dark
function toggleTheme() {
    var bodyElm = document.getElementsByTagName("body")[0];
    var bodyClass = bodyElm.getAttribute("class");

    if (bodyClass === "light") {
        bodyElm.setAttribute("class", "dark");
    } else {
        bodyElm.setAttribute("class", "light");
    }
}

// Function to calculate total marks, percentage, and grade
function calculateGrade(marks) {
    var total = marks.reduce((sum, mark) => sum + mark, 0);
    var percentage = (total / (marks.length * 100)) * 100;
    var grade;

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    return { total, percentage, grade };
}

// Function to collect user input and display data
function getUserData() {
    var userName = prompt("Enter your name:");
    var userID = prompt("Enter your ID:");
    var department = prompt("Enter your department:");

    var subjects = ['Programming Fundamentals', 'ICT', 'Calculus', 'PST', 'English'];
    var marks = [];
    for (let i = 0; i < subjects.length; i++) {
        let subjectMark = parseInt(prompt(`Enter marks for ${subjects[i]}:`), 10);
        marks.push(subjectMark);
    }

    let { total, percentage, grade } = calculateGrade(marks);

    displayResults(userName, userID, department, marks, total, percentage, grade, subjects);
}

// Function to display results in the table
function displayResults(userName, userID, department, marks, total, percentage, grade, subjects) {
    var tableElm = document.getElementById("marksTable");
    tableElm.innerHTML = ''; // Clear any existing table rows

    // Table headers
    let headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>Name</th>
        <th>ID</th>
        <th>Department</th>
        <th>Programming Fundamentals</th>
        <th>ICT</th>
        <th>Calculus</th>
        <th>PST</th>
        <th>English</th>
        <th>Total Marks</th>
        <th>Percentage</th>
        <th>Grade</th>
    `;
    tableElm.appendChild(headerRow);

    // Table row for user data
    let dataRow = document.createElement("tr");
    dataRow.innerHTML = `
        <td>${userName}</td>
        <td>${userID}</td>
        <td>${department}</td>
        <td>${marks[0]}</td>
        <td>${marks[1]}</td>
        <td>${marks[2]}</td>
        <td>${marks[3]}</td>
        <td>${marks[4]}</td>
        <td>${total}</td>
        <td>${percentage.toFixed(2)}%</td>
        <td>${grade}</td>
    `;
    tableElm.appendChild(dataRow);
}

// Call the function to prompt user for data and display it
getUserData();
