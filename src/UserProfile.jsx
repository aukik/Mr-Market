import React from "react"
const button = [
  {
    name : "Profile",
    href : "#",
  },
  {
    name : "History",
    href : "#",
  },
  {
    name : "SignOut",
    href : "#",
  },
]
const UserProfile = props => {
  let state =
    "border drop-shadow-lg   border-bluematte  rounded-lg   bg-bluedark " +
    props.state
  return (
    <div className={state}>
      {button.map(items => (
        <div className='my-2'>
          <a className='text-white' href={items.href}>
            {items.name}
          </a>
          <br />
        </div>
      ))}
    </div>
  )
}

export default UserProfile
