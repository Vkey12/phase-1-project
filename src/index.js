let page = 1

let paginationEl=document.getElementById("pagination");

console.log(paginationEl);

let paginationBtns = paginationEl.getElementsByTagName("button");

paginationBtns[0].addEventListener("click", goBack);
paginationBtns[1].addEventListener("click", goForward);


function goBack() {
    console.log("Back");
    if (page = 1) {
        return;
    }
    page = page - 1;
    updatePage();
    getCreatures
}

function goForward() {
    console.log("Go Forward");
    page = page + 1;
    updatePage();
    getCreatures();
}

function updatePage() {
    let span = paginationEl.getElementsByTagName("span")[0];
    span.innerText = page;
}
function displayCreatures(data) {
    let divEl = document.getElementById("creatures");

    let creatures = "";
    for (let i = 0; i < data.length; i++) {
        let creature = data[i];
        creatures += `
        <div class="a-creature">
            <img src="${creature.image}"img/>
            <div>
                <button><span>${creature.name}</span></button>         
            </div>
        </div>
        `;
    }
    console.log(creatures);
    divEl.innerHTML = creatures;
}

function getCreatures() {
    fetch
        
        ('https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures' ,{
        method: "GET",
        contentType: "application/json",
    })
        .then((response) => response.json())
        .then(function (data) {
            console.log(data);
        });
}