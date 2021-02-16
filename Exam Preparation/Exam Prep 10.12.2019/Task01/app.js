function solution() {
    // attach event listeners to input form
    const [gifts,sent,discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click',addGift);

    // create gift elements with buttons
    function addGift() {
        const name = input.value;
        input.value = '';

        const element = e('li',name,'gift');
        const sendBtn = e('button','Send','sendButton');
        const discardBtn = e('button','Discard','discardButton');

        element.appendChild(sendBtn);
        element.appendChild(discardBtn);
        
        sendBtn.addEventListener('click',() => sendGift(name,element));
        discardBtn.addEventListener('click',() => discardGift(name,element));

        gifts.appendChild(element);

        sortGifts()
    }

    // logic for sending gifts
    function sendGift(name,gift) {

        // remove element from original list
        gift.remove();
        
        // create new li item
        const element = e('li',name,'gift');

        // add element to new list
        sent.appendChild(element);


    }

    // logic for discarding gifts

    function discardGift(name, gift) {

        gift.remove();
        
        // create new li item
        const element = e('li',name,'gift');

        // add element to new list
        discarded.appendChild(element);

    }

    // sort gifts list by
    function sortGifts() {
        Array.from(gifts.children)
        .sort((a,b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
        .forEach(g => gifts.appendChild(g));
    }

    //utillity function
    function e(type,content,className) {
        const result = document.createElement(type);
        result.textContent = content;
        if(className){
            result.className = className;
        }

        return result;
    }
}