import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {

  // create reference to the input elements of the form
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    // read values from input elements of the form
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    }

    console.log(meetupData);
  }

  return(
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input 
            type="text"
            required 
            id="title" 
            ref={titleInputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image URL (http://...)</label>
          <input 
            type="url" 
            required 
            id="image"
            ref={imageInputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            required 
            id="address"
            ref={addressInputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea 
            rows="5" 
            required 
            id="description"
            ref={descriptionInputRef}
           />
        </div>
        <div className={classes.actions}>
          <button className="control">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;