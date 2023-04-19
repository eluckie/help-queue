import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewTicketForm(props) {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      // numberOfStudents: parseInt(event.target.numberOfStudents.value) MUST PARSE NUMBERS ATP
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <hr/>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
          <br/>
        <input
          type='text'
          name='location'
          placeholder='Location' />
          <br/>
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
          <br/>
        <button type='submit'>Help!</button>
      </form>
      <br/><br/>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;