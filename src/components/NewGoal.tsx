import { type FormEvent } from "react";

const NewGoal = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal"></label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary"></label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
