function fetchData() {
  var requestOptions = {
    method: "GET",
  };

  fetch(
    "https://ft-web-36-default-rtdb.firebaseio.com/users.json",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => displayUsers(data))
    .catch((error) => console.log("error", error));
}

fetchData();

function displayUsers(data) {
  document.querySelector("#userCards").innerHTML = "";
  let res = Object.entries(data);

  res.map(function (elem) {
    // console.log(elem);
    //let [userId, user] = elem;
    let userId = elem[0];
    let name = elem[1].name;
    let email = elem[1].email;

    document.querySelector("#userCards").innerHTML += `
        <div>
            <h2>${name}</h2>
            <p>${email}</p>
            <button id="delete" onclick="deleteUser('${userId}')">Delete</button>
            <button id="edit" onclick="editUser('${userId}','${name}')">Edit</button>
        </div>
    `;
  });
}

function deleteUser(id) {
  console.log(id);

  fetch(`https://ft-web-36-default-rtdb.firebaseio.com/users/${id}.json`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      alert("User has been deleted");
      fetchData();
    });
}

function editUser(id,name) {
  window.location.href = `edit.html?userID=${id}&name=${name}`;
}
