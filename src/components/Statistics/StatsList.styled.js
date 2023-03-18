import styled from 'styled-components';

export const StatsSection = styled.section`
  background-color: rgb(176 180 233);
  width: 480px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const StatsTitle = styled.h2`
  padding: 30px 50px;
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  color: rgb(49, 49, 66);
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  width: calc(100% / 5);
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
