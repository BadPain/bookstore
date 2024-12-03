function init() {
    renderBooks();
    getFromLocalStorage();
}


function renderBooks() {
    let booksContent = document.getElementById('content');

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        booksContent.innerHTML += getBookTemplate(indexBook)
            heartStatus(indexBook);
    }  
}


function heartStatus(indexBook) {
    let heartContent = "";

        let heartSrc = books[indexBook].liked ? "./img/icons/heart_on.svg" : "./img/icons/heart_off.svg";

        heartContent += `
        <div>
        <img class="button_heart" id="imgClickAndChange-${indexBook}" onclick="changeImage(${indexBook})" src="${heartSrc}" alt=""/>
        </div>
        `;
    return heartContent;
}


function saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));    
}

function getFromLocalStorage() {
   books = localStorage.getItem('books');
    books = JSON.parse(books) || [];
    return books;
}

console.log(books);




function getCommentAdd(indexBook) {
    let commentsContent = "";
    for (let IndexComment = 0; IndexComment < books[indexBook].comments.length; IndexComment++) {
        let name = books[indexBook].comments[IndexComment].name;
        let comment = books[indexBook].comments[IndexComment].comment;

        commentsContent += `
            <div class="comment">
                <p><strong>${name}:</strong> ${comment}</p>
            </div>`;
    }
    return commentsContent;
}


function addComment(indexBook) {
    let nameInput = document.getElementById(`comment-name-${indexBook}`).value.trim();
    let commentInput = document.getElementById(`comment-text-${indexBook}`).value.trim();

    if (nameInput === "" || commentInput === "") {
        return;
    }

    books[indexBook].comments.push({ name: nameInput, comment: commentInput });

    document.getElementById(`comment-name-${indexBook}`).value = "";
    document.getElementById(`comment-text-${indexBook}`).value = "";

    document.getElementById(`comments-${indexBook}`).innerHTML = getCommentAdd(indexBook)

    getCommentAdd(indexBook);
    saveToLocalStorage();
}


function changeImage(indexBook) {
    let img = document.getElementById(`imgClickAndChange-${indexBook}`);
    let like = document.getElementById(`likes-${[indexBook]}`);
    let currentImg = img.src;

    if (currentImg.endsWith("heart_off.svg")) {
        img.src = "./img/icons/heart_on.svg";
        books[indexBook].likes += 1;

    } else {
        img.src = "./img/icons/heart_off.svg";
        books[indexBook].likes -= 1;
    }

    
    like.textContent = books[indexBook].likes;
    saveToLocalStorage();
}


function getBookTemplate(indexBook) {
    return `
    <section class="bookViewClass">

        <div class="book_Name">${books[indexBook].name}</div>
        <hr>
        <div class="book_Icon_Class">
            <img class="book_Icon" src="./img/icons/book_icon.svg" alt="">
        </div>
        <hr>
        <div class="book_Liked">
            <p class="book_Price">${books[indexBook].price} €</p>
            <div class="book_New_Liked">
                <p id="likes-${[indexBook]}">${books[indexBook].likes}</p>
                ${heartStatus(indexBook)}
                
            </div>
        </div>
        <div class="book_Infos_Main">
            <div class="book_Infos">
                <span>Author</span>
                <span>Erscheiungsjahr</span>
                <span>Genre</span>
            </div>
            <div class="book_Infos_Script">
                <p>: ${books[indexBook].author}</p>
                <p>: ${books[indexBook].publishedYear}</p>
                <p>: ${books[indexBook].genre}</p>
            </div>
        </div>
        <hr>
        <br>
        <div class="add-comment">
            <input id="comment-name-${indexBook}" type="text" placeholder="Dein Name" maxlength="20">
            <textarea id="comment-text-${indexBook}" placeholder="Dein Kommentar" maxlength="40"></textarea>
            <button onclick="addComment(${indexBook})">Kommentar hinzufügen</button>
        </div>
        <div class="comments-container">
            <div class="comment" id="comments-${indexBook}">
            ${getCommentAdd(indexBook)}
            </div>
        </div>
        
       
        </div>
        </section>
    <br>
    <br>`;
}