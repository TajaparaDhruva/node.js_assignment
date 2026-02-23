const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());


const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];

// get all students info
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// find topper students
app.get("/students/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  const topper = students.reduce((max, student) => {
    return student.cgpa > max.cgpa ? student : max;
  });

  res.status(200).json(topper);
});

//find adverage of cgpa
app.get("/students/average", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  const totalCgpa = students.reduce((sum, student) => sum + student.cgpa, 0);
  const avg = totalCgpa / students.length;

  res.status(200).json({ averageCgpa: avg });
});


//find total number of students
app.get("/students/count",(req,res)=>{
  
  const totalStudents = students.length

  res.status(200).json({totalStudents : totalStudents});
});

// find students by id
app.get("/students/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = students.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// find students by branch name
app.get("/students/Branch/:name", (req, res) => {
  const studentname = req.params.name; 
  const user = students.filter(u => u.branch.toLowerCase().includes(studentname.toLowerCase()));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user); 
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
