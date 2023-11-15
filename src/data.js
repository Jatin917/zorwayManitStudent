function generateRandomMarks() {
  // Helper function to generate random marks between 60 and 100
  return Math.floor(Math.random() * 41) + 60;
}

export const data = [
  {
    name: "Akhil",
    subjects: [
      {
        name: "Math",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "DCD",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "DBMS",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "PP",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "DSA",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "PPL",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      }
    ]
  },
  {
    name: "Abhishek",
    subjects: [
      {
        name: "Math",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "DCD",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "DBMS",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "PP",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "DSA",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "PPL",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      }
    ]
  },
  {
    name: "Jatin",
    subjects: [
      {
        name: "Math",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "DCD",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "DBMS",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "PP",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "DSA",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      },
      {
        name: "PPL",
        mini_test: generateRandomMarks(),
        mid_exam: generateRandomMarks(),
        end_exam: generateRandomMarks(),
        assignments_submitted: Math.floor(Math.random() * 5)
      }
    ]
  }
];

export const attendance = {
  "students": [
    {
      "id": 1,
      "name": "jatin",
      "attendance": {
        "Maths": 75,
        "DCD": 90,
        "PPL": 85,
        "DSA": 92,
        "DBMS": 78,
        "Professional Practice": 88
      }
    },
    {
      "id": 2,
      "name": "abhishek",
      "attendance": {
        "Maths": 80,
        "DCD": 85,
        "PPL": 75,
        "DSA": 88,
        "DBMS": 90,
        "Professional Practice": 82
      }
    },
    {
      "id": 3,
      "name": "akhil",
      "attendance": {
        "Maths": 95,
        "DCD": 88,
        "PPL": 92,
        "DSA": 85,
        "DBMS": 80,
        "Professional Practice": 0
      }
    }
  ]
}

// export default data,attendance;
// export default attendance;
// console.log(data);
