import React from 'react';
function Form() {
    function handleSubmit(e) {
      alert('Why art thou not taking sip');
      e.preventDefault();
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Pls proceed to take a sip!</button>
      </form>
    );
  }
  export default Form