import { useSelector } from 'react-redux';
import Message from '../components/WelcomeMessage';
import styles from './HomePage.module.css';

const HomePage = () => {
  const show = useSelector((state) => state.show.showModal);
  return (
    <>
      {show && <Message />}
      <div className={styles.homeContainer}>
        <h1>Welcome to CodeStore</h1>
        <p>This is a demo page where I used the libraries listed below</p>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.libraryContainer}>
          <img
            className={styles.libraryImg}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
            alt="React Logo"
          />
          <h3>React</h3>
        </div>
        <div className={styles.libraryContainer}>
          <img
            className={styles.libraryImg}
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
            alt="Redux Logo"
          />
          <h3>Redux/Toolkit</h3>
        </div>
        <div className={styles.libraryContainer}>
          <img
            className={styles.libraryImg}
            src="https://crowdcast-prod.imgix.net/-KHhIzuATU2K4OVPd2sP/event-cover-5388?w=800"
            alt="React Bootstrap Logo"
          />
          <h3>React-Bootstrap</h3>
        </div>
        <div className={styles.libraryContainer}>
          <img
            className={styles.libraryImg}
            src="https://reactrouter.com/_brand/react-router-mark-color.png"
            alt="React Router Logo"
          />
          <h3>React-Router</h3>
        </div>
        <div className={styles.libraryContainer}>
          <img
            className={styles.libraryImg}
            src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
            alt="React Icons Logo"
          />
          <h3>React-Icons</h3>
        </div>
      </div>
    </>
  );
};

export default HomePage;
