import { Card, CardActionArea, Stack, SvgIcon, Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
  iconPath: string;
}
const CategoryCard = ({ title, iconPath }: Props) => {
  return (
    <Card
      sx={{
        width: 100,
        height: 100,
        backgroundImage: 'linear-gradient(to bottom right, #6c3cff, #25a2deeb)',
        color: 'white',
      }}
    >
      <CardActionArea
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <Stack
          spacing={1}
          sx={{
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            alignItems: 'center',
          }}
        >
          <SvgIcon>
            <path d={iconPath} />
          </SvgIcon>
          <Typography>{title}</Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
};
export default CategoryCard;
