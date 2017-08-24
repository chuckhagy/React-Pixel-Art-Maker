import React from 'react';
import { storiesOf } from '@storybook/react';
import CurrentColorComponent from './CurrentColorComponent';

storiesOf('CurrentColorComponent', module).add("Happy Path!", () =>
  <CurrentColorComponent />
)