import React from 'react';

const UserRowMemorized = ({ user }) => {
  return (
    <tr>
      <td>
        <a href={user.edit_path}>{user.name1}</a>
        <br />
        <small>{user.email}</small>
      </td>
    </tr>
  );
};

export const UserRow = React.memo(UserRowMemorized);
