import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RiddleModal from '../components/RiddleModal';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Інновації, що змінюють світ";
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFounder, setCurrentFounder] = useState('');

  // Ефект самодрукування (Лаб 4)
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleNameHover = (name) => {
    setCurrentFounder(name);
    setModalOpen(true);
  };

  return (
    <div>
      <div className="hero-section">
        <h1>Tech Start-up "TechNova"</h1>
        <div className="typing-text">{typedText}</div>
      </div>

      <main>
        <article className="goal-section">
          <h2>Мета створення Tech Start-up "TechNova"</h2>
          <p>Наш Tech Start-up прагне до інновацій та розвитку сучасних технологій для кращого життя людей.</p>
          <ul>
            <li>Розробка передових технологічних продуктів</li>
            <li>Впровадження інновацій у бізнес-процеси</li>
            <li>Забезпечення якості та доступності продуктів</li>
          </ul>
          <p style={{ fontSize: '50px' }}>💻🚀</p>
        </article>

        <aside className="founders-container">
          <h3>Інформація про засновників</h3>
          <table className="founders-table" border="1" cellPadding="5" cellSpacing="0" tabIndex="0">
            <caption><h3>Команда засновників</h3></caption>
            <thead>
              <tr>
                <th rowSpan="2">Ім'я</th>
                <th rowSpan="2">Посада</th>
                <th colSpan="2">Освіта</th>
                <th rowSpan="2">Досвід</th>
              </tr>
              <tr>
                <th>Університет</th>
                <th>Ступінь</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td 
                  onMouseEnter={() => handleNameHover("Іваненко Олексій")}
                  style={{cursor: 'help'}}
                >
                  Іваненко Олексій
                </td>
                <td>CEO</td>
                <td>КНУ</td>
                <td>Магістр</td>
                <td>10 років</td>
              </tr>
              <tr>
                <td
                   onMouseEnter={() => handleNameHover("Петренко Марія")}
                   style={{cursor: 'help'}}
                >
                  Петренко Марія
                </td>
                <td>CTO</td>
                <td>КПІ</td>
                <td>Доктор наук</td>
                <td>8 років</td>
              </tr>
              <tr>
                <td
                   onMouseEnter={() => handleNameHover("Коваленко Андрій")}
                   style={{cursor: 'help'}}
                >
                  Коваленко Андрій
                </td>
                <td>Lead Developer</td>
                <td>НТУ</td>
                <td>Магістр</td>
                <td>6 років</td>
              </tr>
              <tr>
                <td 
                  rowSpan="2"
                  onMouseEnter={() => handleNameHover("Сидоренко Світлана")}
                  style={{cursor: 'help'}}
                >
                  Сидоренко Світлана
                </td>
                <td rowSpan="2">Дизайнер</td>
                <td>КНУТД</td>
                <td>Бакалавр</td>
                <td>5 років</td>
              </tr>
              <tr>
                <td>Харківський університет</td>
                <td>Магістр</td>
                <td>4 роки</td>
              </tr>
              <tr>
                <td
                   onMouseEnter={() => handleNameHover("Мельник Дмитро")}
                   style={{cursor: 'help'}}
                >
                  Мельник Дмитро
                </td>
                <td>Маркетинг-директор</td>
                <td>КНЕУ</td>
                <td>Магістр</td>
                <td>7 років</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="4" style={{textAlign: 'right'}}>Середній досвід команди</th>
                <td>7 років</td>
              </tr>
            </tfoot>
          </table>
        </aside>

        <section>
          <p className="bottom-nav-links">
            <Link to="/projects">Переглянути проєкти</Link> |{' '}
            <Link to="/review">Відгуки про нас</Link> |{' '}
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a> |{' '}
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </p>
          <p className="btn-container">
            <button type="button" className="btn btn-secondary" onClick={() => alert("Перехід у кабінет")}>
              Перейти у власний кабінет
            </button>
            <button type="button" className="btn btn-primary" onClick={() => alert("Реєстрація")}>
              Зареєструватись
            </button>
          </p>
          <p className="info-block">
            Наш <span style={{ color: 'green' }}><b><em><i><u>TechNova</u></i></em></b></span> — це команда професіоналів, <span>які прагнуть створити <em>краще майбутнє</em></span>.
            <span>TechNova прагне впроваджувати інновації для покращення життя користувачів. </span>
            <i>Основою нашого успіху є використання сучасних технологій. </i>
            <b>Ми створюємо продукти, які вирішують реальні проблеми. </b>
            <em>Наш стартап підтримує розвиток екологічно чистих технологій. </em>
            <u>Залучення користувачів і партнерів є нашим пріоритетом.</u>
          </p>
        </section>
      </main>
      {modalOpen && (
        <RiddleModal 
          founder={currentFounder} 
          onClose={() => setModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Home;