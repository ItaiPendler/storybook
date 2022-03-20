import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { boolean, date, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import GenericCard from '.';
import AppointmentItem, { AppointmentItemType } from '../AppointmentItem';
import DetailViewSection, { ListItem } from '../DetailViewList';

export default {
  title: 'Components/GenericCard',
  component: GenericCard,
  decorators: [withKnobs],
};

// export const Playground = () => {
//   const summary = text('summary', 'something');
//   const extra = text('extra', '');
//   const extraContent = extra ? <Typography>{extra}</Typography> : null;
//   return (
//     <GenericCard extraContent={extraContent}>
//       <Box>
//         <Typography>{summary}</Typography>
//       </Box>
//     </GenericCard>
//   );
// };

export const List = () => {
  const appointments: AppointmentItemType[] = [
    {
      serviceTypeName: text('serviceTypeName', 'אנדוקרינולוגיה', '1'),
      clinicName: text('clinicName', 'מרפאת מומחים', '1'),
      facilityName: text('facilityName', 'מרפא מרכז', '1'),
      serviceName: text('serviceName', 'דר ראובני', '1'),
      date: new Date(date('date', new Date(), '1')),
      address: text('address', 'אלימלך רימלט 18', '1'),
    },
    {
      serviceTypeName: text('serviceTypeName2', 'אנדוקרינולוגיה', '2'),
      clinicName: text('clinicName2', 'מרפאת מומחים', '2'),
      facilityName: text('facilityName2', 'מרפא מרכז', '2'),
      serviceName: text('serviceName2', 'דר ראובני', '2'),
      date: new Date(date('date2', new Date(), '2')),
      address: text('address2', 'אלימלך רימלט 18', '2'),
    },
    {
      serviceTypeName: text('serviceTypeName3', 'אנדוקרינולוגיה', '3'),
      clinicName: text('clinicName3', 'מרפאת מומחים', '3'),
      facilityName: text('facilityName3', 'מרפא מרכז', '3'),
      serviceName: text('serviceName3', 'דר ראובני', '3'),
      date: new Date(date('date3', new Date(), '3')),
      address: text('address3', 'אלימלך רימלט 18', '3'),
    },
  ];

  const getStuff = (): ListItem[] => {
    return appointments.map(app => ({
      content: <AppointmentItem appointment={app} />,
      extraContent: Math.random() * 100 >50 ? <Typography>More Infoooooo</Typography> : undefined,
    }));
  };

  return (
    <DetailViewSection
      loading={boolean('Loading', true, '0')}
      data={getStuff()}
    ></DetailViewSection>
  );
};
