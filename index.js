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


show(list)

function reset() {
    document.getElementById("toDoBox").innerHTML = ""
    document.getElementById("doingBox").innerHTML = ""
    document.getElementById("doneBox").innerHTML = ""
}

document.getElementById("addToDo").addEventListener("click", add)
document.getElementById("addDoing").addEventListener("click", add)
document.getElementById("addDone").addEventListener("click", add)

function add(event) {
    event.preventDefault()
    let listAdd = prompt("Please Input Your task")
    if (event.srcElement.id === "addToDo" && listAdd.length > 0) {
        list.push({ list: listAdd, class: "toDoBox" })
    } else if (event.srcElement.id === "addDoing" && listAdd.length > 0) {
        list.push({ list: listAdd, class: "doingBox" })
    } else if (event.srcElement.id === "addDone" && listAdd.length > 0) {
        list.push({ list: listAdd, class: "doneBox" })
    }
    reset()
    show(list)
}

function show(list) {
    for (var i = 0; i < list.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("status", list[i].class)
        div.setAttribute("draggable", true)
        div.setAttribute("ondragstart", "drag(event)")
        div.id = i

        let editButton = document.createElement('button')
        editButton.innerText = 'Edit'
        editButton.setAttribute('type', 'submit')
        editButton.setAttribute('value', i)
        editButton.classList.add("update-btn")
        editButton.addEventListener("click", updateBtn)

        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        deleteButton.setAttribute('type', 'submit')
        deleteButton.setAttribute('value', i)
        deleteButton.classList.add("delete-btn")
        deleteButton.addEventListener("click", deleteBtn)

        let newList = document.createElement("li");
        newList.innerText = list[i].list
        newList.id = i

        div.append(newList)
        div.append(editButton)
        div.append(deleteButton)

        document.getElementById(list[i].class).appendChild(div)
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    // console.log(ev.target)
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    console.log(ev.target.id)
    if (ev.target.id === "toDoBox" || ev.target.id === "doneBox" || ev.target.id === "doingBox") {
        let data = ev.dataTransfer.getData("text");
        let li = document.getElementById(data)
        li.setAttribute("status", ev.target.id)
        ev.target.appendChild(li);
        // console.log(list[li.id])
        list[li.id].class = ev.target.id
        // console.log(list[li.id])
    } else {
        alert("Drag the item to the available workspace")
    }

}

function updateBtn(ev) {
    ev.preventDefault()
    let index = ev.target.value
    let value = prompt("Input your change here", list[index].list)
    console.log(value)
    if (value.length > 0) {
        list[index].list = value
    }
    reset()
    show(list)

}

function deleteBtn(ev) {
    let index = ev.target.value
    list.splice(index, 1)
    reset()
    show(list)
}