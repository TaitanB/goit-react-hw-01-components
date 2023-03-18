import PropTypes from 'prop-types';
import { Stat, StatValue } from './statistics.styled';

export const Statistics = ({ data: { label, percentage } }) => {
  return (
    <>
      <Stat className="label">{label}</Stat>
      <StatValue className="percentage">{percentage}%</StatValue>
    </>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
