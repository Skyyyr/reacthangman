function GuessForm(props) {
  let guess = "";

  const guessLetter = (e) => {
    guess = e.target.value.toLowerCase();
  };

  return (
    <div>
      <div className="input-group mb-3 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="..."
          maxLength="1"
          onChange={(e) => guessLetter(e)}
        ></input>
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={() => props.clickFunction(guess)}
        >
          Guess a Letter
        </button>
      </div>
    </div>
  );
}

export default GuessForm;
