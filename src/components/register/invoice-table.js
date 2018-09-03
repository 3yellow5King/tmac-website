// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

// Local Variables
const styles = theme => ({
  root: {
    width: '90%',
    marginLeft: 32,
    marginRight: 32,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

// Local Components
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#EDF2F8',
    color: theme.palette.common.black,
    fontWeight: 600,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// Component Definition
const InvoiceTable = (props) => {
  const {
    amount,
    classes,
  } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Description</CustomTableCell>
            <CustomTableCell numeric>Total</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={classes.row}>
            <CustomTableCell component="th" scope="row">
              TMAC registration fee for name-goes-here
            </CustomTableCell>
            <CustomTableCell numeric>{amount.toLocaleString()}</CustomTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

InvoiceTable.propTypes = {
  amount: PropTypes.number.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(InvoiceTable);
