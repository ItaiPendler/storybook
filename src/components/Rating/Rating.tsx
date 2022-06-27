import { Button, Card, Divider, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

export type Content = { title: string; iconPath: string };

interface Props {
  items: Content[];
  selectedIndex?: number;
  onSelect: (newIndex: number) => void;
}

const Rating: React.FC<Props> = ({ items, selectedIndex, onSelect }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ direction: 'rtl' }}
    >
      {items.map(({ title, iconPath }, index) => (
        <Stack
          key={`rating-${index}`}
          alignItems="center"
          onClick={() => onSelect(index)}
          style={
            selectedIndex === index
              ? {
                  transform: 'scale(1.5)',
                  transition: 'all 0.3s ease-in'
                }
              : undefined
          }
        >
          <SvgIcon style={{ color: '#6c3cff' }}>
            <path d={iconPath} />
          </SvgIcon>
          <Typography>{title}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default Rating;
