
const accesskey = "5SHV9jr3BUMjSO8au009ilHvGjGvd62O3q2YMIeMlr4";
const searchforms = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchButton = document.getElementById("show-more-btn");

// const url = 'https://api.unsplash.com/search/collections?client_id=zd_qFntLJFtyJcCe2JjEaoAJifQZEkKWVyeaQT8SNys&page=1&query=office'
let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?client_id=${accesskey}&page=${page}&query=${keyword}&per_page=12`;
    //const url2 = 'https://api.unsplash.com/search/photos?client_id=zd_qFntLJFtyJcCe2JjEaoAJifQZEkKWVyeaQT8SNys&page=1&query=animal'
    
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
     if(page === 1){
         searchResult.innerHTML = "";
    }
    const result = data.results;
    result.map( (item) =>{
       
        const image = document.createElement("img");
        image.src = item.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = item.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image); 
        searchResult.appendChild(imageLink);

    });
    searchButton.style.display = "block";
}
searchforms.addEventListener("submit", e => {
    e.preventDefault();
    page =1;
    searchImages();
});

searchButton.addEventListener("click", ()=>{
    page++;
    searchImages();
})
