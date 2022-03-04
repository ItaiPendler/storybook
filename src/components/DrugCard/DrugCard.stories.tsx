import React from 'react';
import DrugCard, { Drug } from '.';
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs';
import { Grid, Stack } from '@mui/material';
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
  const drug = {
    drugNameIndex,
    amount,
    unit,
    hasPrescription,
  };
  return <DrugCard drug={drug}></DrugCard>;
};
  return (
    <DrugCard
      drugNameIndex={drugNameIndex}
      amount={amount}
      unit={unit}
      hasPrescription={hasPrescription}
    ></DrugCard>
  );
};
