// fetch("https://66e6aa9517055714e58a3149.mockapi.io/jobs")
//   .then((res) => res.json())
//   .then((data) => displayCard(data))
//   .catch((err) => console.log(err));

//async await

let data;
let limit = 5;
let currentPage = 1;
let totalPages;
async function fetchJobs() {
  let sortBy = document.querySelector("#sort-salary").value;
  let filterBy = document.querySelector("#filter-fulltime").value;
  let apiURL = `https://66e6aa9517055714e58a3149.mockapi.io/jobs?page=${currentPage}&limit=${limit}`;

  if (sortBy === "asc" || sortBy === "desc") {
    apiURL = `https://66e6aa9517055714e58a3149.mockapi.io/jobs?sortBy=salary&order=${sortBy}`;
  }

  if (filterBy === "fulltime") {
    apiURL = "https://66e6aa9517055714e58a3149.mockapi.io/jobs?fullTime=true";
  } else if (filterBy === "parttime") {
    apiURL = "https://66e6aa9517055714e58a3149.mockapi.io/jobs?fullTime=false";
  }

  try {
    let res = await fetch(apiURL);
    data = await res.json();
    displayCard(data);
    updatePageNo();
    // totalPages = data.length / limit;
    // console.log(totalPages);
  } catch (error) {
    console.log(error);
  }
}

fetchJobs();

function displayCard(data) {
  document.querySelector("#job-list").innerHTML = "";

  data.map(function (elem, index) {
    let date = elem.createdAt.split("T");
    let [year, month, day] = date[0].split("-");
    let formattedDate = `${day}-${month}-${year}`;

    document.querySelector("#job-list").innerHTML += `
        <div class="job-card">
        <div class="date">${formattedDate}</div>
        <div class="job-content" style="background-color:${elem.color}">
          <h2> ${elem.id} - ${elem.company_name}</h2>
          <p>${elem.job}</p>
          <div class="job-tags">
            <span>${elem.fullTime ? "Full-Time" : "Part-Time"}</span>
            <span>${elem.country}</span>
            <span>Openings: ${elem.openings}</span>
          </div>
        </div>
        <div class="job-footer">
          <p>$ ${elem.salary}/hr</p>
          <a href="jobDetails.html?id=${elem.id}">Details</a>
        </div>
      </div>
    `;
  });
}

function changePage(direction) {
  if (direction === "next") {
    currentPage++;
  } else if (direction === "prev" && currentPage > 1) {
    currentPage--;
  }
  fetchJobs();
}

function updatePageNo() {
  document.querySelector("#pagination>span").textContent = currentPage;
}

//fetch
// display todos and jobs
// postman
// sorting - compare function , api
//filtering - api, without api

// pagination
// view details

//.sort((a,b)=>a.salary-b.salary)
