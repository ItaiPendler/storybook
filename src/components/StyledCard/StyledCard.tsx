import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
  description: string;
  subtitle?: string;
  imagePath?: string;
  primaryButtonText?: string;
  primaryButtonOמClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonOnClick?: () => void;
}

const StyledCard: React.FC<Props> = ({
  title,
  description,
  subtitle,
  imagePath,
  primaryButtonText,
  primaryButtonOמClick,
  secondaryButtonText,
  secondaryButtonOnClick,
}) => {
  const hasActions =
    (primaryButtonText && primaryButtonOמClick) || (secondaryButtonText && secondaryButtonOnClick);
  return (
    <Card sx={{ maxWidth: 345 }}>
      {imagePath && <CardMedia component="img" height="140" image={imagePath} alt="green iguana" />}
      <CardContent>
        <Typography gutterBottom variant={'h5'}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {hasActions && (
        <CardActions>
          {primaryButtonOמClick && (
            <Button color="primary" onClick={primaryButtonOמClick}>
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonOnClick && (
            <Button color="secondary" onClick={secondaryButtonOnClick}>
              {secondaryButtonText}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
};
export default StyledCard;
