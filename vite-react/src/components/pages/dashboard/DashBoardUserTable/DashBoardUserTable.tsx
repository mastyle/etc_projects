import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

function DashBoardUserTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>회원 ID</TableCell>
            <TableCell align="right">닉네임</TableCell>
            <TableCell align="right">가입일자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 100 }).map((_, index) => (
            <TableRow
              // eslint-disable-next-line react/no-array-index-key
              key={`table-row-${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">홍길동 {index + 1}</TableCell>
              <TableCell align="right">{`${new Date().getFullYear()}-${
                new Date().getMonth() + 1
              }-${new Date().getDate()}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DashBoardUserTable;
