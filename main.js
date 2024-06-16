let addBtn = document.getElementById("add_btn");
addBtn.addEventListener("click", addChapter);

let parentList = document.getElementById("parentList");

// ------------------- Add function ----1--------------

function addChapter(e) {
  // check before adding either the empty message display or not if it is displayed then remove it
  if (parentList.children[0].className == "emptyMsg") {
    parentList.children[0].remove();
  }

  // 1...grabing the value of text inserted in box
  let currentBtn = e.currentTarget;
  //console.log(currentBtn)
  let currentInput = currentBtn.previousElementSibling;
  // console.log(currentInput.value)
  let currentChapterName = currentInput.value;

  // 2..Now we create list in which we insert the grabing element

  let newLi = document.createElement("li");
  newLi.className = "list-group-item d-flex justify-content-between";
  // newLi.textContent = currentInput.value
  newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3>
          <button class="btn btn-warning mx-4" onclick="editChapter(this)">Edit</button>
          <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;

  // 3... ------ appending the new creating list with the parent element
  parentList.appendChild(newLi);
}

// -----2-------Remove function ----and display msg (Nothing is here plz insert data)-----------------

function removeChapter(currentElement) {
  //console.log(currentElement.parentElement)
  let parentList = document.getElementById("parentList");
  currentElement.parentElement.remove();

  //  Check for display Empty Message (if there is nothing in the list then display that message)

  if (parentList.children.length == 0) {
    let dsplyEmptyMsg = document.createElement("h3");
    dsplyEmptyMsg.classList.add("emptyMsg");
    dsplyEmptyMsg.textContent = "List is Empty !";
    parentList.appendChild(dsplyEmptyMsg);
  }
}

// -----3-------Edit function ---------------------

function editChapter(currElement) {
  // console.log(currElement.previousElementSibling)
  if (currElement.textContent == "Done") {
    currElement.textContent = "Edit";
    let currChapterName = currElement.previousElementSibling.value;
    let newHeading = document.createElement("h3");
    newHeading.className = "flex-grow-1";
    newHeading.textContent = currChapterName;
    currElement.parentElement.replaceChild(
      newHeading,
      currElement.previousElementSibling
    );
  } else {
    currElement.textContent = "Done";
    let currChapterName = currElement.previousElementSibling.textContent;
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "form-control";
    newInput.value = currChapterName;

    // Replace previous ChapterName with  new Created InputForm
    currElement.parentElement.replaceChild(
      newInput,
      currElement.previousElementSibling
    );
  }
}
