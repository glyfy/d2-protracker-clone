import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import React from 'react';

interface Data {
  hero: string;
  winrate: number;
  matches: number;
  contestrate: number;
}

function createData(hero: string, winrate: number, matches: number, contestrate: number): Data {
  return { hero, winrate, matches, contestrate };
}

const rows: Data[] = [
  createData('Hero A', 55.5, 100, 75),
  createData('Hero B', 60.2, 150, 80),
  createData('Hero C', 48.9, 200, 65),
];
type Order = 'asc' | 'desc';

const headCells = [
  {
    id: 'hero',
    label: 'Hero',
  },
  {
    id: 'winrate',
    label: 'Winrate',
  },
  {
    id: 'matches',
    label: 'Matches',
  },
  {
    id: 'contestrate',
    label: 'Contest Rate',
  },
];

function TopHeroesPlayersTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('winrate');

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = React.useMemo(() => {
    return [...rows].sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];
      if (orderBy === 'hero' && typeof aValue === 'string' && typeof bValue === 'string') {
        return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
      if (aValue < bValue) {
        return order === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [order, orderBy]);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="left">
            <TableSortLabel></TableSortLabel>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TopHeroesPlayersTable;
