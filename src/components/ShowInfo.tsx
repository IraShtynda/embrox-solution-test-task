import React from 'react';
import { Schedule } from '../types/Show';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';

type Props = {
  genres?: string[],
  status?: string,
  schedule?: Schedule
}

export const ShowInfo: React.FC<Props> = ({ genres, status, schedule }) => {
  return (
    <Table sx={{ marginBlock: '20px' }}>
      <TableBody>
        <TableRow>
          <TableCell><strong>Genres:</strong></TableCell>
          <TableCell>{genres?.join(' | ')}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell><strong>Status:</strong></TableCell>
          <TableCell>{status}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell><strong>Schedule:</strong></TableCell>
          <TableCell>
            {schedule?.days.join(', ')}
            {schedule?.time && ` at ${schedule.time}`}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table >

  );
};