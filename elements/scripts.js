async function getData(url){
    let res = await fetch(url)
    let data = await res.json()
    return data
}
function appenddata(data, container){
    container.innerHTML = null;
    data.forEach(({strMealThumb, strMeal})=>{
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerText = strMeal
        let img = document.createElement('img')
        img.src = strMealThumb
        img.style.width = "250px"
        img.style.height = "200px"
        div.append(img, p)
        container.append(div)
    })
}

export {getData, appenddata}
 function seme(inp){
        fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
export default seme