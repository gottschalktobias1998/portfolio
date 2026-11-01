import {
  index,
  layout,
  route,
  type RouteConfig,
} from '@react-router/dev/routes'

export default [
  layout('./layouts/language-layout.tsx', [
    route('de', './layouts/german-layout.tsx', [
      index('./routes/de/home.tsx'),
      route('ueber-mich', './routes/de/about.tsx'),
      route('faehigkeiten', './routes/de/skills.tsx'),
      route('projekte', './routes/de/projects.tsx'),
      route('kontakt', './routes/de/contact.tsx'),
    ]),

    route('en', './layouts/english-layout.tsx', [
      index('./routes/en/home.tsx'),
      route('about', './routes/en/about.tsx'),
      route('skills', './routes/en/skills.tsx'),
      route('projects', './routes/en/projects.tsx'),
      route('contact', './routes/en/contact.tsx'),
    ]),
  ]),
] satisfies RouteConfig