import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead>
      <tr>
        <th className={css.title}>Type</th>
        <th className={css.title}>Amount</th>
        <th className={css.title}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ currency, amount, type, id }) => (
        <tr className={css.line} key={id}>
          <td className={css.text}>{currency}</td>
          <td className={css.text}>{amount}</td>
          <td className={css.text}>{type}</td>
        </tr>
      ))}
    </tbody>
  </table>
);