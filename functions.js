const { data } = require("./data")

function popMore100Tsd() {

    let result;
    data.map((item) => {
        result = data.filter(pop => pop.population >= 100000)
    })
    return result
}

function popLess100Tsd() {
    let result;
    data.map((item) => {
        result = data.filter(pop => pop.population < 100000)
    })
    return result
}

module.exports = { popMore100Tsd, popLess100Tsd }