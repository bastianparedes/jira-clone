import React from 'react';

import { classNames } from 'bastianparedes/utils';
import { BsArrowDownShort } from 'react-icons/bs';

import styles from './styles.module.scss';

interface Props {
  id: string;
  label: string;
  order?: {
    column: string;
    descendant: boolean;
    setColumn: (arg0: string) => void;
    setDescendant: (arg0: boolean) => void;
  };
  width: number;
}

const Column = ({ id, label, order, width }: Props) => {
  const handleOnClick = () => {
    if (order === undefined) return;

    if (id === order.column) order.setDescendant(!order.descendant);
    else {
      order.setColumn(id);
      order.setDescendant(true);
    }
  };

  return (
    <th
      className={classNames(styles.th)}
      style={{ width: String(width) + '%' }}
    >
      {order === undefined ? (
        label
      ) : (
        <button className={styles.button} onClick={handleOnClick}>
          <span>{label}</span>
          {order.column === id && (
            <BsArrowDownShort
              className={classNames(
                styles.arrow,
                !order.descendant && styles.arrowUp
              )}
            />
          )}
        </button>
      )}
    </th>
  );
};

export default Column;
