// let field = document.querySelector('.field')
// let btnAdd = document.querySelector('.add')
// let btnRemove = document.querySelector('.remove')
// let count = 0

// btnAdd.onclick = () => {
//     count +=1
//     if (count < 10) {
//         newCircle = document.createElement('div')
//         newCircle.classList.add('circle')
//         field.appendChild(newCircle)
//     }
//     else {
//         alert('Error')
//     }
 

// }

// btnRemove.onclick = () => {
//     count -=1
//     if (count > -1){
//         let elem = document.querySelector('.circle')
//         elem.remove()
//     }
//     else {
//         alert('Error')
//     }
// } 

let btnCreate = document.querySelector('.btn-create')
let btnDelete = document.querySelector('.btn-delete')

let count = 0

btnCreate.onclick = () => {
    count +=1
    console.log(count)

    let card = document.createElement('div')
    let image = document.createElement('div')
    let temp = document.createElement('p')
    let picture = document.createElement('img')

    let classImg = document.querySelector('.weather').value
    let classTemp = document.querySelector('.temp').value

    card.classList.add('card' + count)
    image.classList.add('image' + count)
    temp.classList.add('temp')
    temp.innerHTML = classTemp + 'C'

    if (count < 8) {
        switch (classImg){
            case 'sunny': 
                document.querySelector('.cards').appendChild(card)
                document.querySelector('.card' + count).appendChild(image)
                document.querySelector('.card' + count).appendChild(temp)
                document.querySelector('.image' + count).appendChild(picture)
                picture.setAttribute('src', './images/sunny.png')
                break
                case 'cloudy': 
                document.querySelector('.cards').appendChild(card)
                document.querySelector('.card' + count).appendChild(image)
                document.querySelector('.card' + count).appendChild(temp)
                document.querySelector('.image' + count).appendChild(picture)
                picture.setAttribute('src', './images/cloudy.png')
                break
                
                
                case 'rainy': 
                document.querySelector('.cards').appendChild(card)
                document.querySelector('.card' + count).appendChild(image)
                document.querySelector('.card' + count).appendChild(temp)
                document.querySelector('.image' + count).appendChild(picture)
                picture.setAttribute('src', './images/rainy.png')
                break
                case 'windy': 
                document.querySelector('.cards').appendChild(card)
                document.querySelector('.card' + count).appendChild(image)
                document.querySelector('.card' + count).appendChild(temp)
                document.querySelector('.image' + count).appendChild(picture)
                picture.setAttribute('src', './images/windy.png')
                break
                case 'stormy': 
                document.querySelector('.cards').appendChild(card)
                document.querySelector('.card' + count).appendChild(image)
                document.querySelector('.card' + count).appendChild(temp)
                document.querySelector('.image' + count).appendChild(picture)
                picture.setAttribute('src', './images/stormy.png')
                break
            default:
                break
        }
    }else {
        alert('You can only remove card!')
    }

}

btnDelete.onclick = () => {
    count -=1
    console.log(count)
    if (count > 0) {
        let elem = document.querySelector(`.card${count}`)
        elem.remove()
    }else {
        alert('You can only add card!')
    }

}