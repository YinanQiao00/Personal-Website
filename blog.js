/*  ------------------------ Preparations----------------------- */
let container = document.getElementById('posts');
let addButton = document.getElementById('addBtn');
let addButtonDialog = document.getElementById('addBtnDialog');
let addTitle = document.getElementById('addPostTitle');
let addDate = document.getElementById('addPostDate');
let addSummary = document.getElementById('addPostSummary');
let okAddButton = document.getElementById('okAddBtn');
let cancelAddButton = document.getElementById('cancelAddButton');
let editButtonDialog = document.getElementById('editBtnDialog');
let editTitle = document.getElementById('editPostTitle');
let editDate = document.getElementById('editPostDate');
let editSummary = document.getElementById('editPostSummary');
let okEditButton = document.getElementById('okEditBtn');
let cancelEditButton = document.getElementById('cancelEditBtn');
let curEdit;
/*  ------------------------ Initialization ----------------------- */
//initialize the localstorage to be ready to shown to users.
container.innerHTML = init();
//initialize the Buttons(edit and delete) to be ready to react the event when the user click.
initButtons()

/*  ------------------------ Export functions----------------------- */
/**
 * This function will take the input string from user and add it to
 * the unordered list tag as a new post with infos and buttons.
 * @param {string} [postInfo]
 *
**/
export function addPost(postInfo){
    let posts = container;
    let post = document.createElement("li");
    let postEditBtn = document.createElement("button");
    let postDeleteBtn = document.createElement("button");
    postEditBtn.innerHTML = "Edit";
    postEditBtn.className = "postEditButtons"
    postDeleteBtn.innerHTML = "Delete";
    postDeleteBtn.className = "postDeleteButtons"
    post.innerHTML = postInfo;
    post.appendChild(postEditBtn);
    post.appendChild(postDeleteBtn);
    posts.appendChild(post);
}

/**
 * This function support edit post function which
 * will allow the input string from user's input to
 * replace the original infos
 * @param {string} [postInfo]
 *
 **/
export function editPost(postInfo){
    let curParent = curEdit.parentNode;
    let postEditBtn = document.createElement("button");
    let postDeleteButton = document.createElement("button");
    curParent.innerText = postInfo;
    postEditBtn.innerHTML = "Edit";
    postEditBtn.className = "postEditButtons"
    postDeleteButton.innerHTML = "Delete";
    postDeleteButton.className = "postDeleteButtons"
    curParent.appendChild(postEditBtn);
    curParent.appendChild(postDeleteButton);
}

/**
 * This function support edit button to react to the event
 * when clicked by users, which means to pull out the dialog
 * of edit buttons.
 * @param {button} [postEdit]
 *
 **/
export function editPostEvent(postEdit){
    editButtonDialog.show();
    addButtonDialog.close();
    curEdit = postEdit;
}

/**
 * This function support delete button to react to the event
 * when clicked by users, which means to pull out the dialog
 * of delete buttons.
 * @param {Node} [postDelete]
 *
 **/
export function deletePostEvent(postDelete){
    postDelete.parentNode.remove();
}
/**
 * This function support store data to localStorage
 * @param {string} [newPostsList]
 **/
function storeData(newPostsList) {
    localStorage.setItem('postsList', JSON.stringify(newPostsList));
}


/*  ------------------------ functions----------------------- */
/**
 * This function support loading data from localStorage
 **/
function init() {
    let posts = JSON.parse(localStorage.getItem('postsList')) || {};
    if (posts === "[object Object]") {
        return 'There no post yet, you are welcomed to add one';
    } else {
        return posts;
    }
}

/**
 * This function support to add the event listeners to all the
 * edit buttons so that each edit button for different post can
 * react properly.
 **/
function initEditButtons() {
    let editButtons = container.getElementsByClassName('postEditButtons');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].onclick = function () {
            editPostEvent(this);
            storeData(container.innerHTML);
        };
    }
}

/**
 * This function support to add the event listeners to all the
 * delete buttons so that each delete button for different post can
 * react properly.
 **/
function initDeleteButtons() {
    let deleteButtons = container.getElementsByClassName('postDeleteButtons');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = function () {
            deletePostEvent(this);
            storeData(container.innerHTML);
        };
    }
}
/**
 * This function calls the helper method to initialize all the buttons
 **/
function initButtons() {
    initEditButtons();
    initDeleteButtons();
}

/*  ------------------------ Button Listeners----------------------- */
/**
 * add button listener which pull out add dialog
 **/
addButton.addEventListener('click', () => {
    addButtonDialog.show();
    editButtonDialog.close();
});
/**
 * cancel button in add dialog which cancel add the post
 **/
cancelAddButton.addEventListener('click', () => {
    addButtonDialog.close();
});
/**
 * Confirm Add button in add dialog which confirm add the post
 **/
okAddButton.addEventListener('click', () => {
    addButtonDialog.close();
    let postTitle = addTitle.value;
    let postDate = addDate.value;
    let postSummary = addSummary.value;
    let cleanPostTittle = DOMPurify.sanitize(postTitle);
    let cleanPostDate = DOMPurify.sanitize(postDate);
    let cleanPostSummary = DOMPurify.sanitize(postSummary);
    if ((cleanPostTittle !== '') && (cleanPostDate !== '') && (cleanPostSummary !== '')) {
        let post = `${cleanPostTittle}(${cleanPostDate}): ${cleanPostSummary} `;
        addPost(post);
        initButtons();
        storeData(container.innerHTML);
    } else {
        alert('You should fill out all the inputs!!!');
    }
});
/**
 * cancel button in edit dialog which cancel edit the post
 **/
cancelEditButton.addEventListener('click', () => {
    editButtonDialog.close();
});
/**
 * Confirm Edit button in edit dialog which confirm edit the post
 **/
okEditButton.addEventListener("click", () => {
    let postTitle = editTitle.value;
    let postDate = editDate.value;
    let postSummary = editSummary.value;
    let cleanPostTittle = DOMPurify.sanitize(postTitle);
    let cleanPostDate = DOMPurify.sanitize(postDate);
    let cleanPostSummary = DOMPurify.sanitize(postSummary);
    if ((cleanPostTittle !== '') && (cleanPostDate !== '') && (cleanPostSummary !== '')) {
        let post = `${cleanPostTittle}(${cleanPostDate}): ${cleanPostSummary} `;
        editPost(post);
        initButtons();
        storeData(container.innerHTML);
    } else {
        alert('You should fill out all the inputs!!!');
    }
    editButtonDialog.close();
});

// window.addEventListener('DOMContentLoaded', function () {
//
//
// });


