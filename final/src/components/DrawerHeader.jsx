import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import CancelIcon from '@material-ui/icons/Cancel'

const DrawerHeader = ({ headerName, toggleDrawer }) => {
  return (
    <div
      style={{
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 25,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <h2>{headerName}</h2>
      <div>
        <IconButton color="inherit" onClick={toggleDrawer}>
          <CancelIcon />
        </IconButton>
      </div>
    </div>
  )
}
export default DrawerHeader
