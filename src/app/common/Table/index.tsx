import React from 'react';

import Column from './Column';
import Row from './Row';
import styles from './styles.module.scss';
import labels from '../../../../config/labels';

interface Props {
  columns: {
    id: string;
    label: string;
    width: number;
  }[];
  order?: {
    column: string;
    descendant: boolean;
    setColumn: (arg0: string) => void;
    setDescendant: (arg0: boolean) => void;
  };
  rows: {
    id: string | number;
    labels: (string | number | React.ReactNode)[];
  }[];
}

const Table = ({ columns, order, rows }: Props) => {
  const thereAreRows = rows.length > 0;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <Column
              id={column.id}
              key={column.id}
              label={column.label}
              order={order}
              width={column.width}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {thereAreRows ? (
          rows.map((row) => <Row key={row.id} labels={row.labels} />)
        ) : (
          <tr>
            <td className={styles.tdNoRows} colSpan={columns.length}>
              {labels.table.noData}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
