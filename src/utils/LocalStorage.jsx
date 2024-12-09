/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const employees = [
  {
    id: 1,
    firstName: "John",
    email: "e@e.com",
    password: "123",
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Task 1", taskDesc: "Active task 1", taskDate: "2024-12-01", category: "Work" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Task 2", taskDesc: "Active task 2", taskDate: "2024-12-02", category: "Work" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 3", taskDesc: "New task 1", taskDate: "2024-12-03", category: "Analysis" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Task 4", taskDesc: "Completed task 1", taskDate: "2024-12-04", category: "Review" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Task 5", taskDesc: "Completed task 2", taskDate: "2024-12-05", category: "Documentation" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Task 6", taskDesc: "Completed task 3", taskDate: "2024-12-06", category: "Planning" },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 3,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Alice",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 1", taskDesc: "New task 1", taskDate: "2024-12-01", category: "Development" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 2", taskDesc: "New task 2", taskDate: "2024-12-02", category: "Development" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 3", taskDesc: "New task 3", taskDate: "2024-12-03", category: "Development" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 4", taskDesc: "New task 4", taskDate: "2024-12-04", category: "Development" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Task 5", taskDesc: "Completed task 1", taskDate: "2024-12-05", category: "Documentation" },
    ],
    taskCounts: {
      active: 0,
      newTask: 4,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "David",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Task 1", taskDesc: "Active task 1", taskDate: "2024-12-01", category: "Technical" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 2", taskDesc: "New task 1", taskDate: "2024-12-02", category: "Technical" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Task 3", taskDesc: "Completed task 1", taskDate: "2024-12-03", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Task 4", taskDesc: "Failed task 1", taskDate: "2024-12-04", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Task 5", taskDesc: "Failed task 2", taskDate: "2024-12-05", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Task 6", taskDesc: "Failed task 3", taskDate: "2024-12-06", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Task 7", taskDesc: "Failed task 4", taskDate: "2024-12-07", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Task 8", taskDesc: "Failed task 5", taskDate: "2024-12-08", category: "Debugging" },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 5,
    },
  },
  {
    id: 4,
    firstName: "Emma",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Task 1", taskDesc: "Active task 1", taskDate: "2024-12-01", category: "Management" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 2", taskDesc: "New task 1", taskDate: "2024-12-02", category: "Management" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 3", taskDesc: "New task 2", taskDate: "2024-12-03", category: "Management" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 4", taskDesc: "New task 3", taskDate: "2024-12-04", category: "Management" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Task 5", taskDesc: "Completed task 1", taskDate: "2024-12-05", category: "Management" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Task 6", taskDesc: "Completed task 2", taskDate: "2024-12-06", category: "Management" },
    ],
    taskCounts: {
      active: 1,
      newTask: 3,
      completed: 2,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Sophia",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 1", taskDesc: "New task 1", taskDate: "2024-12-01", category: "Research" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 2", taskDesc: "New task 2", taskDate: "2024-12-02", category: "Research" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Task 3", taskDesc: "New task 3", taskDate: "2024-12-03", category: "Research" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Task 4", taskDesc: "Failed task 1", taskDate: "2024-12-04", category: "Research" },
    ],
    taskCounts: {
      active: 0,
      newTask: 3,
      completed: 0,
      failed: 1,
    },
  },
];




const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    firstName: "Zaigham",
  }
];
// localStorage.clear(  )

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))

}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return {employees, admin}
  }