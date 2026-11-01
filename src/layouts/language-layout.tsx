import { NavLink, Outlet, useLocation } from 'react-router'

const navigation = {
  de: [
    { label: 'Startseite', path: '/de/' },
    { label: 'Über mich', path: '/de/ueber-mich/' },
    { label: 'Fähigkeiten', path: '/de/faehigkeiten/' },
    { label: 'Projekte', path: '/de/projekte/' },
    { label: 'Kontakt', path: '/de/kontakt/' },
  ],
  en: [
    { label: 'Home', path: '/en/' },
    { label: 'About', path: '/en/about/' },
    { label: 'Skills', path: '/en/skills/' },
    { label: 'Projects', path: '/en/projects/' },
    { label: 'Contact', path: '/en/contact/' },
  ],
}

const languagePaths = {
  de: [
    '/de/',
    '/de/ueber-mich/',
    '/de/faehigkeiten/',
    '/de/projekte/',
    '/de/kontakt/',
  ],
  en: [
    '/en/',
    '/en/about/',
    '/en/skills/',
    '/en/projects/',
    '/en/contact/',
  ],
}

export default function LanguageLayout() {
  const location = useLocation()
  const language = location.pathname.startsWith('/en/') ? 'en' : 'de'

  const currentPaths = languagePaths[language]
  const otherLanguage = language === 'de' ? 'en' : 'de'
  const currentIndex = currentPaths.indexOf(location.pathname)

  const languageSwitchPath =
    languagePaths[otherLanguage][currentIndex >= 0 ? currentIndex : 0]

  return (
    <>
      <header className="site-header">
        <a className="site-logo" href={`/${language}/`}>
          TG<span>.</span>
        </a>

        <nav
          className="main-navigation"
          aria-label={language === 'de' ? 'Hauptnavigation' : 'Main navigation'}
        >
          {navigation[language].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === `/${language}/`}
              className={({ isActive }) =>
                isActive ? 'navigation-link active' : 'navigation-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          className="language-switch"
          to={languageSwitchPath}
          aria-label={
            language === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'
          }
        >
          {otherLanguage.toUpperCase()}
        </NavLink>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Tobias Gottschalk</p>
      </footer>
    </>
  )
}