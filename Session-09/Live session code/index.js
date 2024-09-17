//fetch - fetch data from an API

// //code from postman
// const requestOptions = {
//   method: "GET",
// };

// fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

//promises
// fetch("https://jsonplacelder.typicode.com/todos", {
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((out) => displayTable(out))
//   .catch((err) => console.log(err));

//async wait
async function fetchTodos() {
  try {
    let res = await fetch("https://jsonplholder.typicode.com/todos");
    let data = await res.json();
    displayTable(data);
  } catch (error) {
    console.log(error);
  }
}

fetchTodos();

function displayTable(out) {
  out.map(function (elem) {
    document.querySelector("tbody").innerHTML += `
    <tr>
            <td>${elem.id}</td>
            <td>${elem.title}</td>
            <td>${elem.completed}</td>
 </tr>
    `;
  });
}

//GET - Promises, async await
