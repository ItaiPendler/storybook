import 'moment/locale/he';
import { text, withKnobs, date } from '@storybook/addon-knobs';
import moment from 'moment';
import React from 'react';
import QuickViewSection from '.';
import AppointmentItem, { AppointmentItemType } from '../AppointmentItem';
import { CalendarToday } from '@mui/icons-material';

moment.locale('he');
export default {
  title: 'Components/QuickViewSection',
  component: QuickViewSection,
  decorators: [withKnobs],
};

export const AppointmentsPlayground = () => {
  const appointments: AppointmentItemType[] = [
    {
      serviceTypeName: text('serviceTypeName', 'אנדוקרינולוגיה'),
      clinicName: text('clinicName', 'מרפאת מומחים'),
      facilityName: text('facilityName', 'מרפא מרכז'),
      serviceName: text('serviceName', 'דר ראובני'),
      date: new Date(date('date', new Date())),
      address: text('address', 'אלימלך רימלט 18'),
    },
    {
      serviceTypeName: text('serviceTypeName2', 'אנדוקרינולוגיה'),
      clinicName: text('clinicName2', 'מרפאת מומחים'),
      facilityName: text('facilityName2', 'מרפא מרכז'),
      serviceName: text('serviceName2', 'דר ראובני'),
      date: new Date(date('date2', new Date())),
      address: text('address2', 'אלימלך רימלט 18'),
    },
    {
      serviceTypeName: text('serviceTypeName3', 'אנדוקרינולוגיה'),
      clinicName: text('clinicName3', 'מרפאת מומחים'),
      facilityName: text('facilityName3', 'מרפא מרכז'),
      serviceName: text('serviceName3', 'דר ראובני'),
      date: new Date(date('date3', new Date())),
      address: text('address3', 'אלימלך רימלט 18'),
    },
  ];
  const title = text('Section Title', 'התורים שלי');
  return (
    <QuickViewSection title={title} icon={<CalendarToday />}>
      {appointments.map(appointment => (
        <AppointmentItem appointment={appointment} />
      ))}
    </QuickViewSection>
  );
};
