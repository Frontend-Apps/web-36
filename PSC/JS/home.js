import loadNavbar from "../JS/navbar.js";

loadNavbar();
let courses;
function fetchCourses() {
  fetch("https://ecommerce-8f940-default-rtdb.firebaseio.com/courses.json")
    .then((res) => res.json())
    .then((data) => {
      courses = Object.entries(data);
      document.querySelector("#total>span").textContent = courses.length;
      displayCourses(courses);
    });
}

fetchCourses();

function displayCourses(data) {
  console.log(data);
  document.querySelector("#cont").innerHTML = "";
  data.map(function (elem) {
    let [id, details] = elem;
    let {
      bestseller,
      instructor,
      lectures,
      level,
      price,
      rating,
      reviews,
      title,
      total_hours,
    } = details;
    document.querySelector("#cont").innerHTML += `
        <div class="course-card">
      <div class="course-header">
        <h2>${title}</h2>
      </div>
      <div class="course-body">
        <p><strong>Instructor:</strong> ${instructor}</p>
        <p><strong>Total Lectures:</strong> ${lectures}</p>
        <p><strong>Level:</strong> ${level}</p>
        <p class="price"><strong>Price:</strong> ₹${price}</p>
        <p><strong>Total Hours:</strong> ${total_hours} hours</p>
        <span class="best">${
          bestseller ? "Bestseller" : "Average Seller"
        }</span>
      </div>
      <div class="course-footer">
        <span class="rating">★ ${rating}</span>
        <span class="reviews">${reviews} reviews</span>
      </div>
      <div id="enroll">
            <button >Add to cart</button>
      </div>
    </div>
    `;
  });
}

document.querySelector("#levelFilter").addEventListener("change", filterLevel);

function filterLevel() {
  let selected = document.querySelector("#levelFilter").value;
  console.log(selected);

  let filteredCourses = courses.filter(function (elem) {
    let [id, details] = elem;
    return details.level === selected;
  });
  console.log(filteredCourses);
  document.querySelector("#total>span").textContent = filteredCourses.length;
  displayCourses(filteredCourses);
}

document.querySelector("#sortByPrice").addEventListener("change", sorting);

function sorting() {
  let selected = document.querySelector("#sortByPrice").value;

  if (selected == "L2H") {
    //ascending
    courses.sort(function (a, b) {
      return a[1].price - b[1].price;
    });
  } else if (selected == "H2L") {
    //descending
    courses.sort(function (a, b) {
      return b[1].price - a[1].price;
    });
  }
  displayCourses(courses);
}


// creating and displaying data
// filtering and sorting
// deleting
