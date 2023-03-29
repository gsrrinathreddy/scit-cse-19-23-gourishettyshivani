import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(degree, percentage, passedout, institute, district) {
  return { degree, percentage, passedout, institute , district };
}

const rows = [
  createData('10th class', 92, 2017, 24, 4.0),
  createData('inter', 95, 2019, 37, 4.3),
  createData('UG', 72, 2023, 24, 6.0),
  createData('post graduation', 0, 0, 67, 4.3),
  createData('other', 0, 0, 49, 3.9),
];

export default function ITable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">degree</TableCell>
            <TableCell align="right">percentage</TableCell>
            <TableCell align="right"> passedout year</TableCell>
            <TableCell align="right">institute name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.degree}</TableCell>
              <TableCell align="right">{row.percentage}</TableCell>
              <TableCell align="right">{row.passedout}</TableCell>
              <TableCell align="right">{row.institute}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}