import React from 'react'

const custome_invoice_Table_data = ({data}) => {
  return (
    <table className="table">
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <th scope="row">
              <div className="d-flex align-items-center">
                <img src={row.image} alt="" className="avatar-xs rounded object-cover" />
                <a href={row.link} className="link-dark">
                  <span className="mb-0 ms-2">{row.month}</span>
                </a>
              </div>
            </th>
            <td>{row.value1}</td>
            <td>
              <div className="d-flex align-items-center">
                <img src={row.image} alt="" className="avatar-xs rounded object-cover" />
                <div className="ms-2">
                  <a href="#!">
                    <h6 className="mb-1">{row.nextMonth}</h6>
                  </a>
                </div>
              </div>
            </td>
            <td>{row.value2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default custome_invoice_Table_data
