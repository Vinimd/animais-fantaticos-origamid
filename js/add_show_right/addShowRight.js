export default function dataRight() {

    const showRight = document.querySelectorAll('[data-anima^="show"]');
    const menuImg = document.querySelectorAll('[data-tab="menu"] li');

    function addClassShowRight(index) {

        showRight.forEach((section) => {
            if (section.classList.contains('show-right')) {
                section.classList.remove('show-right');
            } else if (section.classList.contains('show-down')) {
                section.classList.remove('show-down');
            }
        });
        showRight[index].classList.add(showRight[index].dataset.anima)
    }

    menuImg.forEach((img, index) => {
        img.addEventListener('click', () => {
            addClassShowRight(index);
        });
    })
}