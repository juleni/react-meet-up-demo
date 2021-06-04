function MeetupItem(props) {
  render (
    <li>
      <div>
        <img src={props.image} alt={props.title}></img>
      </div>
      <div>
        <h3>TITLE</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;