// write a fuction to calculate the age of the person give the birth year

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}

var person = {
  name: "John",
  age: calculateAge(2003),
};

calculateAge(2003);
console.log(person.age);

// write a function to fetch data from api
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;

  console.log(data.name);
}

fetchData();
