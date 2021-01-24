// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(thing = 'go to the office') {
    return `This Monday, I will ${thing}.`
}
function wrapAdjective(flair ='*'){
    return function (param = 'special') { 
        return `You are ${flair}${param}${flair}!`
    }
}

let Calculator = {
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a/b
    }
}   

function actionApplyer(starter, arr) {
    let a = starter 
    arr.forEach(f => {
        a = f(a)
    })
    return a
}
