import React from "react";
import rejectedLogo from "../../../assets/rejected.svg";
import pendingLogo from "../../../assets/pending.svg";
import acceptedUnpaid from "../../../assets/acceptedUnpaid.svg";
import acceptedPaid from "../../../assets/acceptedPaid.svg";

let setStatusLogo = (status) => {
  let logo;
  switch (status) {
    case "pending":
      logo = pendingLogo;
      break;
    case "rejected":
      logo = rejectedLogo;
      break;
    case "accepted - paid":
      logo = acceptedPaid;
      break;
    case "accepted - unpaid":
      logo = acceptedUnpaid;
      break;

    default:
      break;
  }
  return <img src={logo} alt="" />;
};

function RequestItem({ request, handleRequestClick }) {
  return (
    <>
      <tr id="requestItem" onClick={handleRequestClick} data-id={request.id}>
        <td></td>
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
        <td id="alignCenterTd">
          <div>{request.date}</div>
        </td>
        <td id="alignCenterTd">
          <div>{request.amount} DA</div>
        </td>
        <td id="alignCenterTd">
          <div>{setStatusLogo(request.status)}</div>
        </td>
      </tr>
    </>
  );
}

export default function Request({ requests, handleRequestClick }) {
  return (
    <>
      <tbody>
        {requests.map((request) => (
          <RequestItem
            key={request.id}
            request={request}
            handleRequestClick={handleRequestClick}
          />
        ))}
      </tbody>
    </>
  );
}
