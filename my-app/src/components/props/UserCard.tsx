import React from "react";
function UserCard(props: any) {
    console.log('User Card Re-rendered...')
  const { name, age, address } = props;
  return( 
    <>
        <div className="border border-3 rounded-3 p-3 m-3">
            <div>Name: {name}</div>
            <div> Age: {age}</div>
            <div>Address: {address}</div>
        </div>
  </>
  );
}

export default React.memo(UserCard);