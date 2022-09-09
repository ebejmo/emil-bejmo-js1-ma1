const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// question 1
const cat = {
  name: "Karen",
  age: 2,
  color: "orange",
  complain: function () {
    console.log("Meow!");
  },
};

// cat.complain();

// question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3
heading.style.fontSize = "2em";

// question 4
heading.classList.add("subheading");
// and/or
// heading.className = "subheading";

// question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.style.backgroundColor = "yellow";
resultsContainer.innerHTML = `<p>New paragraph</p>`;

// question 7
function namesInConsole(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

namesInConsole(cats);

// question 8
function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let catAge = "Unknown age";

    if (cats[i].age) {
      catAge = cats[i].age;
    }

    html += `<div>
                <h5>${cats[i].name}</h5>
                <p>Age: ${catAge}</p>
            </div>`;
  }
  return html;
}

const catHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = catHtml;
