import { productNames } from './productNames.js'
console.log('text imported')
const productlist = document.getElementById('product-list')

document.getElementById('find').addEventListener('click', () => {
    productlist.innerHTML = ""
    let input = document.getElementById('searchbar').value
    let numOfResults = 0
    let index = 0
    if (isNaN(input)) {
        input = input.toLowerCase()
        for (let i = 0; i < productNames.length; i++) {

            if (productNames[i][1].toLowerCase().includes(input)) {
                console.log(productNames[i])
                numOfResults++
            }
            if (numOfResults > 5) break
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
    const product = document.createElement('item-card')
    const image = document.createElement('product-image')
    product.innerHTML = `<span style="color:red">${productNames[index][0]}</span> - ${productNames[index][1]}`
    product.appendChild(image)
    productlist.appendChild(product)
    const images = document.getElementsByTagName('product-image')
    let background = `url("./bulkbarnimages/(${productNames[index][0]}) ${productNames[index][1]}.jpg")`
    console.log(background)
    images[0].style.backgroundImage = background
    
})