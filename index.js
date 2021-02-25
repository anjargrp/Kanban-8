let toDo = [
    "Challenge 1",
    "Challenge 2"
]

let doing = [
    "Challenge 1",
    "Challenge 2"
]

let doneToDo = [
    "Challenge 1",
    "Challenge 2",
    "Challenge 1",
    "Challenge 2"
]

let toDoBox = document.getElementById("toDoBox")
for(var i = 0; i < toDo.length; i++){
    let newTodo = document.createElement("li");
    newTodo.innerText = toDo[i]
    toDoBox.appendChild(newTodo)
}

let doingBox = document.getElementById("doingBox")
for(var i = 0; i < doing.length; i++){
    let newDoing = document.createElement("li")
    newDoing.innerText = doing[i]
    doingBox.appendChild(newDoing)
}

let doneBox = document.getElementById("doneBox")
for(var i = 0; i < doneToDo.length; i++){
    let newDone = document.createElement("li")
    newDone.innerText = doneToDo[i]
    doneBox.appendChild(newDone)
}

