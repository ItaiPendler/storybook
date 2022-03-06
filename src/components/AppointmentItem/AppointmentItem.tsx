import { Button, CardActions, Divider, Grid, Stack, Typography } from '@mui/material';
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
      <Stack
        direction="row"
        divider={
          <Divider orientation="vertical" flexItem sx={{ margin: '5px', borderColor: 'black' }} />
        }
        marginLeft="10px"
        marginTop="10px"
        alignSelf="end"
      >
        <Typography variant="body2">{moment(date).format('יום dddd, DD MMMM YY')}</Typography>
        <Typography variant="body2">{moment(date).format('HH:mm')}</Typography>
      </Stack>
      <Stack
        direction="row"
        marginRight="10px"
        divider={
          <Divider orientation="vertical" flexItem sx={{ margin: '5px', borderColor: 'black' }} />
        }
      >
        <Typography>{serviceTypeName}</Typography>
        <Typography>{facilityName}</Typography>
      </Stack>

      <CardActions>
        <Typography variant="body2" marginLeft="100px">
          {additionalInfo}
        </Typography>
        {address && (
          <Button color="primary" onClick={() => alert('אין לי מושג!')}>
            <Typography sx={{ fontWeight: 'bold' }}>{'איך מגיעים?'}</Typography>
          </Button>
        )}
      </CardActions>
    </Grid>
  );
};
export default AppointmentItem;
