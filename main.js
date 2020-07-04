var cardContent = [
    {
        "userName": "@User1",
        "uploadTime": "3 mins ago",
        "imgSrc": "./imgs/TestImage.jpg",
        "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam! Veniam, dolorum facere? Commodi, ut. Et, itaque quam!"
    },
    {
        "userName": "@User2",
        "uploadTime": "10 mins ago",
        "imgSrc": "./imgs/TestImage2.jpg",
        "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam! Veniam, dolorum facere? Commodi, ut. Et, itaque quam!"
    },
    {
        "userName": "@User3",
        "uploadTime": "20 mins ago",
        "imgSrc": "./imgs/TestImage3.jpg",
        "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam! Veniam, dolorum facere? Commodi, ut. Et, itaque quam!"
    },
    {
        "userName": "@User4",
        "uploadTime": "35 mins ago",
        "imgSrc": "./imgs/TestImage4.jpg",
        "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam! Veniam, dolorum facere? Commodi, ut. Et, itaque quam!"
    },
    {
        "userName": "@User5",
        "uploadTime": "45 mins ago",
        "imgSrc": "./imgs/TestImage.jpg",
        "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam! Veniam, dolorum facere? Commodi, ut. Et, itaque quam!"
    },
    {
        "userName": "@User6",
        "uploadTime": "1 hour ago",
        "imgSrc": "./imgs/TestImage3.jpg",
        "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam! Veniam, dolorum facere? Commodi, ut. Et, itaque quam!"
    },
    {
        "userName": "@User5",
        "uploadTime": "2 hours ago",
        "imgSrc": "./imgs/TestImage2.jpg",
        "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam! Veniam, dolorum facere? Commodi, ut. Et, itaque quam!"
    }

];

let row;

var createCard = (task) => {
    let col = document.createElement('div');
    col.className = 'col-sm-8 col-lg-4 mb-4';

    let card = document.createElement('div');
    card.className = 'card';

    let cardImage = document.createElement('img');
    cardImage.className = 'card-img-top';
    cardImage.src = task.imgSrc;

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body text-white bg-dark';

    let userName = document.createElement('small');
    userName.className = 'card-title font-weight-bold username';
    userName.innerText = task.userName;

    let uploadTime = document.createElement('p');
    uploadTime.className = 'card-text border border-light rounded uploadTime text-center';
    uploadTime.innerText = "Uploaded "+ task.uploadTime;

    let cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerText = task.caption;

    let likeButton = document.createElement('a');
    likeButton.className = 'btn btn-outline-danger btn-sm likebutton';

    let butonIcon = document.createElement('i');
    butonIcon.className = 'far fa-heart';

    cardBody.appendChild(userName);
    cardBody.appendChild(uploadTime);
    cardBody.appendChild(cardText);
    cardBody.appendChild(likeButton);
    likeButton.appendChild(butonIcon);
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);

}

let initListOfTasks = () => {
    if (row) {
        document.getElementById('row').replaceWith(row);
        return;
    }

    row = document.getElementById('row');
    cardContent.forEach((task) => {
        createCard(task);
    });
};

initListOfTasks();

$('.card .likebutton').on('click', function(evt) {
    $(this).toggleClass("liked");
    evt.preventDefault();
    if ($('.likebutton').is('.liked')) {
        $(this).removeClass("btn-outline-danger");
        $(this).addClass("btn-danger");
        $(this).blur();
        console.log("toggle on");
    } else {
        $(this).addClass("btn-outline-danger");
        $(this).removeClass("btn-danger");
        $(this).blur();
        console.log("toggle off");
    }
})