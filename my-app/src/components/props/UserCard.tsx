import React from "react";
function UserCard(props: any) {
    console.log('User Card Re-rendered...')
  const { name, age, address, add } = props;
  return( 
    <>
        <div className="border border-3 rounded-3 p-3 m-3">
            <div>Name: {name}</div>
            <div> Age: {age}</div>
            <div>Address: {address}</div>

            <button onClick={()=>add(10,20)}>Addition</button>
        </div>
  </>
  );
}

export default React.memo(UserCard);