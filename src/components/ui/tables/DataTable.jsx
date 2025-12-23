export default function DataTable({ columns = [], data = [] }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 && (
          <tr>
            <td colSpan={columns.length}>No data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
