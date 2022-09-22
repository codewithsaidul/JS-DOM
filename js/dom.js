const divElement = document.createAttribute('div');
divElement.className = 'REdBil';
divElement.setAttribute = ('id', 'redhunt');
divElement.setAttribute = ('title', 'like ypu');

const container = document.querySelector('.to-do-list');
const h1Element = container.querySelector('h1');
container.insertBefore(divElement, h1Element);