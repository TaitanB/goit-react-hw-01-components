import PropTypes from 'prop-types';
import { Statistics } from '../Statistics/statistics';

export const StatsList = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <Statistics data={stat} />
          </li>
        ))}
      </ul>
    </section>
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
