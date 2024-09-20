let page = 1;
async function loadComments() {
  document.querySelector("#load").style.display = "block";
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${page}&limit=10`
  );
  let comments = await res.json();
  console.log(comments);

  comments.map(function (elem) {
    document.querySelector("#gallery").innerHTML += `
        <div>
            <h2>${elem.email}</h2>
            <p>${elem.body}</p>
        </div>

    `;
  });
  document.querySelector("#load").computedStyleMap.display = "none";
}
loadComments();

window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrolled >= scrollable - 5) {
    page++;
    loadComments();
  }
});

// when user is at end of page - page++
// window

//IIFE - immediately invoked function expression
