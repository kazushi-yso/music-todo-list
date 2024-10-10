const soloList = []
const backingList = []
const riffList = []

window.addEventListener('DOMContentLoaded', () =>{
const add = document.querySelector('.item_3')
add.addEventListener('click',addItem)
})

const addItem = () =>{
    const v = document.querySelector('.item_2').value
    const itemInput =document.querySelector('.item_1').value
if (itemInput) {
    if (v === 'solo'){
        soloList.push(itemInput)
        updateList('.list_1',soloList)
    }
    else if (v === 'backing'){
        backingList.push(itemInput)
        updateList('.list_2',backingList)
    }
    else{
        riffList.push(itemInput)
        updateList('.list_3',riffList)
    }

    document.querySelector('.item_1').value = ''
    }
}

    function updateList(listClass, list) {
        const listElement = document.querySelector(listClass)
        listElement.innerHTML = ''

        list.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item
            listElement.appendChild(li)
        })
}
