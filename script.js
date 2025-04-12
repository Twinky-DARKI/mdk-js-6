// ЗАДАЧА 1: Получение элементов DOM и вывод в консоль

const divElement = document.querySelector("div")
console.log("Элемент <div>:", divElement)

const ulElement = document.querySelector("ul")
console.log("Элемент <ul>:", ulElement)

const liElements = document.querySelectorAll("li")
if (liElements.length >= 2) {
  const secondLi = liElements[1]
  console.log("Второй <li> (Пит):", secondLi)
}

// ЗАДАЧА 2: Добавление класса "list-item" ко всем элементам <li>
liElements.forEach(li => {
  li.classList.add("list-item")
})

// ЗАДАЧА 3: Запрос числа у пользователя и вывод заданного количества блоков
let numberOfBlocks = prompt("Введите число блоков для отображения:")
numberOfBlocks = parseInt(numberOfBlocks)
if (!isNaN(numberOfBlocks) && numberOfBlocks > 0) {
  const container = document.getElementById("blocksContainer")
  container.innerHTML = ""
  for (let i = 0; i < numberOfBlocks; i++) {
    const block = document.createElement("div")
    block.classList.add("block")
    block.textContent = i + 1
    container.appendChild(block)
  }
} else {
  alert("Пожалуйста, введите корректное число.")
}

const form = document.createElement('form')

const nameInput = document.createElement('input')
nameInput.type = 'text'
nameInput.placeholder = 'Введите имя'
nameInput.name = 'name'

const email = document.createElement('input')
email.type = 'email'
email.placeholder = 'Введите email'
email.name = 'email'

const submit = document.createElement('input')
submit.type = 'submit'
submit.value = 'Отправить'

form.appendChild(nameInput)
form.appendChild(email)
form.appendChild(submit)

document.body.appendChild(form)