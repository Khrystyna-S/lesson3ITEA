const buttons = document.querySelectorAll('button');
const elemImg = document.getElementsByClassName('img');

// BUTTONS CLICK

buttons.forEach(function (item, index) {
    item.addEventListener('click', function () {
        (index === 0) ? OpenModal('img1', 'img', '1', item) : false;

        (index === 1) ? OpenModal('img2', 'img', '2', item) : false;

        (index === 2) ? OpenModal('img3', 'img', '3', item) : false;

        (index === 3) ? CloseModal() : false;
    })
});

// OPEN IMAGES

function OpenModal(elem1, elem2, elem3, item) {
    const elemDiv = document.createElement('div');
    document.getElementById('imgContainer').append(elemDiv);
    elemDiv.classList.add(`${elem1}`, `${elem2}`);
    elemDiv.innerHTML = `<h2>Вкладка ${elem3}</h2>`;
    item.disabled = 'disabled';
}

// CLOSE IMAGES

function CloseModal() {
    for (let i = 0; i < elemImg.length; i++) {
        elemImg[i].style.display = 'none';
    };
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}






