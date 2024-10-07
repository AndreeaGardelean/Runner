import MapComponent from '../components/MapComponent.js';
import StartBar from '../components/StartBar.js';

/**
 * Function holds all elements of the home page.
 * 
 * @returns <div> element containing elements of the home page
 */
export default function Home() {
  const activityData = {
    title: 'The first activity',
    date: 'Oct 01, 2024 at 11:41',
    distance: '4.10',
    time: '30:55',
    pace: '7:20',
    calories: '200'
  }

  async function saveActivity() {
    try {
      
      console.log(localStorage.getItem('userId'))
        const response = await fetch(`http://localhost:8080/runner/activity/create?userId=${localStorage.getItem("userId")}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(activityData),
          credentials: 'include'
        });

        if (response.status === 201) {
            console.log('ACTIVITY ADDED!');
        } else {
            console.error('Failed to add activity:', response.status, response.statusText);
        }

    } catch (e) {
        console.error('UNABLE TO SAVE ACTIVITY => ', e);
    }
}


  return (
    <div>
      <MapComponent />
      <StartBar onClick={saveActivity} />
    </div>
  )
}