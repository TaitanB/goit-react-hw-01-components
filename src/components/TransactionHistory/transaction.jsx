import PropTypes from 'prop-types';
import { TableCells } from './Transactions.styled';

export const Transaction = ({ items: { type, amount, currency } }) => {
  return (
    <>
      <TableCells>{type}</TableCells>
      <TableCells>{amount}</TableCells>
      <TableCells>{currency}</TableCells>
    </>
  );
};

Transaction.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
