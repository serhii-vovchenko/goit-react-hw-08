import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
      {!isLoggedIn ? (
        <div className={s.container}>
          <h1>Welcome to Your New Way of Managing Contacts!</h1>
          <p>
            Discover a revolutionary approach to organizing and maintaining your
            connections. Our app offers a streamlined and intuitive way to keep
            track of all your valuable contacts with ease.
          </p>
          <p>
            Focus on what really matters — the people in your life. Whether it's
            staying in touch with friends, family, or colleagues, our app
            ensures you stay connected effortlessly. Enjoy a seamless experience
            with minimal effort and maximum convenience.
          </p>
          <p>
            <strong>Organize your communication</strong> with unmatched
            simplicity, accessibility, and reliability. All of this awaits you
            in our app, designed to enhance your contact management experience
            and make your life easier.
          </p>
          <button type="button">
            <Link to="register">Get Started</Link>
          </button>
        </div>
      ) : (
        <div className={s.container}>
          <h1>Welcome Back, {user.name}!</h1>
          <p>
            We’re thrilled to see you again! You’re now ready to manage your
            contacts more effectively than ever.
          </p>
          <p>
            Your contact management hub is your central place for all things
            related to your connections. From here, you can effortlessly manage
            your contact list, access important details, and navigate through
            all the features designed to enhance your communication.
          </p>

          <p>
            Should you encounter any questions or require assistance at any
            point, our dedicated support team is always available to help you.
            Whether you need guidance on using certain features or have specific
            concerns, we’re just a message away.
          </p>
          <p>
            We’re committed to ensuring you have a smooth and productive
            experience. Dive in and make the most of our tools to stay connected
            and organized. Wishing you a productive and successful day!
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
