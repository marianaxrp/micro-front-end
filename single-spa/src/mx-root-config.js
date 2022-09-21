import {registerApplication, start} from 'single-spa';

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: '@mx/react-single',
  app: () => System.import('@mx/react-single'),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: '@mx/react-multiples',
  app: () => System.import('@mx/react-multiples'),
  activeWhen: ['/react-multiples'],
});

registerApplication({
  name: '@mx/react-lazy',
  app: () => System.import('@mx/react-lazy'),
  activeWhen: ['/react-lazy'],
});

registerApplication({
  name: '@mx/react-route',
  app: () => System.import('@mx/react-route'),
  activeWhen: (location) => location.pathname === '/react-route',
});

registerApplication({
  name: '@mx/react-header',
  app: () => System.import('@mx/react-header'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
