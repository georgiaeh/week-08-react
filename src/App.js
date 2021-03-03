import './App.css';
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

let names = ["Taylor", "Estee", "Alana", "Danielle"]
let colours = [
  "#C14412",
  "#EBB31A",
  "#8F5318",
  "#009EAD",
  "#395967",
];

const App = () => (
  <div className="container">
    <Stuff square = {true}/>
    <Clicked />
    <Square2 colour = "blue"/>
    <ToggleText initial = "hello" alternate = "world" />
    <Counter initial = {50} max = {100} />
    <StepCounter max={ 100 } step={ 5 } />
    <CatchMeIfYouCan jump={ 100 } />
    <RollCall names = { names }/>
    <Colours colours = { colours } />
    <Die sides = { 6 } />
    <LameGame aim = {10} />
    <Length />
    <PasswordStrength />
    <TempConverter />
    <List />
    <Adder />
  </div>
);
  

export default App;
