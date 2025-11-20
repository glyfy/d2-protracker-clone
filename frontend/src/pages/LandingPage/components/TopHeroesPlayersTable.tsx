import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import React from 'react';

interface Data {
  id: number;
  hero: string;
  winrate: number;
  matches: number;
  contestrate: number;
}

function createData(
  id: number,
  hero: string,
  winrate: number,
  matches: number,
  contestrate: number
): Data {
  return { id, hero, winrate, matches, contestrate };
}

const rows: Data[] = [
  createData(1, 'Hero A', 55.5, 100, 75),
  createData(2, 'Hero B', 60.2, 150, 80),
  createData(3, 'Hero C', 48.9, 200, 65),
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
    <TableContainer component={Paper}>
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align="right"
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => handleRequestSort(headCell.id as keyof Data)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedRows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.hero}
            </TableCell>
            <TableCell align="right">{row.winrate}</TableCell>
            <TableCell align="right">{row.matches}</TableCell>
            <TableCell align="right">{row.contestrate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
}

export default TopHeroesPlayersTable;
