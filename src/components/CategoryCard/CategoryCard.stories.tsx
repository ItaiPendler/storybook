import { Grid } from '@mui/material';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import CategoryCard from '.';

export default {
  title: 'Components/Category',
  component: CategoryCard,
  decorators: [withKnobs],
};

export const Playground = () => {
  const iconPath = text(
    'Icon Path',
    'M19.649 5.286 14 8.548V2.025h-4v6.523L4.351 5.286l-2 3.465 5.648 3.261-5.648 3.261 2 3.465L10 15.477V22h4v-6.523l5.649 3.261 2-3.465-5.648-3.261 5.648-3.261z'
    );
  const title = text('Title', 'כללי');
  return <CategoryCard title={title} iconPath={iconPath} />;
};

export const Categories = () => {
  const categories = [
    { title: 'דף הבית', iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    {
      title: 'כללי',
      iconPath: 'M19.649 5.286 14 8.548V2.025h-4v6.523L4.351 5.286l-2 3.465 5.648 3.261-5.648 3.261 2 3.465L10 15.477V22h4v-6.523l5.649 3.261 2-3.465-5.648-3.261 5.648-3.261z' 
    },
    {
      title: 'תיק רפואי',
      iconPath: 'M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zM4 18V8h16l.001 10H4z M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z',
    },
    {
      title: 'מעבדות',
      iconPath:
        'M7 12.917v.583a4.5 4.5 0 1 0 9 0v-1.67a3.001 3.001 0 1 1 2 0v1.67a6.5 6.5 0 1 1-13 0v-.583A6.002 6.002 0 0 1 0 7V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v5a4 4 0 1 0 8 0V2H9a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5a6.002 6.002 0 0 1-5 5.917zM17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
    },
  ];
  return (
    <Grid container spacing={1} direction={'row'}>
      {categories.map(category => (
        <Grid item sm={4} md={4} lg={6}>
          <CategoryCard title={category.title} iconPath={category.iconPath}></CategoryCard>
        </Grid>
      ))}
    </Grid>
  );
};
