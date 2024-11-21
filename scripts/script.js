function init() {
    renderBooks();
}


function renderBooks() {
    let booksContent = document.getElementById('content');

    for (let i = 0; i < books.length; i++) {
    };
    booksContent.innerHTML +=
        `<section class="bookViewClass">

        <div class="book_Name">${books[1].name}</div>
        <hr>
        <div class="book_Icon_Class">
            <img class="book_Icon" src="./img/icons/book_icon.svg" alt="">
        </div>
        <hr>
        <div class="book_Liked">
            <p class="book_Price">${books[1].price}</p>
            <div class="book_New_Liked">
                <p>${books[1].likes}</p>
                <img class="book_heart" src="./img/icons/heart_on.svg" alt="">
                <img class="book_heart" src="./img/icons/heart_off.svg" alt="">
            </div>
        </div>
        <div class="book_Infos_Main">
            <div class="book_Infos">
                <span>Author</span>
                <span>Erscheiungsjahr</span>
                <span>Genre</span>
            </div>
            <div class="book_Infos_Script">
                <p>: ${books[1].author}</p>
                <p>: ${books[1].publishedYear}</p>
                <p>: ${books[1].genre}</p>
            </div>
        </div>
        <hr>

        <p class="comment">Kommentare:</p>
    </section>`;
}  