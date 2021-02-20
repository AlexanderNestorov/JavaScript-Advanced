function solve() {
   contentArr = Array.from(document.querySelectorAll('section h2'));
   postSection = contentArr[0];
   createSection = contentArr[1];
   archiveSection = contentArr[2];

   postSection = Array.from(document.querySelectorAll('section'))[1];
   archiveSection = Array.from(document.querySelectorAll('section'))[3];

   createEls = Array.from(document.querySelectorAll('section p input'));

   createButton = Array.from(document.getElementsByClassName('btn create'))[0];


   createButton.addEventListener('click', (event) => {

      insertableElement = document.createElement('article');


      event.preventDefault();
      author = createEls[0].value;
      title = createEls[1].value;
      category = createEls[2].value;
      contentInput = document.getElementById('content').value;


      insertH1 = document.createElement('h1');
      insertH1.textContent = title;

      insertPCat = document.createElement('p')
      insertPCat.textContent = 'Category:';
      categoryInside = document.createElement('strong');
      categoryInside.textContent = category;
      insertPCat.appendChild(categoryInside);

      insertPCreat = document.createElement('p');
      insertPCreat.textContent = 'Creator:';
      creatorInside = document.createElement('strong');
      creatorInside.textContent = author;
      insertPCreat.appendChild(creatorInside);

      insertText = document.createElement('p');
      insertText.textContent = contentInput;

      buttonDiv = document.createElement('div');
      buttonDiv.className = 'buttons';
      btnDelete = document.createElement('button');
      btnDelete.className = 'btn delete';
      btnDelete.textContent = 'Delete';
      btnArchive = document.createElement('button');
      btnArchive.className = 'btn archive';
      btnArchive.textContent = 'Archive';
      buttonDiv.appendChild(btnDelete);
      buttonDiv.appendChild(btnArchive);
      
      createEls[1].value = '';
      createEls[0].value = '';
      createEls[2].value = '';
      document.getElementById('content').value = '';

      btnDelete.addEventListener('click', (event) => {
         event.target.parentElement.parentElement.remove();
      })
      btnArchive.addEventListener('click', (event) => {
         insertetText = document.createElement('li');
         insertetText.textContent = event.target.parentElement.parentElement.firstChild.textContent;
         archiveSection.lastElementChild.appendChild(insertetText);
         event.target.parentElement.parentElement.remove();

         function sortGifts() {
            Array.from(archiveSection.lastElementChild.children)
            .sort((a,b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(g => archiveSection.lastElementChild.appendChild(g));
        }

        sortGifts()


      })

      insertableElement.appendChild(insertH1);
      insertableElement.appendChild(insertPCat);
      insertableElement.appendChild(insertPCreat)
      insertableElement.appendChild(insertText);
      insertableElement.appendChild(buttonDiv);

      postSection.appendChild(insertableElement)



   }
   )
}
