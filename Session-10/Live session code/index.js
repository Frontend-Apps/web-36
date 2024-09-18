//pagination
let api = "https://jsonplaceholder.typicode.com/posts";

let items_per_page = 10;
let data = [];
let currentPage = 1;

fetch(api)
  .then((res) => res.json())
  .then((posts) => {
    data = posts;
    displayPosts(data);
    setupPagination();
  });

function displayPosts() {
  document.querySelector("#container").innerHTML = "";
  let start = (currentPage - 1) * items_per_page; // 2-1*10=10
  let end = start + items_per_page; // 10+10 = 20

  let slicedPosts = data.slice(start, end);
  console.log(slicedPosts);

  slicedPosts.map(function (elem) {
    document.querySelector("#container").innerHTML += `
        <div>
        <p>${elem.id}</p>
        <h2>${elem.title}</h2>
        <p>${elem.body}</p>
        </div>
        `;
  });
}

//pagination - 10 items per items => pages = 10 -> posts.length/no_of_items
// no_of_pages = posts.length/items_per_page

function setupPagination() {
  let pageCount = data.length / items_per_page;
  console.log(pageCount);
  for (let i = 1; i <= pageCount; i++) {
    let pages = document.createElement("li");
    pages.textContent = i;
    pages.addEventListener("click", function () {
      currentPage = i;
      displayPosts();
    });
    document.querySelector("#pagination").append(pages);
  }
}

// 1 - 0 to 10 , start = 1 and end = 10 , start = (currentPage-1)*items_per_page
// 2 - 11 to 20
// 3 - 21 to 30
