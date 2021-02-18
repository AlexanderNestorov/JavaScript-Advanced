function solve() {

    //get the open tasks section
    let openSection = document.getElementsByTagName('section')[1];
    //get the in progress section
    let inProgress = document.getElementsByTagName('section')[2];
    //get the finished section
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

        // we create a description element to add to our insertable el
        let pDescription = document.createElement('p');
        pDescription.innerText = `Description: ${description.value}`;

        // create a date el to add to the insertable el
        let pDate = document.createElement('p');
        pDate.innerText = `Due Date: ${date.value}`;

        // create the div that will hold our buttons
        let div = document.createElement('div');
        div.className = 'flex';

        // create the start and delete buttons
        let startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.innerText = 'Start';

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'red';
        deleteBtn.innerText = 'Delete';
        
        // add the delete functionality to the delete button
        deleteBtn.addEventListener('click', (event) => deleteArticle(event))

        // add the start functionality to the start button
        startBtn.addEventListener('click', (event) => {

            //create the finish button to move to the next section
            let btnFinish = document.createElement('button');
            btnFinish.className = 'orange';
            btnFinish.innerText = 'Finish';

            //create the event for the finish button
            btnFinish.addEventListener('click', (event) => {
                article.lastElementChild.remove();
                finished.lastElementChild.appendChild(article);
            })


            //remove the start button
            article.lastElementChild.children[0].remove();

            // add the finish button
            article.lastElementChild.appendChild(btnFinish)

            // add the article to inProgress section
            inProgress.lastElementChild.appendChild(article);
        })

        // we add the buttons to the article div
        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        // we append all el's to the article
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

    // the delete functionality
    function deleteArticle(event) {
        event.target.parentElement.parentElement.remove()
    }
}
