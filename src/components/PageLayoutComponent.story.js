import React from 'react';
import { storiesOf } from '@storybook/react';
import PageLayoutComponent from './PageLayoutComponent';

import PalletComponent from './PalletComponent';
import PalletColorComponent from './PalletColorComponent';
import CurrentColorComponent from './CurrentColorComponent';
import CanvasComponent from './CanvasComponent';
import PixelComponent from './PixelComponent';


storiesOf('PageLayoutComponent', module).add("Happy Path!", () =>
  <PageLayoutComponent>
    <CanvasComponent />
    <CurrentColorComponent />
    <PalletComponent />
  </PageLayoutComponent>
)