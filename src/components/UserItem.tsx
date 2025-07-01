import React from "react";

const UserItem = () => {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div className="avatar rounded-full min-w-10 min-h-10 bg-emerald-500 text-white font-bold flex items-center justify-center">
        <p>GD</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">User</p>
        <p className="text-[12px] text-neutral-600">user@gmail.com</p>
      </div>
    </div>
  );
};

export default UserItem;
