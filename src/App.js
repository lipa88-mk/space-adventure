import { useState } from 'react';
import './App.scss';
import { ReactComponent as LogoIcon } from './assets/icons/logo_GO.svg';
import { ReactComponent as MenuBurgerIcon } from './assets/icons/burger.svg';
import { ReactComponent as MenuCrossIcon } from './assets/icons/cross.svg';
import cartIconUrl from './assets/icons/cart.svg';

const offers = [
  {
    id: 1,
    title: 'Move the borders of reality!',
    text: "Go on a space adventure - it's possible with us!",
    isWide: true,
  },
  {
    id: 2,
    title: 'Space is not just stars and planets',
    text: 'Go on a space adventure',
  },
  {
    id: 3,
    title: 'For those who dream of stars',
    text: 'Our offer: make your dream come true',
  },
  {
    id: 4,
    title: 'Fulfill your fantastic dreams',
    text: 'Space has never been so close',
    isWide: true,
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="page">
      <header className="header">
        <div className="container header__wrap">
          <a
            className="header__logo logo"
            href="/"
            aria-label="GO — to the main page"
          >
            <LogoIcon className="logo__icon" width={104} height={34} />
          </a>

          <nav className="header__nav nav" aria-label="Main navigation">
            <button
              type="button"
              className="nav__button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <MenuCrossIcon width={30} height={30} aria-hidden="true" />
              ) : (
                <MenuBurgerIcon width={30} height={30} aria-hidden="true" />
              )}
            </button>
            <ul
              id="main-menu"
              className={`nav__list${isMenuOpen ? ' nav__list--open' : ''}`}
            >
              <li className="nav__item">
                <a className="nav__link" href="/" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav__item">
                <a
                  className="nav__link nav__link--icon"
                  href="/cart"
                  aria-label="Cart"
                >
                  <span
                    className="cart__icon"
                    style={{ '--icon': `url(${cartIconUrl})` }}
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="page__main">
        <section className="hero">
          <div className="container hero__wrap">
            <h1 className="hero__title">
              Discover the vast
              <br />
              expanses of <span className="brand">space</span>
            </h1>
            <p className="hero__description">
              Where the possibilities are{' '}
              <span className="accent">endless!</span>
            </p>
            <button type="button" className="button button--accent">
              Learn more
            </button>
          </div>
        </section>

        <section className="offers container">
          <h2 className="offers__title">Offers</h2>

          <ul className="offers__list">
            {offers.map(({ id, title, text, isWide }) => (
              <li
                className={`offers__item${isWide ? ' offers__item--wide' : ''}`}
                key={id}
              >
                <article
                  className={`offer-card offer-card--${id}${
                    isWide ? ' offer-card--wide' : ''
                  }`}
                >
                  <h3 className="offer-card__title">{title}</h3>
                  <p className="offer-card__text">{text}</p>
                  <button className="offer-card__button button" type="button">
                    Learn more
                  </button>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="journey container">
          <h2 className="journey__title">Embark on a space journey</h2>
          <input
            className="journey__toggle visually-hidden"
            type="checkbox"
            id="journey-toggle"
          />
          <p className="journey__text">
            Travelling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
          </p>
          <div className="journey__more">
            <div className="journey__more-inner">
              <p className="journey__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <label className="journey__link" htmlFor="journey-toggle">
            <span className="journey__link-more">Read more</span>
            <span className="journey__link-less">Hide</span>
          </label>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer__text">Exciting space adventure!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
