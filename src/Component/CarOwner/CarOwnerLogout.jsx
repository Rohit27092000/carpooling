import React from "react";

function CarOwnerLogout() {
  console.log(
    "before logout " + (localStorage.getItem("carOwner") ? localStorage.getItem("carOwner") : null)
  );

  localStorage.removeItem("carOwner");
  localStorage.removeItem("carOwner");
  localStorage.clear();

  console.log(
    "after logout " + (localStorage.getItem("carOwner") ? localStorage.getItem("carOwner") : null)
  );

  window.location.href = "/"; // Redirect to the home page

  return <div className="text-light">Logging out...</div>;
}

export default CarOwnerLogout;
