import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

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
      <ReusableForm
      formSubmissionHandler={handleNewTicketFormSubmission}
      buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;