import macaroon from "./images/macaroon.gif"
import cheesecake from "./images/cheesecake.jpg"
import fruitcake from "./images/fruitcake.gif"
import pinkcake from "./images/pinkcake.gif"

const dessert = (name, link, info, price) => {
    const _createName = (name) => {
        const h6 = document.createElement('h6');
        h6.textContent = name;
        return h6;
    }

    const _createPhoto = (link) => {
        const img = document.createElement('img');
        img.setAttribute('src', link);
        img.setAttribute('class', 'item-pic');
        return img
    }

    const _createInfo = (info) => {
        const p = document.createElement('p');
        p.textContent = info;
        return p;
    }

    const _createPrice = (price) => {
        const p = document.createElement('p');
        p.textContent = `${price} Yen`;
        return p;
    }

    const createContainer = () => {
        const div = document.createElement('div');
        const display = document.createElement('div');
        div.setAttribute('class', 'menu-item');
        display.setAttribute('class', 'item-info');

        div.addEventListener('mouseover', () => {
            display.style.display = 'block';
        });

        div.addEventListener('mouseout', () => {
            display.style.display = 'none';
        })



        const a = _createName(name);
        const photo = _createPhoto(link);
        const b = _createInfo(info);
        const c = _createPrice(price);
        const d = document.createElement('button');
        d.textContent = 'Order!!';
        display.append(a,b,c,d);
        div.append(photo, display);
        return div;
    }

    return createContainer();
}

const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('menu');
    return main;
}

export default function () {
    const content = document.querySelector('#content');
    const main = createMain();
    const a = dessert('Macarons', macaroon, 'Strawberry and chocolate macarons', 300);
    const b = dessert('Cheesecake', cheesecake, 'Cheesecake with a rare mascarpone', 3500);
    const c = dessert('Cassis Fromage', pinkcake, 'Mousse cheesecake with cassis puree', 4500);
    const d = dessert('Premium Roll Cake', fruitcake, 'White peach and mango cake', 3000);

    main.append(a,b,c,d);
    content.append(main);
}