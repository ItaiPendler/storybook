import { ChevronLeft } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  children: string;
}

const StyledTypography = styled(Typography)({
  fontSize: 20,
  fontWeight: 'bold',
  marginRight: 2,
});

const SectionTitle: React.FC<SectionTitleProps> = ({ children, icon }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box lineHeight={0}>{icon}</Box>
      <StyledTypography variant="h3">{children}</StyledTypography>
      <Box lineHeight={0}>
        <ChevronLeft />
      </Box>
    </Box>
  );
};

export default SectionTitle;
