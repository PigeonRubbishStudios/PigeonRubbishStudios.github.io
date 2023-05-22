var json = $.getJSON({'url': "js/test.json", 'async': false});

json = JSON.parse(json.responseText);

var listDiv = document.getElementById('list-div');
var ul = document.getElementById('card-list');

for (let i = 0; i < Object.keys(json).length; i++) 
{
    var category = Object.keys(json)[i];
    var values = Object.values(json)[i];
    var li = document.createElement('li');
    li.className = "card-item";
    var a = document.createElement('a');
    a.className = "card-link";
    a.href = Object.values(values)[1];
    a.target = "_blank";
    var div = document.createElement('div');
    div.className = "card";
    div.innerHTML = Object.values(values)[0];
    // var p = document.createElement('p');
    // p.className = "category-name";
    // p.innerHTML = Object.values(values)[0];

    // a.appendChild(p);
    a.appendChild(div);
    li.appendChild(a);
    ul.appendChild(li);  
    listDiv.appendChild(ul); 
}


const input = document.querySelector("input");

function search_categories()
{
    let searchInput = document.getElementById('search').value;
    searchInput = searchInput.toLowerCase();
    let categories = document.getElementsByClassName("card-item");
    for (let i = 0; i < categories.length; i++) 
    {
        let categoryChildren = categories[i].children[0].children[0];
        console.log(categoryChildren);

        if (!categoryChildren.innerHTML.toLowerCase().includes(searchInput)) 
        {
            categories[i].style.display = "none";
        }
        else 
        {
            categories[i].style.display = "block";                 
        }
    }
    // console.log(categories[0].children[0].children);
    // var testSearch = document.querySelectorAll('li:not([id*= "' +  searchInput + '" i])')
    // var testSearch = $("p:not(:contains('" + searchInput + "'))");

    // for (let i = 0; i < testSearch.length; i++) 
    // {
    //     if (testSearch[i].style.display != "none") 
    //     {
    //         testSearch[i].style.display = "none";
    //     }
    //     else
    //     {
    //         testSearch[i].style.display = "block";
    //     }
        
    // }
    // console.log(searchInput);
    // console.log(testSearch);
}
// input.addEventListener("input", (event) => {
//     searchInput = input.value;
//     var testSearch = document.querySelectorAll('li:not([id*= "' +  searchInput + '" i])')
//     // var testSearch = $("p:not(:contains('" + searchInput + "'))");

//     for (let i = 0; i < testSearch.length; i++) 
//     {
//         if (testSearch[i].style.display != "none") 
//         {
//             testSearch[i].style.display = "none";
//         }
//         else
//         {
//             testSearch[i].style.display = "block";
//         }
        
//     }
//     console.log(searchInput);
//     console.log(testSearch);
// });

oninput = (event) => {};
// if (search.value()) {
    
// }
// Object.entries(json).forEach((category) => {
//     const [key, value] = category;
//     console.log(category);
//   });