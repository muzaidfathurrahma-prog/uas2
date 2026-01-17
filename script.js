const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")
const totalTask = document.getElementById("totalTask")
const doneTask = document.getElementById("doneTask")

let total = 0
let done = 0

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim()
    if (taskText === "") return

    const li = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = taskText

    const btnArea = document.createElement("div")
    const checkBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    checkBtn.textContent = "✓"
    deleteBtn.textContent = "✕"

    btnArea.appendChild(checkBtn)
    btnArea.appendChild(deleteBtn)

    li.appendChild(span)
    li.appendChild(btnArea)
    taskList.appendChild(li)

    total++
    updateCount()

    checkBtn.addEventListener("click", () => {
        if (!li.classList.contains("done")) {
            li.classList.add("done")
            done++
        } else {
            li.classList.remove("done")
            done--
        }
        updateCount()
    })

    deleteBtn.addEventListener("click", () => {
        if (li.classList.contains("done")) done--
        total--
        li.remove()
        updateCount()
    })

    taskInput.value = ""
})

function updateCount() {
    totalTask.textContent = total
    doneTask.textContent = done
}
