import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Page404 from '../Page404/Page404';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route exact path="/blog" render={() => (window.location = "https://nunulong.github.io/ting-blog/")} />
        <Route path="/contact" component={Contact} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default Main;
