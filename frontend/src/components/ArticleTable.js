import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArticleCard from './ArticleCard';

const articleTable = (articleInfo) => {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const articleDetail = articleInfo;

  let articleList;

  if (!articleInfo) {
    articleList = 'No articles found.';
  } else {
    articleList = articleDetail.articleInfo.map((book, k) => <ArticleCard book={book} key={k} />);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={useStyles.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Author</StyledTableCell>
            <StyledTableCell>Year</StyledTableCell>
            <StyledTableCell>Software Engineering Practice</StyledTableCell>
            <StyledTableCell>Claim</StyledTableCell>
            <StyledTableCell>Strength of Evidence</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articleList}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default articleTable;
