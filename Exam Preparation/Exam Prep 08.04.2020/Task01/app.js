function solve() {

    //get the open tasks section
    let openSection = document.getElementsByTagName('section')[1];
    //ge the in progress section
    let inProgress = document.getElementsByTagName('section')[2];

    let finished = document.getElementsByTagName('section')[3];

    // get the input and validate it

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', (event) => {
        // prevent the default form submit
        event.preventDefault();
        // get the input elements
        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        // validate the input fields
        if (task.value === '' || description.value === '' || date.value === '') {
            return;
        }
        // create the  insertable element for the Open section
        let article = document.createElement('article');

        // we assign the task name to an element to later add to the insertable element
        let h3 = document.createElement('h3');
        h3.innerText = task.value;

        let pDescription = document.createElement('p');
        pDescription.innerText = `Description: ${description.value}`;

        let pDate = document.createElement('p');
        pDate.innerText = `Due Date: ${date.value}`;

        let div = document.createElement('div');
        div.className = 'flex';

        let startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.innerText = 'Start';

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'red';
        deleteBtn.innerText = 'Delete';

        deleteBtn.addEventListener('click', (event) => deleteArticle(event))

        startBtn.addEventListener('click', (event) => {

            let btnFinish = document.createElement('button');
            btnFinish.className = 'orange';
            btnFinish.innerText = 'Finish';

            btnFinish.addEventListener('click', (event) => {
                article.lastElementChild.remove();
                finished.lastElementChild.appendChild(article);
            })


            article.lastElementChild.children[0].remove();

            article.lastElementChild.appendChild(btnFinish)

            inProgress.lastElementChild.appendChild(article);
        })

        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(div);

        // we add the task el to the next section
        openSection.lastElementChild.appendChild(article);



        // we clean the input fields
        task.value = '';
        description.value = '';
        date.value = '';
    })

    function deleteArticle(event) {
        event.target.parentElement.parentElement.remove()
    }
}