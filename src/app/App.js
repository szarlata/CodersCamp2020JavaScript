import GameModeName from './components/GameModeName';
import UsersRanking from './components/UsersRanking';
import ModeRules from './components/ModeRules';
import Button from './components/Button';
import QuestionGenerator from './components/QuestionGenerator';
import Answers from './components/Answers';
import PeopleImg from './components/PeopleImg';
import MenuOptions from './components/MenuOptions';
import ButtonSection from './components/ButtonSection';
import EventListeners from './components/EventListeners';

export const App = ({ options }) => {
  new MenuOptions().render();
  new GameModeName();
  new PeopleImg().renderStatic(20);
  new ModeRules().renderRules();
  new UsersRanking().render([
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
  ]);
  new ButtonSection().render();
  new Button('Hall of Fame', 'button button__ranking button--white').render();
  new Button('Rules', 'button button__rules button--white').render();
  const playGame = new Button('play the game', 'button button--red').render();
  playGame.addEventListener('click', async () => {
    document.querySelector('.mode__descriptions').style.display = 'none';
    document.querySelector('.button--white').style.display = 'none';
    document.querySelector('.options').style.display = 'none';
    document.querySelector('.mode__image--static').style.display = 'none';
    playGame.style.display = 'none';
    const mode = document.querySelector('.options__mode--active').dataset.mode;
    const answersPromise = await new QuestionGenerator().returnAnswersObject(
      mode,
    );
    new PeopleImg().render(answersPromise);
    new Answers().render(answersPromise);
    new Answers().renderTimers();
  });
  new EventListeners().addListeners();
};
