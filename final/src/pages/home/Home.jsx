import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { Container, Button } from '@material-ui/core'
import { GET_ALL_JOBS } from '../../graphql/query'
import DataTable from '../../components/DataTable'
import JobDrawer from './JobDrawer'
import AddJobDrawer from './AddJobDrawer'

const Home = () => {
  const [jobState, setJobState] = useState({
    open: false,
    companySlug: '',
    jobSlug: ''
  })
  const [isAddOpen, setOpen] = useState(false)
  const { loading, error, data } = useQuery(GET_ALL_JOBS)

  console.log(data)
  return (
    <div>
      <h1>Home page</h1>
      <AddJobDrawer isOpen={isAddOpen} setClose={setOpen} />
      <JobDrawer state={jobState} setClose={setJobState} />
      <Container component="div">
        <Button
          variant="contained"
          color="primary"
          onClick={e => setOpen(true)}
        >
          Add Job
        </Button>
        <DataTable
          rows={data ? data.jobs : []}
          loading={loading}
          setJobState={setJobState}
        />
      </Container>
    </div>
  )
}

export default Home
