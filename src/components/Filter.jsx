function Filter(props) {
	return (
	  <button type="button"
      className="filter-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      {props.name}
    </button>
		);
}
export default Filter;