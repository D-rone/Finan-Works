import React from "react";

function RequestItem({ request, handleViewClick }) {
  return (
    <>
      <tr>
        <td className="nameCnt">
          <div className="nameContainer">
            <img src={request.employeeImage} className="userAvatar" />
            {request.employeeName.length > 23
              ? request.employeeName.substring(0, 22) + "..."
              : request.employeeName}
          </div>
        </td>
        <td className="employeeType">
          <div>{request.employeeType}</div>
        </td>
        <td className="employee">
          <div>{request.amount} DA</div>
        </td>
        <td>
          <div>{request.date}</div>
        </td>
        <td>
          <div>{request.status}</div>
        </td>
        <td>
          <div>
            <button onClick={handleViewClick} data-id={request.id}>
              View
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default function Request({ requests, handleViewClick }) {
  return (
    <>
      <tbody>
        {requests.map((request) => (
          <RequestItem key={request.id} request={request} handleViewClick={handleViewClick} />
        ))}
      </tbody>
    </>
  );
}
