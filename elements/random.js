async function getData(url){
    let res = await fetch(url)
    let data = await res.json()
    return data
}
function appenddata(data, container){
    container.innerHTML = null;
    data.forEach(({strMealThumb, strMeal, strArea, strCategory, strInstructions, strYoutube})=>{
        let div = document.createElement('div')
        div.style.width = "800px"
        let p = document.createElement('p')
        p.innerText = strMeal
        let p1 = document.createElement('p')
        p1.innerText = strArea
        let p2 = document.createElement('p')
        p2.innerText = strCategory
        let p3 = document.createElement('p')
        p3.innerText = strInstructions
        let p4 = document.createElement('p')
        p4.innerText = strYoutube
        let img = document.createElement('img')
        img.src = strMealThumb
        img.style.width = "250px"
        img.style.height = "200px"
        div.append(img, p, p1, p2, p3, p4)
        container.append(div)
    })
}

export {getData, appenddata}