const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('contact');
    return main;
}

const createMainContent = () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    div1.classList.add('phone');
    div2.classList.add('address');
    div3.classList.add('map');
    div1.textContent = '&#9742 : +8194-484-1855';
    div2.textContent = '&#128506 : 163-1256, Nakazato, Kita-ku, Tokyo';

    return {div1, div2, div3}
}  

export default function () {
    const content = document.querySelector('#content');
    const main = createMain();
    const {div1, div2, div3} = createMainContent();

    main.append(div1, div2, div3);
    content.append(main);
}