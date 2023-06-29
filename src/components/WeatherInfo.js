import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTemperatureHalf, faDroplet, faCloudSunRain, faLocationDot, faSun } from '@fortawesome/free-solid-svg-icons';

export default function WeatherInfo({ temperature, name, humidity, uv }) {
  return (
    <div className="info">
      <div className="temperature"> {temperature}°F </div>
      <div className="rightSideInfo">
        <div className="weatherIcon"> <FontAwesomeIcon icon={faCloudSunRain} /> </div>
        <div className="wetherSunnyOrNot"> {name} </div>
        <div className="weatherInfo">
          <FontAwesomeIcon icon={faDroplet} /> {humidity}%   <FontAwesomeIcon icon={faSun} /> {uv}.
        </div>
      </div>
    </div>
  );
}
