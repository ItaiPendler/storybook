import { Card, Divider, Skeleton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactNode, useRef, useState } from 'react';
import { Index, List, ListRowRenderer } from 'react-virtualized';
import GenericCard from '../GenericCard';
import SectionTitle from '../SectionTitle/SectionTitle';

export type ListItem = {
  content: ReactNode;
  extraContent?: ReactNode;
};

interface DetailViewSectionProps {
  data: ListItem[];
  loading: boolean;
  expandMoreText?: string;
  closeButtonText?: string;
}
const DetailViewSection: React.FC<DetailViewSectionProps> = ({
  data,
  loading,
  expandMoreText = 'מידע נוסף',
  closeButtonText = 'סגור',
}) => {
  const list = useRef<List>(null);
  const [expandedIndex, setExpandedIndex] = useState<number[]>([]);
  if (loading) {
    return (
      <Stack spacing={1} width={345} height={700} alignItems="center" justifyContent="flex-start">
        <Card
          sx={{
            maxWidth: 345,
            direction: 'rtl',
            border: '1px solid rgb(0 0 0 / 12%)',
          }}
        >
          <Skeleton variant="rectangular" width={345} height={220} animation="wave" />
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            direction: 'rtl',
            border: '1px solid rgb(0 0 0 / 12%)',
          }}
        >
          <Skeleton variant="rectangular" width={345} height={220} animation="wave" />
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            direction: 'rtl',
            border: '1px solid rgb(0 0 0 / 12%)',
          }}
        >
          <Skeleton variant="rectangular" width={345} height={220} animation="wave" />
        </Card>
      </Stack>
    );
  }
  const rowRenderer: ListRowRenderer = ({ index, style }) => {
    return (
      <Box
        style={style}
        onClick={() => {
          if (expandedIndex.includes(index)) {
            setExpandedIndex(expandedIndex.filter(indexes => indexes !== index));
          } else if (data[index].extraContent) {
            setExpandedIndex([...expandedIndex, index]);
          }
          list.current?.recomputeRowHeights();
          list.current?.forceUpdate();
        }}
      >
        <GenericCard
          listItem={data[index]}
          expanded={expandedIndex.includes(index)}
          expandMoreText={expandMoreText}
          closeButtonText={closeButtonText}
        ></GenericCard>
      </Box>
    );
  };

  const getRowHeight = ({ index }: Index) => (expandedIndex.includes(index) ? 330 : 230);

  return (
    <List
      width={345}
      height={700}
      ref={list}
      rowHeight={getRowHeight}
      autoHeight={true}
      rowRenderer={rowRenderer}
      rowCount={data.length}
    ></List>
  );
};

export default DetailViewSection;
