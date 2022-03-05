import { Card, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
  children: any;
}

const QuickViewSection = ({ title, children }: Props) => {
  return (
    <Stack direction="column" spacing={1} alignItems="flex-end">
      <Typography>{title}</Typography>
      <Card>
        <Stack direction="column" divider={<Divider orientation="horizontal" />}>
          {children}
        </Stack>
      </Card>
    </Stack>
  );
};

export default QuickViewSection;
