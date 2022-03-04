import { Card, CardContent, Typography, CardActions, Button, withStyles } from '@mui/material';
import React, { ReactElement } from 'react';
import { Box, styled } from '@mui/system';
import { Medication } from '@mui/icons-material';
import { drugs } from '../../utils/drugsUtils';

export type Drug = {
  drugNameIndex: number;
  amount: number;
  unit: 'mg' | 'gram';
  hasPrescription: boolean;
};

interface DrugCardProps {
  drug: Drug;
}

const DrugCard: React.FC<DrugCardProps> = ({ drug }) => {
  const { drugNameIndex, amount, unit, hasPrescription } = drug;
  const drugName = drugs[drugNameIndex];
  const title = `${drugName} ${amount} ${unit}`;
  return (
    <Card
      sx={{
        minHeight: 170,
        maxWidth: 190,
        direction: 'rtl',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Box>
          <Medication />
        </Box>
        <Typography gutterBottom variant={'h5'}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hasPrescription ? 'איזה כיף! יש לך מרשם לזה!' : 'אין מרשם בתוקף לתרופה זו'}
        </Typography>
      </CardContent>
      {!hasPrescription && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '15px',
          }}
        >
          <Button color="primary" onClick={() => alert('בקשת נשלחה!')}>
            <Typography sx={{ fontWeight: 'bold' }}>{'לחידוש מרשם!'}</Typography>
          </Button>
        </Box>
      )}
    </Card>
  );
};
export default DrugCard;
