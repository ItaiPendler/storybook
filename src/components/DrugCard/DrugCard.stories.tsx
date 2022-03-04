import React from 'react';
import DrugCard from '.';
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs';
export default {
  title: 'Components/Card',
  component: DrugCard,
  decorators: [withKnobs],
};

export const Playground = () => {
  const drugNameIndex = number('Drug Index', 0);
  const amount = number('Drug Amount', 10);
  const unit = select('Drug Unit', ['mg', 'gram'], 'mg');
  const hasPrescription = boolean('hasPrescription', true);
  return (
    <DrugCard
      drugNameIndex={drugNameIndex}
      amount={amount}
      unit={unit}
      hasPrescription={hasPrescription}
    ></DrugCard>
  );
};
