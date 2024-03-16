/** @format */


function PrintDeveloperbyMap() {
  const developers = arr.filter(employee => employee.profession === "developer");
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });
  console.log(developers);
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
  const updatedArr = arr.filter(employee => employee.profession !== "admin");
  console.log(updatedArr);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "Michael", age: "22", profession: "designer" },
    { id: 5, name: "Emily", age: "25", profession: "analyst" },
    { id: 6, name: "David", age: "30", profession: "manager" }
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}

// Test the functions
PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();
