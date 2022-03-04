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

export const DrugGrid = () => {
  const drugs: Drug[] = [
    {
      drugNameIndex: 213,
      amount: 20,
      unit: 'mg',
      hasPrescription: true,
    },
    {
      drugNameIndex: number('drugNameIndex2', 421),
      amount: number('amount2', 10),
      unit: select('Drug Unit2', ['mg', 'gram'], 'mg'),
      hasPrescription: boolean('hasPrescription2', true),
    },
    {
      drugNameIndex: number('drugNameIndex3', 21),
      amount: number('amount3', 5),
      unit: select('Drug Unit3', ['mg', 'gram'], 'gram'),
      hasPrescription: boolean('hasPrescription3', false),
    },
    {
      drugNameIndex: number('drugNameIndex4', 321),
      amount: number('amount4', 50),
      unit: select('Drug Unit4', ['mg', 'gram'], 'mg'),
      hasPrescription: boolean('hasPrescription4', true),
    },
    {
      drugNameIndex: number('drugNameIndex5', 500),
      amount: number('amount5', 120),
      unit: select('Drug Unit5', ['mg', 'gram'], 'mg'),
      hasPrescription: boolean('hasPrescription5', true),
    },
  ];

  return (
    <Grid container spacing={0.5} direction={'row'}>
      {drugs.map(drug => (
        <Grid item sm={6} md={4} lg={3}>
          <DrugCard drug={drug}></DrugCard>
        </Grid>
      ))}
    </Grid>
  );
};
