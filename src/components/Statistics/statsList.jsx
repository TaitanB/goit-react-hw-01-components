import PropTypes from 'prop-types';
import { Statistics } from '../Statistics/statistics';
import {
  StatList,
  StatsSection,
  StatsTitle,
  StatItem,
} from './StatsList.styled';

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatsList = ({ title, stats }) => {
  return (
    <StatsSection className="statistics">
      {title && <StatsTitle className="title">{title}</StatsTitle>}
      <StatList className="stat-list">
        {stats.map(stat => (
          <StatItem
            className="item"
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <Statistics data={stat} />
          </StatItem>
        ))}
      </StatList>
    </StatsSection>
  );
};

StatsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
