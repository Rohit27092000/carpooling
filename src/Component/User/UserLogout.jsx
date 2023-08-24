function UserLogout() {
  console.log(
    "before  logout " + localStorage.getItem("user")
      ? localStorage.getItem("user")
      : null
  );

  localStorage.removeItem("user");
  localStorage.removeItem("user");
  localStorage.clear();

  console.log(
    "after  logout " + localStorage.getItem("user")
      ? localStorage.getItem("user")
      : null
  );

  return <div className="text-light">{(window.location.href = "/")}</div>;
}

export default UserLogout;