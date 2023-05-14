import React from "react";

function EmployeeItem({ employee, checkHandle, handleProfileClick }) {
  return (
    <>
      <tr>
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
        <td
          className="nameCnt"
          onClick={handleProfileClick}
          data-uid={employee.id}
        >
          <div className="nameContainer">
            <img src={employee.image} className="userAvatar" />
            {employee.name.length > 23
              ? employee.name.substring(0, 22) + "..."
              : employee.name}
          </div>
        </td>
        <td className="userId">{employee.id}</td>
        <td>
          {employee.email.length > 25
            ? employee.email.substring(0, 24) + "..."
            : employee.email}
        </td>
        <td className="employeeType">
          <div>{employee.type}</div>
        </td>
        <td></td>
      </tr>
    </>
  );
}

export default function Employee({ checkHandle, users, handleProfileClick }) {
  return (
    <>
      <tbody>
        {users.map((employee) => (
          <EmployeeItem
            key={employee.id}
            employee={employee}
            checkHandle={checkHandle}
            handleProfileClick={handleProfileClick}
          />
        ))}
      </tbody>
    </>
  );
}
