export default function ComingSoon() {
  return (
    <div className="coming-soon">
      <header className="coming-soon__header">
        <a className="coming-soon__logo" href="/" aria-label="Startseite">
          TG
        </a>
      </header>

      <main className="coming-soon__main">
        <div className="coming-soon__content">
          <span className="coming-soon__badge">
            <span className="coming-soon__badge-dot" />
            IN ARBEIT
          </span>

          <h1 className="coming-soon__title">
            Etwas Neues
            <span>entsteht.</span>
          </h1>

          <p className="coming-soon__description">
            Meine Website wird derzeit aufgebaut.
            <br />
            Schau gerne bald wieder vorbei.
          </p>

          <a
            className="coming-soon__contact"
            href="mailto:kontakt@tobiasgottschalk.de"
          >
            kontakt@tobiasgottschalk.de
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </main>

      <footer className="coming-soon__footer">
        <span>© {new Date().getFullYear()} Tobias Gottschalk</span>
        <span>Mit Sorgfalt entwickelt.</span>
      </footer>
    </div>
  )
}