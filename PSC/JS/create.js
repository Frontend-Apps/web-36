import navbar from "../JS/navbar.js";

navbar();

document.querySelector("#courseForm").addEventListener("submit", createCourse);

function createCourse() {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let instructor = document.querySelector("#instructor").value;
  let rating = document.querySelector("#rating").value;
  let reviews = document.querySelector("#reviews").value;
  let price = document.querySelector("#price").value;
  let totalHours = document.querySelector("#totalHours").value;
  let lectures = document.querySelector("#lectures").value;
  let level = document.querySelector("#level").value;
  let bestseller = document.querySelector("#bestseller").checked;

  let data = JSON.stringify({
    title: title,
    instructor: instructor,
    rating: rating,
    reviews: reviews,
    price: price,
    total_hours: totalHours,
    lectures: lectures,
    level: level,
    bestseller: bestseller,
  });

  let requestOptions = {
    method: "POST",
    body: data,
  };
  fetch(
    "https://ecommerce-8f940-default-rtdb.firebaseio.com/courses.json",
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => {
      alert("course created successfully");
      window.location.href = "home.html";
    })
    .catch((err) => console.log(err));
}
