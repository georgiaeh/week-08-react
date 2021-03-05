import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
  } from "react-router-dom";

import Header from "./components/Day01/Header";
import Footer from "./components/Day04/Footer";
import Stuff from "./components/Day01/Stuff";
import Clicked from "./components/Day02/Clicked";
import Square2 from "./components/Day02/Square2";
import ToggleText from "./components/Day02/ToggleText";
import Counter from "./components/Day02/Counter";
import StepCounter from "./components/Day02/StepCounter";
import CatchMeIfYouCan from "./components/Day02/CatchMeIfYouCan";
import RollCall from "./components/Day02/RollCall";
import Colours from "./components/Day02/Colours";
import Die from "./components/Day02/Die";
import LameGame from "./components/Day02/LameGame";
import Length from "./components/Day03/Length";
import PasswordStrength from "./components/Day03/PasswordStrength";
import TempConverter from './components/Day03/TempConverter';
import List from "./components/Day03/List";
import Adder from "./components/Day03/Adder";
import Transform from "./components/Day03/Transform";
import Form from "./components/Day03/Form";
import GodCounter from "./components/Day03/GodCounter";
import TwoCounters from "./components/Day03/TwoCounters";
import LightBox from "./components/Day03/LightBox";
import Timer from "./components/Day03/Timer";
import ThreeCounters from "./components/Day03/ThreeCounters";
import Square from './components/Day01/Square';
import FourOhFour from './components/Day04/FourOhFour';
import Multiplier from './components/Day05/Multiplier';
import EvenClick from './components/Day05/EvenClick';
import CountBy from './components/Day05/CountBy';
import HideMe from './components/Day05/HideMe';
import MinimumLength from './components/Day05/MinimumLength';

let names = ["Taylor", "Estee", "Alana", "Danielle"]
let colours = [
  "#C14412",
  "#EBB31A",
  "#8F5318",
  "#009EAD",
  "#395967",
];

let images = [
  "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1614599106944-35688ad5119a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1614795049603-74ed8d9949d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"

]

const App = () => (
  <Router>
    <div className="container">

    <Header>Hello there! </Header>

    <Switch >

      <Route exact path="/">
        <h1>Learning React</h1>
        <p>Components that I built using React</p>
        <p>React and I are becoming friends</p>
      </Route>

      <Route exact path="/noprops">
        <Clicked /> 
      </Route>

      <Route exact path="/props">
        <Stuff square = {true}/>
        <Square2 colour = "blue"/> 
        <ToggleText initial = "hello" alternate = "world" />
        <RollCall names = { names }/>
        <Colours colours = { colours } />
      </Route>

      <Route path="/square/:colour" render={ ({match}) => (
        <Square colour = {match.params.colour}/> 
        )} />

      <Route path="/steps/:max/:step" render={ ({match}) => (
        <StepCounter max={ match.params.max} step={ match.params.step } />
      )} />
      
      <Route exact path="/otherstuff">
        <br></br>
        <h1>LightBox</h1>
        <LightBox src = { images }/>
        <Timer start = { 10 }/>
      </Route>

      <Route exact path="/forms">
        <Length />
        <PasswordStrength />
        <TempConverter />
        <List />
        <Adder />
        <Form fields = { ["First Name", "Last Name", "Email" ] } />
        <Transform transform = {x => x * x} />
      </Route>

      <Route exact path="/counters">
        <Counter initial = {50} max = {100} />
        <StepCounter max={ 100 } step={ 5 } />
        <GodCounter />
        <TwoCounters />
        <ThreeCounters />
      </Route>

      <Route exact path="/games">
        <Die sides = { 6 } />
        <LameGame aim = {10} />
        <CatchMeIfYouCan jump={ 100 } />
      </Route>

      <Route exact path="/quiz">
        <Multiplier x={5} y={7}/>
        <EvenClick />
        <HideMe> Blah blah blah</HideMe>
        <MinimumLength length = {30} />
      </Route>

      <Route path="/count-by/:step"  render={ ({match}) => (
        <CountBy step = {match.params.step} /> )} />

      <Route path="/minimum/:length"  render={ ({match}) => (
        <MinimumLength length = {match.params.length} /> )} />

      <Route path="/multiplier/:x/:y"  render={ ({match}) => (
        <Multiplier x = {match.params.x} y = {match.params.y}/> )} />

      <FourOhFour />

    </Switch>

    <Footer />

    </div>

  </Router>
);
  

export default App;
