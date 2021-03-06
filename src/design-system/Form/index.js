import React from 'react';
import system from '../utils/system';
import Grid from '../Grid';

const StyledForm = system('StyledForm', {
  extend: Grid,
  as: 'form',
  alignItems: 'center',
  gridGap: '0.5rem',
  gridTemplateColumns: 'auto 1fr',
});

const Form = ({ children, ...props }) => (
  <StyledForm {...props}>{children}</StyledForm>
);

export default Form;
