import { gql } from 'apollo-boost'

export const GET_ALL_JOBS = gql`
  query {
    jobs {
      id
      title
      slug
      company {
        name
        slug
      }
    }
  }
`

export const GET_JOB_BY_ID = gql`
  query job($companySlug: String!, $jobSlug: String!) {
    job(input: { companySlug: $companySlug, jobSlug: $jobSlug }) {
      id
      title
      slug
      description
      company {
        name
        slug
      }
    }
  }
`

export const GET_COMMITMENTS = gql`
  query {
    commitments {
      id
    }
  }
`
