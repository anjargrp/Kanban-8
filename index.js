let list = [
    {
        list: "Challenge 1",
        class: "toDoBox"
    },
    {
        list: "Challenge 2",
        class: "toDoBox"
    },
    {
        list: "Challenge 3",
        class: "doingBox"
    },
    {
        list: "Challenge 4",
        class: "doingBox"
    },
    {
        list: "Challenge 5",
        class: "toDoBox"
    },
    {
        list: "Challenge 6",
        class: "doneBox"
    },
    {
        list: "Challenge 7",
        class: "toDoBox"
    }
]


let toDoBox = document.getElementById("toDoBox")
for(var i = 0; i < list.length; i++){
    let newList = document.createElement("li");
    newList.innerText = list[i].list
    newList.id = i
    document.getElementById(list[i].class).appendChild(newList)
}
