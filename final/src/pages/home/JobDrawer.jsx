import React from 'react'
import { useQuery } from 'react-apollo'
import { Drawer, CircularProgress } from '@material-ui/core'
import DrawerHeader from '../../components/DrawerHeader'
import { GET_JOB_BY_ID } from '../../graphql/query'

const JobDrawer = ({ state, setClose }) => {
  const closeDrawer = () => {
    setClose({ open: false, companySlug: '', jobSlug: '' })
  }
  const { loading, error, data } = useQuery(GET_JOB_BY_ID, {
    variables: { companySlug: state.companySlug, jobSlug: state.jobSlug }
  })

  return (
    <Drawer anchor="right" open={state.open} onClose={closeDrawer}>
      <div style={{ width: 550 }}>
        <DrawerHeader toggleDrawer={closeDrawer} headerName="Job" />
        <div style={{ marginTop: 40 }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <h1>{data && data.job.title}</h1>
              <p>{data && data.job.description}</p>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  )
}

export default JobDrawer
