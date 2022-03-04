import React from 'react';
import StyledCard from '../StyledCard';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/Card',
  component: StyledCard,
  decorators: [withKnobs],
};
export const Standard = () => {
  const title = text('title', 'some Lizard stuff');
  const description = text('description', 'some stuff about lizards');
  const subtitle = text('subtitle', 'A Subtitle');
  const imagePath = 'https://mui.com/static/images/cards/contemplative-reptile.jpg';
  const primaryButtonText = text('primaryButtonText', 'Press Me!');
  const primaryButtonOמClick = () => {
    alert('You pressed the primery button');
  };
  const secondaryButtonText = text('secondaryButtonText', 'Dont pRESS ME');
  const secondaryButtonOnClick = () => {
    alert('You pressed the secondary button');
  };

  return (
    <StyledCard
      title={title}
      description={description}
      subtitle={subtitle}
      imagePath={imagePath}
      primaryButtonText={primaryButtonText}
      primaryButtonOמClick={primaryButtonOמClick}
      secondaryButtonText={secondaryButtonText}
      secondaryButtonOnClick={secondaryButtonOnClick}
    ></StyledCard>
  );
};
