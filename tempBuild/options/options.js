const mainDiv = document.createElement('div')
const input = document.createElement('input')
mainDiv.append(input)
const main = document.querySelector('#container')

if(main){
    main.append(mainDiv)
}