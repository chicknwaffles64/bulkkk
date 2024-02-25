import { productNames } from './productNames.js'
console.log('text imported')
const productlist = document.getElementById('product-list')

document.getElementById('find').addEventListener('click', () => {
    productlist.innerHTML = ""
    let input = document.getElementById('searchbar').value
    let numOfResults = 0
    let index = 0
    if (isNaN(input)) {
        let arrayInput = input.toLowerCase().split(" ")
        
        for (let a = 0; a < arrayInput.length; a++) {
            arrayInput[a] = arrayInput[a].charAt(0).toUpperCase() + arrayInput[a].slice(1);
        }

        for (let i = 0; i < productNames.length; i++) {
            if (numOfResults > 20) {break}
            for (let j = 0; j < arrayInput.length; j++) {
                if (!productNames[i][1].includes(arrayInput[j])) {
                    break
                }
                if (j == arrayInput.length - 1) {
                    index = i
                    const product = document.createElement('item-card')
                    const image = document.createElement('product-image')
                    product.innerHTML = `<span style="color:red">${productNames[index][0]}</span> - ${productNames[index][1]}`
                    product.appendChild(image)
                    productlist.appendChild(product)
                    const images = document.getElementsByTagName('product-image')
                    images[numOfResults].style.backgroundImage = `url("./bulkbarnimages/(${productNames[index][0]}) ${productNames[index][1]}.jpg")`
                    numOfResults++
                }
            }
        }
    }
    
    else {
        for (let i = 0; i < productNames.length; i++) {
            if (productNames[i][0] == input) {
                console.log(productNames[i][1])
                numOfResults++
                index = i
            }
        }
    }
    if (numOfResults == 0) {
        const product = document.createElement('item-card')
        product.innerHTML = `no item with the code ${input}`
        productlist.appendChild(product)
        return
    }
    else if (!isNaN(input)) {
    const product = document.createElement('item-card')
    const image = document.createElement('product-image')
    product.innerHTML = `<span style="color:red">${productNames[index][0]}</span> - ${productNames[index][1]}`
    product.appendChild(image)
    productlist.appendChild(product)
    const images = document.getElementsByTagName('product-image')
    images[0].style.backgroundImage = `url("./bulkbarnimages/(${productNames[index][0]}) ${productNames[index][1]}.jpg")`
    }
    
})
