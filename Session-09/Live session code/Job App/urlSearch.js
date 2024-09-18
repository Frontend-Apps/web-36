let queryString = "?id=2";

let urlParams = new URLSearchParams(queryString)
console.log(urlParams.get("id")) // {id=>2}

console.log(urlParams.get('id'))
