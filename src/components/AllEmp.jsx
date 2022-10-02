import React, { useState } from "react";

export const AllEmp = () => {
  const [hrc, setHRc] = useState(77);
  const [dev, setDev] = useState(0);
  return (
    <table>
      <tr>
        <td>HR Count</td>
        <td>
          <input type="text" onChange={(e) => setHRc(e.target.value)} />
        </td>
        <td>Dev Count</td>
      </tr>
      <tr>
        <td> Dev Count</td>
        <td>
          <input type="text" />
        </td>
      </tr>
      <tr>
        <td>
          <span> Total Count </span>
        </td>
        <td>
          <p>{Number(hrc) + Number(dev)}</p>
        </td>
      </tr>
    </table>
  );
};
