export const CellTable = () => {
  return (
    <table>
      <tr className="header">
        <th className="item1"> </th>
        <th className="item2">A</th>
        <th className="item2">B</th>
        <th className="item2">C</th>
        <th className="item2">D</th>
        <th className="item2">E</th>
      </tr>
      <tr>
        <td className="item1">1</td>
        <td className="value1" id="A1"></td>
        <td className="value1" id="A2"></td>
        <td className="value1" id="A3"></td>
        <td className="value1" id="A4"></td>
        <td className="value1" id="A5"></td>
      </tr>
      <tr>
        <td className="item1">2</td>
        <td className="value1" id="B1"></td>
        <td className="value1" id="B2"></td>
        <td className="value1" id="B3"></td>
        <td className="value1" id="B4"></td>
        <td className="value1" id="B5"></td>
      </tr>
      </table>
  )
}