import "./App.scss";
import { FaPlus } from "react-icons/fa6";
import { FaOdnoklassniki } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
const App = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="nav_container">
            <div className="logo">
              <img src="./images/logo.png" alt="bu yerda rasm bor" />
              <p>
                Международный педагогический портал (лицензия на осуществление
                образовательной деятельности №9757-л, свидетельство о
                регистрации СМИ №ЭЛ ФС 77-65391)
              </p>
            </div>
            <div className="call">
              <h2>8 (800) 350 -54-64</h2>
              <p>звонок бесплатный </p>
              <h3>org.komitet@solncesvet.ru</h3>
            </div>
          </div>
        </nav>
        <div className="about_header">
          <div className="header_box">
            <div className="text">
              <div className="big_text">
                <h2>Запишитесь на курс</h2>
                <h1>нейро</h1>
                <p>педагогика</p>
              </div>
              <div className="box_text">
                <img src="./images/check.png" alt="bu yerda rasm bor" />
                <p>
                  Получите рабочие инструменты от эксперта практика и решите
                  текущие вопросы
                </p>
              </div>
              <div className="box_bonus">
                <img src="./images/bonus.png" alt="" />
              </div>
              <button>принять участие</button>
            </div>
            <div className="back_image">
              <img src="./images/women.png" alt="bu yerda rasm bor" />
            </div>
            <div className="box_women">
              <p>Ведущий курса</p>
              <h2>Хотылева татьяна</h2>
              <h3>
                кандидат педагогических наук, эксперт в области инклюзивного
                образования
              </h3>
            </div>
          </div>
          
        </div>
       
      </header>
      <main>
      <div className="course">
      <div className="start">
        <h1>этот курс для вас, если</h1>
      </div>
      <div className="course_boxes">
        <div className="c_box">
          <div className="text">
            <p>
            Вам кажется, что вы ничему не можете научить ребенка (режимные моменты и говорить спасибо)
            </p>
          </div>
          <div className="image">
            <img src="./images/course1.png" alt="bu yerda rasm bor" />
          </div>
        </div>
        <div className="c_box">
          <div className="text">
            <p>
            Вам кажется, что полученные в институте знания
не применимы
к текущему поколению детей
            </p>
          </div>
          <div className="image">
            <img src="./images/course2.png" alt="bu yerda rasm bor" />
          </div>
        </div> 
        <div className="c_box">
          <div className="text">
            <p>
            Вы не знаете как педагогу работать с классом, в котором есть дети с особенностями развития.
            </p>
          </div>
          <div className="image">
            <img src="./images/course3.png" alt="bu yerda rasm bor" />
          </div>
        </div> 
        <div className="c_box">
          <div className="text">
            <p>
            Вы не знаете как помочь ребенку управлять своим вниманием
            </p>
          </div>
          <div className="image">
            <img src="./images/course4.png" alt="bu yerda rasm bor" />
          </div>
        </div>
      </div>
      </div>
      <div className="help">
        <div className="start2">
          <p>Почему именно курс <br />
по нейропсихологии поможет вам:</p>
        </div>
        <div className="help_boxes">
          <div className="h_box">
            <img className="help1" src="./images/help2.png" alt="bu yerda rasm bor" />
            <p>Практико ориентированный <span> курс от эксперта практика</span></p>
            <img className="help2" src="./images/star.png" alt="bu yerda rasm bor" />
          </div>
          <div className="h_box">
            <img className="help1" src="./images/help2.png" alt="bu yerda rasm bor" />
            <p>Практико ориентированный <span> курс от эксперта практика</span></p>
            <img className="help2" src="./images/star.png" alt="bu yerda rasm bor" />
          </div> 
          <div className="h_box">
            <img className="help1" src="./images/help2.png" alt="bu yerda rasm bor" />
            <p>Практико ориентированный <span> курс от эксперта практика</span></p>
            <img className="help2" src="./images/star.png" alt="bu yerda rasm bor" />
          </div>
        </div>
      </div>
      <div className="teach">
        <div className="start3">
  <div className="st3_cont">
    <h3>Успейте принять участие
<span>осталось 17 мест</span></h3>
<button className="st3_btn">принять участие</button>
</div>
        </div>
        <div className="teach_boxes">
            <div className="t_box">
            <div className="t_image">
            <img src="./images/teach1.png" alt="bu yerda rasm bor" />
            </div>
              <h2>возьмете</h2>
              <p>в работу нейропсихологические принципы, которые помогут предупреждать и преодолевать трудности обучения у детей.</p>
            </div>
           <div className="t_box2">
            <h1>на курсе вы:</h1>
           <div className="t_box">
          <div className="t_image">
          <img src="./images/teach2.png" alt="bu yerda rasm bor" />
          </div>
            <h2>научитесь</h2>
            <p>проводить экспресс-диагностику класса (группы, отдельного ребенка).</p>
          </div> 
           </div>
          <div className="t_box">
          <div className="t_image">
          <img src="./images/teach3.png" alt="bu yerda rasm bor" />
          </div>
            <h2>поймете</h2>
            <p>как использовать нейропсихологический подход для адаптации учебных материалов, чтобы достигать лучших результатов в обучении, в том числе и у детей с особенностями развития..</p>
          </div>
        </div>
      </div>
      <div className="certificate">
        <div className="start4">
          <h1>вы получите</h1>
        </div>
        <div className="cerf_boxes">
          <div className="cerf_box">
            <img className="c_image1" src="./images/star.png" alt="bu yerda rasm bor" />
            <p>Удостоверение о повышении квалификации о прохождении курса <span>"Основы нейропедагогического подхода”</span>
