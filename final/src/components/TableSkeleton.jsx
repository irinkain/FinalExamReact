import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles({
  skTable: {
    borderRadius: 7
  }
})

const SkCell = ({ thDataLength }) => {
  const classes = useStyles()
  const el = []
  for (let index = 0; index < thDataLength + 1; index += 1) {
    if (index === 0) {
      el.push(
        <TableCell key={index}>
          <Skeleton
            variant="rect"
            height={30}
            width={30}
            className={classes.skTable}
          />
        </TableCell>
      )
    } else {
      el.push(
        <TableCell key={index}>
          <Skeleton
            variant="rect"
            height={30}
            width={100}
            className={classes.skTable}
          />
        </TableCell>
      )
    }
  }
  return el
}

const TableSkeleton = ({ thDataLength }) => {
  return (
    <TableBody>
      {[0, 1, 2, 3, 4, 5, 6].map(item => {
        return (
          <TableRow key={item}>
            <SkCell thDataLength={thDataLength} />
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default TableSkeleton
