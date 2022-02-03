function DisplayArray() {
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 },
  ];

  const userList = users.map((user) => <li key={user.id}>{user.name}</li>);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>User Names</h3>
      <ul className="displayarray">{userList}</ul>
    </>
  );
}

export default DisplayArray;