в объеме 72 часов.</p>
<button className="cerf_btn">получить удостоверение</button>
          </div>
          <div className="cerf_box">
            <img className="c_image2"  src="./images/cerfimage.png" alt="bu yerda rasm bor" />
           
          </div>
        </div>
      </div>
      <div className="bonus">
        <div className="start5">
          <h1>Бонусом каждый участник получит дополнительные материалы:</h1>
          <div className="bonus_boxes">
            <div className="b_box">
              <img className="b2_img1"  src="./images/star.png" alt="bu yerda rasm bor" />
              <div className="b_text">
              <img src="./images/bonus1.png" alt="bu yerda rasm bor" />
              <p>Список пособий с применением нейропсихологического подхода</p>
              </div>
            </div>
            <div className="b_box">
              <img className="b2_img2" src="./images/star.png" alt="bu yerda rasm bor" />
              <div className="b_text">
              <img src="./images/bonus2.png" alt="bu yerda rasm bor" />
              <p>Список пособий с применением нейропсихологического подхода</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="expert">
        <div className="start6">
          <h1>об эксперте</h1>
          <div className="e_box">
            <div className="e_text">
              <h2>Хотылева Татьяна Юрьевна</h2>
              <ul>
                <li><img src="./images/check.png" alt="bu yerda rasm bor" /><p>Кандидат <span>педагогических наук</span></p></li>
                <li><img src="./images/check.png" alt="bu yerda rasm bor" /><p><span>Эксперт в области инклюзивного образования
в работе с детьми</span> с РАС, СВДГ и другими нозологиями</p></li>
                <li><img src="./images/check.png" alt="bu yerda rasm bor" /><p><span>Работала директором уникальной общеобразовательной школы</span> с нейропсихологическим подходом в Москве, поэтому понимает трудности, с которыми сталкиваются учителя при работе с массовым классом</p></li> 
                <li><img src="./images/check.png" alt="bu yerda rasm bor" /><p><span>Помогает детям с особенностями развития</span> достигать высоких результатов в обучении</p></li> 
                <li><img src="./images/check.png" alt="bu yerda rasm bor" /><p><span>Автор множества методических и дидактических работ</span></p></li>
              </ul>
            </div>
            <div className="e_img">
              <img src="./images/expert.png" alt="bu yerda rsam bor" />
            </div>
          </div>
        </div>
      </div>
      <div className="month">
        <div className="start7">
          <h1>старт курса 15 февраля</h1>
          <button className="m_btn">принять участие</button>
        </div>
        <div className="month_box">
          <h1>часто задаваемые вопросы</h1>
          <div className="m_box">
            <ul>
              <li><p>Будут ли записи занятий?</p><FaPlus /></li>
              <li><p>Сопровождаете ли вы до получения практического результата?</p><FaPlus /></li>
              <li><p>Как будут проходить занятия</p><FaPlus /></li>
              <li><p>Как я получу удостоверение о повышении квалификации?</p><FaPlus /></li>

            </ul>
          </div>
        </div>
      </div>
      
      </main>
      <footer>
        <div className="footer_box">
          <div className="f_logo">
            <img src="./images/logo.png" alt="bu yerda rsam bor" />
            <ul>
              <li>660075, КРАСНОЯРСК УЛ. МАЕРЧАКА</li>
              <li> 31Α, ΠΟΜ. 15. КАБ. 48 </li>
              <li>119049, МОСКВА 1-Й-ДОБРЫНинский </li>
              <li>ПЕРЕУЛОК 6</li>
              <li>РЕЖИМ РАБОТЫ:</li>
              <li>ПН-СБ С 9.00 ДО 20:00</li>
              <li>2016-2024 СЕТЕВОЕ ИЗДАНИЕ "СОЛНЕЧНЫЙ СВЕТ, О</li>
            </ul>
          </div>
        <ul>
          <li>Курсы повышения квалификации</li>
          <li>Тестирование для педагогов</li>
          <li>Олимпиады</li>
          <li>Викторины</li>
          <li>Творческий конкурс</li>
          <li>Опубликовать материал на сайте</li>
          <li>Опубликовать статью в печатном сборнике</li>
          <li>Заказать рецензию</li>
          <li>Пользовательское соглашение</li>
          <li>Политика конфиденциальности</li>
          <li>Реквизиты</li>
        </ul>
        <ul>
          <li>Курсы повышения квалификации</li>
          <li>Тестирование для педагогов</li>
          <li>Олимпиады</li>
          <li>Викторины</li>
          <li>Творческий конкурс</li>
          <li>Опубликовать материал на сайте</li>
          <li>Опубликовать статью в печатном сборнике</li>
          <li>Заказать рецензию</li>
          <li>Пользовательское соглашение</li>
          <li>Политика конфиденциальности</li>
          <li>Реквизиты</li>
        </ul> 
        <ul>
          <li>Курсы повышения квалификации</li>
          <li>Тестирование для педагогов</li>
          <li>Олимпиады</li>
          <li>Викторины</li>
          <li>Творческий конкурс</li>
          <li>Опубликовать материал на сайте</li>
          <li>Опубликовать статью в печатном сборнике</li>
          <li>Заказать рецензию</li>
          <li>Пользовательское соглашение</li>
          <li>Политика конфиденциальности</li>
          <li>Реквизиты</li>
        </ul>
        </div>
        <div className="footer_icons">
          <ul>
            <li><FaOdnoklassniki /></li>
            <li><AiOutlineYoutube /></li>
            <li><TbBrandTelegram /></li>
            <li><FaWhatsapp /></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
