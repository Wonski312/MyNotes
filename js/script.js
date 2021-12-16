const noteText = document.querySelector(".note-text");
const textAreaText = document.querySelector(".main__utilities-textarea");

const utilitiesBar = document.querySelector('.main__utilities');

const mainContent = document.querySelector(".main__content");
const mainContentNote = document.querySelector('.main__content-note');

const utilitiesBtn = document.querySelector('.add-note'); 

const deleteBtn = document.querySelector('.delete-btn');

const submitBtn = document.querySelector(".main__utilities-submit-btn");

let textToAdd = textAreaText.value;

let id = 1;





const bartoggler = () => {
	utilitiesBar.classList.toggle('show-utilities');
}

const handleTaxtAdding = () => {
	noteText.textContent = textAreaText.value;
	textAreaText.value = "";
	id++;
};

const createNewNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("main__content-note");
	newNote.setAttribute('id', `${id}`);
	newNote.innerHTML = `  
    <h3>Note #${id}</h3>
	<button class="delete-btn" onclick="handleDeleteNote(${id})"><i class="fas fa-times"></i></button>
   <p class="note-text">${textAreaText.value}</p>
   `;
	mainContent.appendChild(newNote);

    textAreaText.value = "";
    id++;

};

const handleDeleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	mainContent.removeChild(noteToDelete);
	
}

// if (!!utilitiesBar.classList.contains('show-utilities')){
// 	mainContentNote.classList.add('moveContent');

// }

utilitiesBtn.addEventListener('click', bartoggler);
submitBtn.addEventListener("click", createNewNote);
