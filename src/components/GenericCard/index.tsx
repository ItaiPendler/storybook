import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItem } from '../DetailViewList';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface GenericCardProps {
  listItem: ListItem;
  expanded: boolean;
  expandMoreText: string;
  closeButtonText: string;
}

const GenericCard: React.FC<GenericCardProps> = ({
  listItem,
  expanded,
  expandMoreText,
  closeButtonText,
}) => {
  const { content, extraContent } = listItem;

  return (
    <Card sx={{ maxWidth: 345, direction: 'rtl', border: '1px solid rgb(0 0 0 / 12%)' }}>
      <CardContent>{content}</CardContent>
      {extraContent && (
        <>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider orientation="horizontal"></Divider>
            <CardContent>{extraContent}</CardContent>
          </Collapse>
          <CardActions disableSpacing>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ExpandMore expand={expanded} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon />
              </ExpandMore>
              <Typography>{expanded ? closeButtonText : expandMoreText}</Typography>
            </Box>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default GenericCard;
