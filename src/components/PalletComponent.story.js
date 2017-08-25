import React from 'react';
import { storiesOf } from '@storybook/react';
import PalletComponent from './PalletComponent';
import PalletColorComponent from './PalletColorComponent';

storiesOf('PalletComponent', module).add("Happy Path!", () =>
  <PalletComponent>
    <PalletColorComponent />
  </PalletComponent>
)