const projects = [
  {
    url: './SnapshootPortfolio.png',
    key: 'project1',
    titulo: 'Multi-Post Stories Gain+Glory',
    tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
    btnSourceHref: 'https://github.com/PierreBarba',
    imagen: './crossimg.svg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',

  },
  {
    url: './imgdesktopPopUp.svg',
    key: 'project2',
    titulo: 'Multi-Post Stories Gain+Glory',
    tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
    btnSourceHref: 'https://github.com/PierreBarba',
    imagen: './crossimg.svg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',

  },
  {
    url: './imgdesktopPopUp.svg',
    key: 'project3',
    titulo: 'Multi-Post Stories Gain+Glory',
    tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
    btnSourceHref: 'https://github.com/PierreBarba',
    imagen: './crossimg.svg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
  },
  {
    url: './imgdesktopPopUp.svg',
    key: 'project4',
    titulo: 'Multi-Post Stories Gain+Glory',
    tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
    btnSourceHref: 'https://github.com/PierreBarba',
    imagen: './crossimg.svg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
  },
  {
    url: './imgdesktopPopUp.svg',
    key: 'project5',
    titulo: 'Multi-Post Stories Gain+Glory',
    tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
    btnSourceHref: 'https://github.com/PierreBarba',
    imagen: './crossimg.svg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
  },
  {
    url: './imgdesktopPopUp.svg',
    key: 'project6',
    titulo: 'Multi-Post Stories Gain+Glory',
    tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    imagen: './crossimg.svg',
    btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
    btnSourceHref: 'https://github.com/PierreBarba',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
  },
];

const initApp = () => {
  const hamburger = document.querySelector('.hamburger');
  const topLinks = document.querySelector('.higher-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topLinks.classList.toggle('active');
  });

  document.querySelectorAll('.higher-link').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    topLinks.classList.remove('active');
  }));
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

const cardsJava = document.querySelector('#works');

const resentJ = document.createElement('h2');
resentJ.classList.add('resent');
resentJ.innerHTML = ('My Recent Works');
cardsJava.appendChild(resentJ);

const lineJ = document.createElement('hr');
lineJ.classList.add('line');
cardsJava.appendChild(lineJ);

const cardsJ = document.createElement('div');
cardsJ.classList.add('cards');
cardsJava.appendChild(cardsJ);

projects.forEach((project) => {
  const cardJ = document.createElement('div');
  cardJ.classList.add('card');
  cardsJ.appendChild(cardJ);

  const picJ = document.createElement('img');
  picJ.classList.add('pic');
  cardJ.appendChild(picJ);
  picJ.setAttribute('src','./pic/empty.jpg');
  picJ.setAttribute('alt','empty image');

  const h3J = document.createElement('h3');
  cardJ.appendChild(h3J);
  h3J.innerHTML = project.titulo
})
