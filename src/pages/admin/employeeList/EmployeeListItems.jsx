import React from "react";

export default function EmployeeListItems({ checkHandle, users , handleProfileClick}) {

  return (
    <>
      <tbody>
        {users.map((employee) => (
          <tr key={employee.id}>
            <td></td>
            <td>
              <input
                className="checkbox"
                type="checkbox"
                name={employee.id}
                checked={employee.isChecked}
                onChange={checkHandle}
              />
            </td>
            <td onClick={handleProfileClick} data-uid={employee.id}>
              <div className="nameContainer">
                <img src={employee.image} className="userAvatar" />
                {employee.name}
              </div>
            </td>
            <td className="userId">{employee.id}</td>
            <td>{employee.email}</td>
            <td className="employeeType">
              <div>{employee.type}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
