import React from 'react';
import {
  FormInput,
  StyledForm,
  StyledSubmitInput,
  StyledSubmitDiv,
  StyledFormDiv,
} from './Form.style';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa';

const Form = () => {
  return (
    <StyledForm>
      <StyledFormDiv>
        <label htmlFor='name'>Name</label>
        <br />
        <FaUser
          style={{
            marginLeft: '0.5rem',
            position: 'absolute',
            marginTop: '0.4rem',
          }}
          color='#afafaf'
          size='1em'
        />
        <FormInput type='text' placeholder='Joy Shaheb' />
      </StyledFormDiv>

      <StyledFormDiv>
        <label htmlFor='email'>Email</label>
        <br />
        <FaEnvelope
          style={{
            marginLeft: '0.5rem',
            position: 'absolute',
            marginTop: '0.5rem',
          }}
          color='#afafaf'
          size='1em'
        />
        <FormInput type='email' placeholder='abc@gmail.com' />
      </StyledFormDiv>

      <StyledFormDiv>
        <label htmlFor='password'>Password</label>
        <br />
        <FaLock
          style={{
            marginLeft: '0.5rem',
            position: 'absolute',
            marginTop: '0.4rem',
          }}
          color='#afafaf'
          size='1em'
        />
        <FormInput
          type='password'
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
        />
      </StyledFormDiv>

      <StyledSubmitDiv>
        <StyledSubmitInput type='submit' value='Submit' />
      </StyledSubmitDiv>
    </StyledForm>
  );
};

export default Form;
