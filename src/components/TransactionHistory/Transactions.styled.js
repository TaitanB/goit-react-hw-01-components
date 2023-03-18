import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 50px auto;
  border-collapse: collapse;
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHead = styled.th`
  font-size: 22px;
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-transform: uppercase;
  background-color: #50f0f9;
`;

export const TableCells = styled.td`
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-align: center;
`;
