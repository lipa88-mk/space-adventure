import './App.scss';
import logoIcon from './assets/icons/logo_GO.svg';
import cartIcon from './assets/icons/cart.svg';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header__wrap">
          <a
            className="header__logo logo"
            href="/"
            aria-label="GO — to the main page"
          >
            <img
              className="logo__icon"
              src={logoIcon}
              alt=""
              width={104}
              height={35}
            />
          </a>

          <nav className="header__nav nav" aria-label="Main navigation">
            <ul className="nav__list">
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
                  <img
                    className="cart__icon"
                    src={cartIcon}
                    alt=""
                    width={24}
                    height={20}
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
            <button type="button" className="button">
              Learn more
            </button>
          </div>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
