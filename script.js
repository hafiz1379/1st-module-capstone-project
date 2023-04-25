const playerData = [
    {
      img: './Images/Players/best.jpg',
      name: 'Lionel Messi',
      title: 'Best Player of the Tournament',
      resume: 'Lionel Messi, who is considered one of the greatest football players of all time, represented Argentina in the FIFA World Cup 2022. He led his team with the hope of securing victory and adding to his impressive list of accolades.',
    },
    {
      img: 'Images/Players/keaper.jpg',
      name: 'Emiliano Martínez',
      title: 'Best goalkeeper of the tournament',
      resume: 'Emiliano Martínez, the goalkeeper for Argentina in the FIFA World Cup 2022, played an instrumental role in helping his team win the tournament, making crucial saves throughout the competition and solidifying his position as one of the best goalkeepers in the world.',
    },
    {
        img: 'Images/Players/goalsoccer.jpg',
        name: 'Kylian Mbappé',
        title: 'Best goal soccer of the tournament',
        resume: 'Kylian Mbappé, the rising French football superstar, played a crucial role in France journey to the FIFA World Cup 2022, showcasing his impressive speed, skill, and goal-scoring ability throughout the tournament.',
      },
  
      {
        img: 'Images/Players/best goal.jpg',
        name: 'Richarlison de Andrade',
        title: 'Puskas award of the tournament',
        resume: 'Richarlison de Andrade, the Brazilian forward, scored several important goals for his team in the FIFA World Cup 2022 and was recognized for his impressive performance by winning the award for the best goal of the tournament.',
      },
  
      {
        img: 'Images/Players/oldest.jpg',
        name: 'Alfredo Talavera',
        title: 'The Oldest player of the tournament ',
        resume: 'Alfredo Talavera, the Mexican goalkeeper, was the oldest player of the FIFA World Cup 2022 tournament, demonstrating his skill and experience on the field despite his age.',
      },
  
    {
      img: 'Images/Players/youngest.jpg',
      name: 'Pablo Gavi',
      title: 'The Youngest goal soccer of the tournament',
      resume: 'Pablo Gavi, the Spanish midfielder, was the youngest goal scorer of the FIFA World Cup 2022 tournament, displaying his impressive talent and potential at a young age.'
    },
  ];
  
  const playerGrid = document.querySelectorAll('.player-section-grid-item');
  
  function playerConstructor(element, counter) {
    element.forEach((author) => {
      author.innerHTML = ` 
      <div class= 'player-section-grid-item-imgholder'>
        <img class='player-chess' src='./Images/Players/chess.jpg'>
        <div class='player-img' style="background-image: url('${playerData[counter].img}');"></div>
      </div>
      <div class= 'player-section-grid-item-divtext'>
        <h3 class= 'player-section-grid-item-divtext-h3'>${playerData[counter].name}</h3>
        <span class= 'player-section-grid-item-divtext-span'>${playerData[counter].title}</span>
        <hr class='player-section-grid-item-divtext-hr'>
        <span class= 'player-section-grid-item-divtext-span2'>${playerData[counter].resume}</span>
      </div> 
      `;
      counter += 1;
    });
  }
  
  playerConstructor(playerGrid, 0);
  
  
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.modal-close');
const hamburBtn = document.querySelector('.menu-h');
const ilMenu = document.querySelectorAll('.il-modal');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    hamburBtn.style.display = 'block';
    logo.style.display = 'block';
});

hamburBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    hamburBtn.style.display = 'none';
    closeBtn.style.display = 'block';
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