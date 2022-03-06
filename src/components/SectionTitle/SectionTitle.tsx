import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  children: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, icon }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box lineHeight={0}>
        {icon}
      </Box>
      <Typography mr={2} sx={{ fontSize: 20, fontWeight: 'bold', color: '#3e4872' }} variant="h3">
        {children}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
