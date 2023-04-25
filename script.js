const authorsData = [
    {
      img: 'Images/authors/epictetus.jpg',
      name: 'Epictetus',
      studies: 'Greek Stoic philosopher',
      resume: 'He was born into slavery at Hierapolis, Phrygia (present-day Pamukkale, in western Turkey) and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life. His teachings were written down and published by his pupil Arrian in his Discourses and Enchiridion.',
    },
    {
      img: 'Images/authors/seneca.jpg',
      name: 'Seneca',
      studies: 'Stoic philosopher of Ancient Rome',
      resume: 'Seneca was born in Córdoba in Hispania, and raised in Rome, where he was trained in rhetoric and philosophy.',
    },
    {
      img: 'Images/authors/marcus.jpg',
      name: 'Marcus Aurelius Antoninus',
      studies: 'Roman emperor from 161 to 180 AD and a Stoic philosopher.',
      resume: '"meditations" are a significant source of the modern understanding of ancient Stoic philosophy. These writings have been praised by fellow writers, philosophers, monarchs, and politicians centuries after his death.',
    },
    {
      img: 'Images/authors/massimo.jpg',
      name: 'Massimo Pigliucci',
      studies: 'Professor of Philosophy at the City College of New York',
      resume: 'Pigliucci was born in Monrovia, Liberia, and raised in Rome, Italy.He has a doctorate in genetics from the University of Ferrara, Italy, a PhD in biology from the University of Connecticut, and a PhD in philosophy of science from the University of Tennessee.',
    },
    {
      img: 'Images/authors/will.jpg',
      name: 'William B. Irvine',
      studies: 'Professor of Philosophy at the Wright State University (Ohio, EE. UU.). ',
      resume: 'He became famous in many countries thanks, mainly, to the publication of two books: The art of the good life and On desire: why we want what we want.',
    },
    {
      img: 'Images/authors/ryan.jpg',
      name: 'Ryan Holiday',
      studies: 'Author, entrepreneur',
      resume: 'American author, modern Stoic, public-relations strategist, owner of the Painted Porch Bookshop and host of the podcast The Daily Stoic',
    },
  ];
  
  const authorsGrid = document.querySelectorAll('.authors-section-grid-item');
  
  function authorsConstructor(element, counter) {
    element.forEach((author) => {
      author.innerHTML = ` 
      <div class= 'authors-section-grid-item-imgholder'>
        <img class='authors-chess' src='Images/authors/chess.jpg'>
        <div class='authors-img' style="background-image: url('${authorsData[counter].img}');"></div>
      </div>
      <div class= 'authors-section-grid-item-divtext'>
        <h3 class= 'authors-section-grid-item-divtext-h3'>${authorsData[counter].name}</h3>
        <span class= 'authors-section-grid-item-divtext-span'>${authorsData[counter].studies}</span>
        <hr class='authors-section-grid-item-divtext-hr'>
        <span class= 'authors-section-grid-item-divtext-span2'>${authorsData[counter].resume}</span>
      </div> 
      `;
      counter += 1;
    });
  }
  
  authorsConstructor(authorsGrid, 0);
  
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.modal-close');
  const hamburBtn = document.querySelector('.menu-h');
  const ilMenu = document.querySelectorAll('.il-modal');
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
  
  hamburBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });
  
  ilMenu.forEach((il) => {
    il.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  });
  
  const showLessArrow = document.querySelector('.show-less-arrow');
  const showMoreArrow = document.querySelector('.show-more-arrow');
  const showLessBtn = document.querySelector('.show-less');
  const showMoreBtn = document.querySelector('.show-more');
  const toHideShow = document.querySelectorAll('.tohide');
  const authorSection = document.getElementById('authors-section');
  
  showLessArrow.addEventListener('click', () => {
    showMoreBtn.classList.remove('hide');
    showLessBtn.classList.add('hide');
    toHideShow.forEach((element) => {
      element.classList.add('hide');
    });
    authorSection.style.height = '600px';
  });
  
  showMoreArrow.addEventListener('click', () => {
    showLessBtn.classList.remove('hide');
    showMoreBtn.classList.add('hide');
    toHideShow.forEach((element) => {
      element.classList.remove('hide');
    });
    authorSection.style.height = '250vh';
  });
  
  window.addEventListener('load', () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      showMoreBtn.classList.remove('hide');
      showLessBtn.classList.add('hide');
      toHideShow.forEach((element) => {
        element.classList.add('hide');
      });
      authorSection.style.height = '600px';
    }
  });
  