```
<p class="dropdown">Привет :)</p>
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dropdown button
</button>
<div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>

<script>
    "use strict";

1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.`;

const elements = document.querySelectorAll(".dropdowm-item");
elements.forEach((element) => {
  element.classList.add("super-dropdown");
});

`2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.`;

const elements = document.querySelectorAll(".btn");
if (elements.classList.contains("btn-secondary"))
  elements.classList.remove("btn-secondary");
else elements.classList.add("btn-secondary");

`3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".`;

const elements = document.querySelectorAll(".menu");
elements.classList.remove("dropdown-menu");

`4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
 <a href="#">link</a>`;

document.querySelectorAll(".dropdown");
document.insertAdjacentHTML("afterEnd", '<a href="#">link</a>');

`5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".`;

const element = document.getElementById("dropdownMenuButton");
element.id = "superDropdown";

`6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.`;

const element = document.querySelector('[aria-labeledby="dropdownMenuButton"]');
element.dataset.dd = "3";

`7. Удалите атрибут type у элемента с классом "dropdown-toggle".`;

const element = document.querySelectorAll(".dropdown-toggle");
element.removeAttribute(type);
