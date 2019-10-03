d3.json("/population").then((data) => {
    // console.log(data)
    var current_pop = data[0].population;
    // console.log(current_pop)
    document.getElementById("insertPop").innerHTML = current_pop;
})