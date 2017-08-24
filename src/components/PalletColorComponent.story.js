import React from 'react';
import { storiesOf } from '@storybook/react';
import PalletColorComponent from './PalletColorComponent';

storiesOf('PalletColorComponent', module).add("Happy Path!", () =>
  <PalletColorComponent />
)