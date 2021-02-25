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
for (var i = 0; i < list.length; i++) {
    let newList = document.createElement("li");
    newList.setAttribute("status", list[i].class)
    newList.setAttribute("draggable", true)
    newList.setAttribute("ondragstart", "drag(event)")
    newList.innerText = list[i].list
    newList.id = i
    document.getElementById(list[i].class).appendChild(newList)
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
    if (ev.target.id === "toDoBox" || ev.target.id === "doneBox" || ev.target.id === "doingBox") {
        let data = ev.dataTransfer.getData("text");
        let li = document.getElementById(data)
        li.setAttribute("status", ev.target.id)
        ev.target.appendChild(li);
        console.log(list[li.id])
        list[li.id].class = ev.target.id
        console.log(list[li.id])
    } else {
        alert("Drag item di bagian paling bawah list item yang tersedia ")
    }

}