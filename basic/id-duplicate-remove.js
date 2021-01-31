let user = [
    {id: 1, name: "조현진", age: 29, job: "frontEndDeveloper"},
    {id: 2, name: "냠냠", age: 24, job: "backEndDeveloper"},
    {id: 1, name: "???", age: 29, job: ""},
    {id: 3, name: "he", age: 14, job: "ios"}
]



// lodash
_.uniqueId(user, "id");


// reduce
const result1 = user.reduce(function(acc, current) {
    if (acc.findIndex(({ id }) => id === current.id) === -1) {
        acc.push(current);
    }
    return acc;
}, []);

console.log(result1);
// filter
const result2 = user.filter((item, i) => {
    return (
        user.findIndex((item2, j) => {return item.id === item2.id}) === i
    )
})

 console.log(result2);

// new Set





