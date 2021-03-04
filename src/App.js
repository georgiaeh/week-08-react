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
import Transform from "./components/Day03/Transform";
import Form from "./components/Day03/Form";
import GodCounter from "./components/Day03/GodCounter";
import TwoCounters from "./components/Day03/TwoCounters";
import LightBox from "./components/Day03/LightBox";
import Timer from "./components/Day03/Timer";

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
    <Transform transform = {x => x * x} />
    <Form fields = { ["First Name", "Last Name", "Email" ] } />
    <GodCounter />
    <TwoCounters />
    <br></br>
    <h1>LightBox</h1>
    <LightBox src = { images }/>
    <Timer start = { 10 }/>
  </div>
);
  

export default App;
