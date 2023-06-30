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
    btn: 'see project',

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
    btn: 'see project',

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
    btn: 'see project',
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
    btn: 'see project',
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
    btn: 'see project',
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
    btn: 'see project',
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
  h3J.innerHTML = project.titulo; 

  const ulJ = document.createElement('ul');
  cardJ.appendChild(ulJ);
  ulJ.classList.add('small-icon');

  const liJ = document.createElement('li');
  ulJ.appendChild(liJ);
  liJ.innerHTML = project.tecnologias.length > 0 ? project.tecnologias[0] : "";

  const liJ1 = document.createElement('li');
  ulJ.appendChild(liJ1);
  liJ1.innerHTML = project.tecnologias.length > 1 ? project.tecnologias[1] : "";

  const liJ2 = document.createElement('li');
  ulJ.appendChild(liJ2);
  liJ2.innerHTML = project.tecnologias.length > 2 ? project.tecnologias[2] : "";

  const liJ3 = document.createElement('li');
  ulJ.appendChild(liJ3);
  liJ3.innerHTML = project.tecnologias.length > 3 ? project.tecnologias[3] : "";

  const buttonJ = document.createElement('button');
  cardJ.appendChild(buttonJ);
  buttonJ.innerHTML = project.btn;
  buttonJ.classList.add('btn');
});
