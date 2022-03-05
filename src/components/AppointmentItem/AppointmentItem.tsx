import { Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import moment from 'moment';
import React from 'react';

export type AppointmentItemType = {
  serviceTypeName: string;
  clinicName: string;
  facilityName: string;
  serviceName: string;
  date: Date;
  address: string;
};
interface Props {
  appointment: AppointmentItemType;
}

const AppointmentItem: React.FC<Props> = ({ appointment }) => {
  const { serviceTypeName, clinicName, facilityName, serviceName, date, address } = appointment;
  const additionalInfo = `${serviceName}, ${clinicName}`;
  return (
    <Grid container flexDirection="column" dir="rtl">
      <Grid item>
        <Typography
          sx={{ textAlign: 'end', marginLeft: '10px', marginTop: '10px', marginBotton: 0 }}
        >
          {moment(date).format('יום dddd, DD MMMM YYYY | HH:mm')}
        </Typography>
      </Grid>
      <Stack
        direction="row"
        divider={
          <Divider orientation="vertical" flexItem sx={{ margin: '5px', borderColor: 'black' }} />
        }
      >
        <Typography>{serviceTypeName}</Typography>
        <Typography>{facilityName}</Typography>
      </Stack>
      <Grid container item flexDirection="row" justifyContent="space-between" alignItems="baseline">
        <Grid item xs={6}>
          <Typography>{additionalInfo}</Typography>
        </Grid>
        {address && (
          <Grid item xs={6}>
            <Button color="primary" onClick={() => alert('אין לי מושג!')}>
              <Typography sx={{ fontWeight: 'bold' }}>{'איך מגיעים?'}</Typography>
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
export default AppointmentItem;
