function generateRandomMarks() {
  // Helper function to generate random marks between 60 and 100
  return Math.floor(Math.random() * 41) + 60;
}

const data = [
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
export default data;
// console.log(data);
