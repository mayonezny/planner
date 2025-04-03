import React from 'react';
import './home-page.scss';
import { TaskList } from '../../components/TaskList/TaskList';

const HomePage: React.FC = () => {

  return (
    <div className="HomePage">
      <div className="HomePage__buttons">
        <a>Здравствуйте Иван</a>
        <TaskList/>
      </div>
    </div>
  );
};

export default HomePage;
