import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css')
  require('../src/components/PixelComponent.story')
  require('../src/components/CanvasComponent.story')
  require('../src/components/PalletComponent.story')
  require('../src/components/PalletColorComponent.story')
  require('../src/components/CurrentColorComponent.story')
  require('../src/components/PageLayoutComponent.story')
}
configure(loadStories, module);