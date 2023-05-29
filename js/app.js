// top player header
document.getElementById('top-player').style.color = "rgba(0, 148, 93, 1)";

// single player background style
const elemnts = document.getElementsByClassName('single-player-background');
for (const elemnt of elemnts) {
    elemnt.style.backgroundColor = 'rgba(0, 169, 58, 1)';
}


// new item add
document.getElementById('add-item-button').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'New Item';
    const addItem = document.getElementById('item-add');
    addItem.appendChild(li);
})
