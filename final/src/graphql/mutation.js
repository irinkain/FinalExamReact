import { gql } from 'apollo-boost'

export const CREATE_JOB = gql`
  mutation postJob($PostJobInput: PostJobInput!) {
    postJob(input: $PostJobInput) {
      id
    }
  }
`
