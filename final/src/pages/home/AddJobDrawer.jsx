/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
import React from 'react'
import {
  Drawer,
  CircularProgress,
  TextField,
  Select,
  MenuItem
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useQuery } from 'react-apollo'
import DrawerHeader from '../../components/DrawerHeader'

import { GET_COMMITMENTS } from '../../graphql/query'

const initValue = {
  title: '',
  commitmentId: '',
  companyName: '',
  locationNames: '',
  userEmail: '',
  description: '',
  applyUrl: ''
}
const Labels = {
  title: 'Job title',
  commitmentId: 'compitment id',
  companyName: 'Company Name',
  locationNames: 'Location Name',
  userEmail: 'User email',
  description: 'description',
  applyUrl: 'Url'
}

const AddJobDrawer = ({ isOpen, setClose }) => {
  const closeDrawer = () => {
    setClose(false)
  }
  const { loading, error, data } = useQuery(GET_COMMITMENTS)
  const { control, handleSubmit, errors } = useForm({
    defaultValues: initValue
  })

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeDrawer}>
      <div style={{ width: 550 }}>
        <DrawerHeader toggleDrawer={closeDrawer} headerName="Add Job" />
        <div>
          <form>
            {Object.keys(initValue).map(elem => {
              if (elem === 'commitmentId') {
                return (
                  <Controller
                    as={
                      <Select
                        name="commitmentId"
                        variant="outlined"
                        fullWidth
                        placeholder="commitmentId"
                      >
                        {data &&
                          data.commitments.map(row => (
                            <MenuItem value={row.id}>{row.id}</MenuItem>
                          ))}
                      </Select>
                    }
                    name="commitmentId"
                    control={control}
                  />
                )
              }
              return (
                <Controller
                  as={
                    <TextField
                      variant="outlined"
                      margin="normal"
                      error={!!(errors && errors[elem])}
                      helperText={
                        errors && errors[elem] && errors[elem].message
                      }
                      required
                      fullWidth
                      id={elem}
                      label={Labels[elem]}
                      name={elem}
                    />
                  }
                  name={elem}
                  control={control}
                />
              )
            })}
          </form>
        </div>
      </div>
    </Drawer>
  )
}

export default React.memo(AddJobDrawer)
