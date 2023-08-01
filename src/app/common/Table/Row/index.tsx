import React from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

interface Props {
  labels: (string | number | React.ReactNode)[];
}

const Row = ({ labels }: Props) => (
  <tr className={styles.tr}>
    {labels.map((label, index) => (
      <td className={styles.td} key={index}>
        {label}
      </td>
    ))}
  </tr>
);

export default Row;
