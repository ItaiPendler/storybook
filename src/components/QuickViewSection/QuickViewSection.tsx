import { Card, Divider, Stack, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

interface Props {
  title: string;
  icon: ReactNode;
  children: any;
}

const QuickViewSection = ({ icon, title, children }: Props) => {
  return (
    <Stack direction="column" spacing={1} alignItems="flex-start" sx={{ direction: 'rtl' }}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <Card>
        <Stack direction="column" divider={<Divider orientation="horizontal" variant="middle" />}>
          {children}
        </Stack>
      </Card>
    </Stack>
  );
};

export default QuickViewSection;
