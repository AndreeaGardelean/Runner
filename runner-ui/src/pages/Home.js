import MapComponent from '../components/MapComponent.js';
import StartBar from '../components/StartBar.js';

/**
 * Function holds all elements of the home page.
 * 
 * @returns <div> element containing elements of the home page
 */
export default function Home() {
  return (
    <div>
      <MapComponent />
      <StartBar />
    </div>
  )
}