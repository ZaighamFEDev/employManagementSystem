/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const employees = [
  {
    id: 1,
    firstName: "John",
    email: "e@e.com",
    password: "123",
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Design New Homepage", taskDesc: "Create a responsive homepage for the new website", taskDate: "2024-12-01", category: "Work" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Fix Bug in Login Page", taskDesc: "Resolve issues related to user login on the website", taskDate: "2024-12-02", category: "Work" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Research SEO Best Practices", taskDesc: "Analyze SEO techniques for improving site rankings", taskDate: "2024-12-03", category: "Analysis" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Update User Profiles", taskDesc: "Completed updating user profile information in the admin panel", taskDate: "2024-12-04", category: "Review" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Prepare Weekly Report", taskDesc: "Summarize project progress and submit the weekly report", taskDate: "2024-12-05", category: "Documentation" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Plan Marketing Campaign", taskDesc: "Develop a strategy for the upcoming marketing campaign", taskDate: "2024-12-06", category: "Planning" },
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
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Develop New Feature", taskDesc: "Implement the new user feedback form feature on the site", taskDate: "2024-12-01", category: "Development" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Refactor Database Schema", taskDesc: "Optimize the database schema for better performance", taskDate: "2024-12-02", category: "Development" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Write API Documentation", taskDesc: "Document the new API endpoints for the back-end team", taskDate: "2024-12-03", category: "Development" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Code Review", taskDesc: "Review pull requests for code quality and consistency", taskDate: "2024-12-04", category: "Development" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Prepare User Guides", taskDesc: "Complete the user guides for the latest product release", taskDate: "2024-12-05", category: "Documentation" },
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
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Fix UI Bugs", taskDesc: "Address UI bugs that appear during testing", taskDate: "2024-12-01", category: "Technical" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Debug API Issues", taskDesc: "Fix API response issues that affect app functionality", taskDate: "2024-12-02", category: "Technical" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Patch Critical Security Bug", taskDesc: "Resolve the vulnerability in the user authentication flow", taskDate: "2024-12-03", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Fix Memory Leak", taskDesc: "Unable to fix memory leak causing app crashes", taskDate: "2024-12-04", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Optimize Codebase", taskDesc: "Failed to achieve desired optimization for the project", taskDate: "2024-12-05", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Resolve Performance Bottlenecks", taskDesc: "Failed to resolve the performance issues in the application", taskDate: "2024-12-06", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Fix Database Connection Issues", taskDesc: "Failed to resolve the intermittent database connectivity issues", taskDate: "2024-12-07", category: "Debugging" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Resolve Server Crashes", taskDesc: "Attempt to resolve server crash issue, but failed", taskDate: "2024-12-08", category: "Debugging" },
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
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Oversee Team Projects", taskDesc: "Manage and track progress of all ongoing team projects", taskDate: "2024-12-01", category: "Management" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Update Task Allocations", taskDesc: "Reassign tasks based on team availability", taskDate: "2024-12-02", category: "Management" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Conduct Team Meeting", taskDesc: "Hold a meeting to review project milestones and issues", taskDate: "2024-12-03", category: "Management" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Prepare Budget Report", taskDesc: "Compile the budget report for the next quarter", taskDate: "2024-12-04", category: "Management" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Organize Team Outing", taskDesc: "Successfully planned and organized a team-building event", taskDate: "2024-12-05", category: "Management" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Submit Performance Reviews", taskDesc: "Completed team member performance reviews for the year", taskDate: "2024-12-06", category: "Management" },
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
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Conduct Market Research", taskDesc: "Analyze market trends and customer preferences", taskDate: "2024-12-01", category: "Research" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Develop Research Survey", taskDesc: "Create a survey to gather feedback from potential customers", taskDate: "2024-12-02", category: "Research" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Prepare Research Report", taskDesc: "Compile findings into a comprehensive research report", taskDate: "2024-12-03", category: "Research" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Analyze Competitor Data", taskDesc: "Failed to analyze competitor data effectively due to lack of information", taskDate: "2024-12-04", category: "Research" },
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