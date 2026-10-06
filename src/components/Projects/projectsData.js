import githubBattleImg from '../../assets/carousel/github-battle.png';
import randomQuoteImg from '../../assets/carousel/random-quote.jpeg';
import weatherReportImg from '../../assets/carousel/weather-report.png';

export const projects = [
  {
    id: 'github-battle',
    title: 'GitHub Battle',
    category: 'React & API',
    subtitle: 'Competitive GitHub User Analytics & Comparison Platform',
    description:
      'A full-featured React web application that pits two GitHub profiles against each other. It interfaces with the official GitHub REST API to asynchronously pull user repositories, stargazers, forks, and followers, computing an objective battle score with comprehensive stat breakdowns.',
    image: githubBattleImg,
    demoUrl: 'https://nunulong.github.io/github-battle/',
    githubUrl: 'https://github.com/nunulong/github-battle',
    tags: ['React', 'GitHub REST API', 'JavaScript ES6+', 'React Router', 'CSS Grid'],
    featured: true,
    highlights: [
      'Asynchronous data fetching with graceful error and rate-limit handling',
      'Dynamic battle score algorithm factoring stars, public repos, and follower influence',
      'Popular repository leaderboard filterable by programming languages',
    ],
  },
  {
    id: 'weather-report',
    title: 'Weather Report',
    category: 'Real-Time API',
    subtitle: 'Atmospheric Forecast & Geolocation Application',
    description:
      'A modern real-time meteorological application delivering fast atmospheric forecasts. Integrates OpenWeather API with HTML5 Geolocation to detect user positions or search global cities, displaying temperature, humidity, wind velocity, and condition-specific visual cues.',
    image: weatherReportImg,
    demoUrl: 'https://nunulong.github.io/weatherReport/',
    githubUrl: 'https://github.com/nunulong/weatherReport',
    tags: ['JavaScript', 'OpenWeather API', 'Geolocation API', 'CSS3 Animations', 'Responsive'],
    featured: true,
    highlights: [
      'Automatic geolocation query with fallback city search',
      'Metric and Imperial temperature conversion toggles',
      'Responsive atmospheric card widgets with intuitive condition icons',
    ],
  },
  {
    id: 'random-quote',
    title: 'Random Quote Machine',
    category: 'React & UI',
    subtitle: 'Dynamic Inspiration Engine with Social Integration',
    description:
      'An aesthetic quote discovery application crafted in React. Automatically queries curated API quote endpoints, featuring smooth theme color morphing on each quote transition and direct one-click Twitter/X intent posting with automated citation formatting.',
    image: randomQuoteImg,
    demoUrl: 'https://nunulong.github.io/randomQuote/',
    githubUrl: 'https://github.com/nunulong/randomQuote',
    tags: ['React', 'REST API', 'CSS Transitions', 'Twitter Intent API', 'Web Accessibility'],
    featured: false,
    highlights: [
      'Synchronized color palette transitions matching inspirational moods',
      'Instant quote extraction via asynchronous API calls with loading states',
      'One-click Twitter/X intent sharing with prepopulated author hashtags',
    ],
  },
];
