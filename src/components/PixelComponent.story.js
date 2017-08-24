import React from 'react';
import { storiesOf } from '@storybook/react';
import PixelComponent from './PixelComponent';

storiesOf('PixelComponent', module).add("Happy Path!", () =>
  <PixelComponent />
)