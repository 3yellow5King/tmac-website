// External Dependencies
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import MemberTableHead from './member-table-head';
import MemberTableRowActionElements from './MemberTableRowActionElements';

// Local Typings
interface Props {
  data: UserData[];
  isAdmin: boolean;
}
export interface UserData {
  Address1: string;
  Address2: string;
  AmountPaid: number;
  CellPhone: string;
  City: string;
  District: string;
  Email: string;
  FirstName: string;
  LastName: string;
  MemberType: 'active' | 'retired';
  NewToTMAC: string;
  OfficePhone: string;
  PaymentOption: string;
  PaypalPaymentID: string;
  State: string;
  Title: string;
  ZipCode: number;
  userId: string;
  invoiceDate: string;
  invoiceId: string;
  receiptDate: string;
  receiptId: string;
}
export type Order = 'asc' | 'desc';

// Local Variables
const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

const StyledRoot = styled(Paper)(({ theme }) => ({
  '.MuiToolbar-root': {
    display: 'flex',
    alignItems: 'baseline',
  },

  '.cell': {
    '&:first-child': {
      paddingLeft: theme.spacing(3),
    },
  },

  '.empty': {
    padding: theme.spacing(4),
  },

  '.overflowWrapper': {
    overflowX: 'auto',
  },

  '.pagerButton': {
    color: theme.palette.grey['600'],
    marginRight: theme.spacing(1),
  },

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgba(0, 0, 0, 0,.87)',
    },

    '& td:last-child': {
      paddingRight: theme.spacing(3),
    }
  },

  '.table': {
    marginBottom: 0,
    minWidth: 200,
  },

  margin: theme.spacing(3, 0),
  width: '100%',
}));

// Local Functions
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof UserData>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function uglifyEmail(email: string) {
  if (!email) {
    return '';
  }
  const index = email.indexOf('@');

  // Remove it & insert -at- back in → Array.prototype.splice()
  const uglyEmailArray = email.split('');

  uglyEmailArray.splice(index, 1, '-at-');

  return uglyEmailArray.join('');
}

// Component Definition
const MemberTable: FC<Props> = ({
  data,
  isAdmin,
}) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('LastName');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  console.log('data', data);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof UserData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  if (!data) {
    return null;
  }

  return (
    <StyledRoot variant="outlined">
      <div className="overflowWrapper">
        {data.length > 0 ? (
          <Table className="table">
            <MemberTableHead
              isAdmin={isAdmin}
              onRequestSort={handleRequestSort}
              order={order}
              orderBy={orderBy}
            />

            <TableBody>
              {data.sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow
                    className="row"
                    key={user.userId}
                  >
                    <TableCell
                      className="cell"
                      component="th"
                      key={user.FirstName}
                      padding="none"
                      scope="row"
                    >
                      {user.FirstName}
                    </TableCell>

                    <TableCell
                      className="cell"
                      key={user.LastName}
                    >
                      {user.LastName}
                    </TableCell>

                    <TableCell
                      className="cell"
                      key={user.District}
                    >
                      {user.District}
                    </TableCell>

                    <TableCell
                      className="cell"
                      key={user.Title}
                    >
                      {user.Title}
                    </TableCell>

                    <TableCell
                      className="cell"
                      key={user.Email}
                    >
                      {uglifyEmail(user.Email)}
                    </TableCell>

                    {isAdmin && (
                    <TableCell className="cell">
                      <MemberTableRowActionElements user={user} />
                    </TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) : (
          <div className="empty">
            No members for the current school year
          </div>
        )}
      </div>

      {data && data.length > 5 && (
        <TablePagination
          backIconButtonProps={{
            'aria-label': 'Previous Page',
            disabled: page === 0,
            classes: { root: 'pagerButton' },
            id: 'pager-button-left',
          }}
          component="div"
          count={data ? data.length : 0}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
            classes: { root: 'pagerButton' },
            disabled: page - 1 === Math.ceil(data.length / rowsPerPage),
            id: 'pager-button-right',
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
        />
      )}
    </StyledRoot>
  );
};

MemberTable.propTypes = propTypes;

export default MemberTable;
