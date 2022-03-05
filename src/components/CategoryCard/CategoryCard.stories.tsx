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
  const iconPath = text('Icon Path', 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z');
  const title = text('Title', 'מעבדות');
  return <CategoryCard title={title} iconPath={iconPath} />;
};

export const Categories = () => {
  const categories = [
    { title: 'מעבדות', iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { title: 'מעבדות', iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { title: 'מעבדות', iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { title: 'מעבדות', iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
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
