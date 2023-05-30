import { Meta } from '@storybook/react';
import Slider from '../components/Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  args: {
    list: ['1', '5'],
    max: 10,
    min: 1,
    step: 0.2,
    suffix: 'px',
  },
} as Meta<typeof Slider>;

export { Slider };
