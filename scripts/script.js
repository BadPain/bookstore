function init() {
    renderBooks();
}

function renderBooks() {
    let booksContent = document.getElementById('content');


    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        booksContent.innerHTML += getBookTemplate(indexBook)

        let commentsContent = document.getElementById(`comments-${indexBook}`);

        if (commentsContent) {
            for (let IndexComment = 0; IndexComment < books[indexBook].comments.length; IndexComment++) {
                let name = books[indexBook].comments[IndexComment].name;
                let comment = books[indexBook].comments[IndexComment].comment;

                commentsContent.innerHTML += `
                    <div class="comment">
                        <p><strong>${name}:</strong> ${comment}</p>
                    </div>`;
            }
        }
    }
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
                <p>${books[indexBook].likes}</p>
                <button class="button_heart"><img src="./img/icons/heart_on.svg" alt=""></button>
                <!-- <img class="book_heart" src="./img/icons/heart_on.svg" alt="">
                <img class="book_heart" src="./img/icons/heart_off.svg" alt=""> -->
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
        <div class="comment" id="comments-${indexBook}">
        </div>
        </section>
    <br>
    <br>`;
}