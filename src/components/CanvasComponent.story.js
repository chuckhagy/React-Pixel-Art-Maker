import React from 'react';
import { storiesOf } from '@storybook/react';
import CanvasComponent from './CanvasComponent';
import PixelComponent from './PixelComponent'


storiesOf('CanvasComponent', module).add("Happy Path!", () =>
  <CanvasComponent>
    <PixelComponent />
  </CanvasComponent>
)