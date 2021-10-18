import icon from './images/handsome.jpeg'

const addSelected = (elem) => {
    elem.classList.add('selected');
}

const removeSelected = (elem, targetElem) => {
    for (const i of elem) {
        if (i !== targetElem) {
            i.classList.remove('selected');
        }
    } 
}

const removeMain = () => {
    const main = document.querySelector('main');
    main.remove();
}

const createNav = () => {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li_1 = document.createElement('li');
    const li_2 = document.createElement('li');
    const li_3 = document.createElement('li');
    const arrayList = [li_1, li_2, li_3];

    const li_1Text = document.createTextNode('Home');
    const li_2Text = document.createTextNode('Menu');
    const li_3Text = document.createTextNode('Contact');
    
    li_1.append(li_1Text);
    li_2.append(li_2Text);
    li_3.append(li_3Text);
    
    li_1.classList.add('selected');

    li_1.addEventListener('click', (e) => {
        removeSelected(arrayList, e.target);
        addSelected(e.target);
        removeMain();
    });
    li_2.addEventListener('click', (e) => {
        removeSelected(arrayList, e.target);
        addSelected(e.target);
        removeMain();
    });
    li_3.addEventListener('click', (e) => {
        removeSelected(arrayList, e.target);
        addSelected(e.target);
        removeMain();
    })

    ul.append(li_1, li_2, li_3);
    nav.append(ul);
    
    return nav;
}

const createHeader = () => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode("Edberg's Patisserie");

    const nav = createNav();
    
    h1.append(h1Text);
    header.append(h1);
    header.append(nav);

    return header;
}

const createMain = () => {
    const main = document.createElement('main');
    const handsome = document.createElement('img');

    main.setAttribute('class', 'home');
    handsome.setAttribute('src', icon);
    
    const div = document.createElement('div')
    div.classList.add('bio-name');
    div.textContent = 'About | Edberg';

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.textContent = 'Singaporean Chef Edberg Teh left home in 2010 after graduating from Nayang Technological University of Singapore and went Japan to pursue his culinary dreams.';
    p2.textContent = 'While training at Toutsuki Culinary Academy in Japan, Edberg studied under renouned chef Soma Yukihira who won many culinary competitions.';
    p3.textContent = 'Graduated in 2020, Edberg settled down in Tokyo, Japan and join a team at highly acclaimed Resturant Ke-kiya where he eventually rose to Head Pasty Chef.';

    const h3 = document.createElement('h3');
    h3.textContent = 'Come visit us!!!';

    main.append(handsome, div, p1, p2, p3, h3);

    return main;
}

export default function init() {
    const content = document.querySelector('#content')
    const header = createHeader();
    const main = createMain();
    content.append(header, main);
}

