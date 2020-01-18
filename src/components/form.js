import React from "react";
import { Field, reduxForm } from "redux-form";

let SearchForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="serchPath" component="input" type="text" />
        <button type="submit">Начать</button>
      </div>
    </form>
  );
};

SearchForm = reduxForm({
  form: "search"
})(SearchForm);

export default SearchForm;
