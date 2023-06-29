import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTemperatureHalf, faDroplet, faCloudSunRain, faLocationDot, faSun } from '@fortawesome/free-solid-svg-icons';
import Location from './components/Location';
import CurrentDate from './components/CurrentDate';
import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <div className="App">
      <Location location="Miami" />
      <CurrentDate />
      <div className="fill" />
      <WeatherInfo
        temperature={72}
        name="Sunny"
        humidity={62}
        uv={1}
      />
    </div>
  );
}

export default App;
