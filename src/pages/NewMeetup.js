import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  // function handler that get meetupData object from 
  // the child component NewMeetupForm and makes http request
  function handlerAddMeetup(meetupData) {
    // possible use the 3rd party libraries as e.g. axios instead of the 'fetch()'
    // URL: used FIREBASE real-time database created at https://firebase.google.com/
    //      that provides free service to connect and work with the database
    // FIREBASE API: needs to add '.json' to the end of the url
    // URL: .../meetups.json - get collestion of meetups (all meetup records)
    fetch(
      'https://react-meetup-demo-ef36e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        // specify POST method becouse of storing data in DB
        method: 'POST',
        // specify JSON data object the data will be stored in DB for 
        body: JSON.stringify(meetupData),
        // specify header's content type to application/json and make it 
        // crystal clear that this request carries json data
        header: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  return(
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handlerAddMeetup} />
    </section>
  );
}

export default NewMeetupPage;