import { Card, CardContent, Typography, CardActions, Button, withStyles } from '@mui/material';
import React, { ReactElement } from 'react';
import { Box, styled } from '@mui/system';
import { Medication } from '@mui/icons-material';
import { drugs } from '../../utils/drugsUtils';

interface Props {
  drugNameIndex: number;
  amount: number;
  unit: 'mg' | 'gram';
  hasPrescription: boolean;
}

const DrugCard: React.FC<Props> = ({ drugNameIndex, amount, unit, hasPrescription }) => {
  const drugName = drugs[drugNameIndex];
  const title = `${drugName} ${amount} ${unit}`;
  return (
    <Card sx={{ maxWidth: 200, direction: 'rtl' }}>
      <CardContent>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'start'}}>
          <Box lineHeight={0}>
            <Medication />
          </Box>
          <Typography gutterBottom variant={'h5'}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {hasPrescription ? 'איזה כיף! יש לך מרשם לזה!' : 'אין מרשם בתוקף לתרופה זו'}
        </Typography>
      </CardContent>
      {!hasPrescription && (
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button color="primary" onClick={() => alert('בקשת נשלחה!')}>
            <Typography sx={{ fontWeight: 'bold' }}>{'לחידוש מרשם!'}</Typography>
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
export default DrugCard;
