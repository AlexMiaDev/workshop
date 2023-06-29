import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Location({ location }) {
  return (
    <div className="location">
      <FontAwesomeIcon icon={faLocationDot} /> {location}
    </div>
  )
}
