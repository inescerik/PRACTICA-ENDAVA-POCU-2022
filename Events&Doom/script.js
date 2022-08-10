
const input = document.getElementById('input');
const list = document.getElementById('list');
const btn = document.getElementById('btn');

function handleInputChange(event) {
    input.value = input.value.toUpperCase();
}

// function handleAddButton() {
//     console.log('click');
// }

btn.addEventListener('click', function() {

    if (input.value) {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.append(li);
        const mySpan = document.createElement('span');
        mySpan.textContent = '         x';
        li.append(mySpan);
    } else {
        alert('Introduceti text in input');
    }
    input.value = '';
    const deleteLi = document.querySelectorAll('span');
    for(let i=0;i<deleteLi.length;i++){
        deleteLi[i].addEventListener('click', function(){
            deleteLi[i].parentElement.style.display='none';
        })
    }
});

// btn.removeEventListener('click', functiaX);

// btn.click();


