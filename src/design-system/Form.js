import React from 'react';
import system from '../utils/System';
import Grid from './Grid';

const StyledForm = system(
  'StyledForm',
  {
    extend: Grid,
    as: 'form',
    alignItems: 'center',
    gridGap: '0.5rem',
    layout: 'horizontal',
  },
  props => ({
    gridColumnTemplate: props.layout === 'horizontal' ? '1fr 2fr' : '1fr',
  }),
);

const Form = ({ children, ...props }) => (
  <StyledForm {...props}>{children}</StyledForm>
);

export default Form;
