import css from './HomePage.module.css';
import imgSrc from './book.jpg';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1>Welcome to HomePage</h1>
      <h2>This is Contacts Book</h2>
      <img src={imgSrc} alt="homepage img" className={css.img} />
    </div>
  );
};

export default HomePage;
