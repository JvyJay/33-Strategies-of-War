import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const SearchForm = props => {
  return (
    <div className='container'>
      <Form className='justify-content-center align-items-center'>
        <FormGroup>
          <Input
            type='text'
            placeholder='Search'
            value={props.value}
            onChange={props.handle}
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchForm;
