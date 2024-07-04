const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');





// When clicking the button addItem this functions runs and the be
function addItem(e) {
    e.preventDefault();

    // idk what the .value thing does
    const newItem = itemInput.value   

    // Validate Input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }
    // Create List Item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem)); // idk what the .createTextNode thing does

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Add li to DOM 
    itemList.appendChild(li);

    checkUI();

    itemInput.value = '';

}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


// Remove
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')){
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            // when we delete items and there are no left
            checkUI();  
        }
        
       
    }
     
}

function clearItems(e) {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    checkUI();
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
            // clearBtn.style.display = 'none';
        }
    });

}



// DynamicUI
function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }
    else{
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}


// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);


// when page loads 
checkUI();
