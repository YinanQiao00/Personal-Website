let testForm = document.getElementById('form');
let testId = document.getElementById('id');
let testArticleName = document.getElementById('article_name');
let testArticleBody = document.getElementById('article_body');
let postButton = document.getElementById('postBtn');
let getButton = document.getElementById('getBtn');
let putButton = document.getElementById('putBtn');
let deleteButton = document.getElementById('deleteBtn');
let testResponse = document.getElementById('response');
let responseFrame = document.getElementById('response_frame');
window.addEventListener('DOMContentLoaded',init);
function init() {
    testForm.addEventListener('submit', (event) => {
        // kill the submit of the form by the browser and handle it ourselves
        event.preventDefault();
        event.stopPropagation();
        // let form = document.getElementById('test_form');
        // let method = testForm.method;
        // let endpoint = testForm.action;
        let method = event.submitter;
        let payload = new FormData(testForm);
        let date = new Date().toDateString();
        payload.append('article_date', date);

        if (method === postButton) {
            postInit(payload);
        }
        if (method == getButton) {
            getInit();
        }
        if (method == putButton) {
            putInit(payload);
        }
        if (method == deleteButton) {
            deleteInit(payload);
        }
    });
} /* init */
async function postInit(payload) {
    // let xhr = new XMLHttpRequest();
    let posts = testResponse;
    let endpoint = 'https://httpbin.org/post';
    let request = await fetch(endpoint, {
        method : 'POST',
        body : payload
    });
    testResponse.innerHTML= await request.text();
};


async function getInit(){
    // let xhr = new XMLHttpRequest();
    let endpoint = 'https://httpbin.org/get';
    let request = await fetch(endpoint, {
        method : 'GET',
    });
    testResponse.innerHTML= await request.text();
};

async function putInit(payload){
    // let xhr = new XMLHttpRequest();
    let endpoint = 'https://httpbin.org/put';
    let request = await fetch(endpoint, {
        method : 'PUT',
        body : payload
    });
    testResponse.innerHTML= await request.text();
};

async function deleteInit(payload){
    // let xhr = new XMLHttpRequest();
    let endpoint = 'https://httpbin.org/delete';
    let request = await fetch(endpoint, {
        method : 'DELETE',
        body : payload
    });
    testResponse.innerHTML= await request.text();
};


