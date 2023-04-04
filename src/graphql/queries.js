/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSingleTable = /* GraphQL */ `
  query GetSingleTable($pk: ID!, $sk: String!) {
    getSingleTable(pk: $pk, sk: $sk) {
      pk
      sk
      gsi1pk
      gsi1sk
      location {
        country
        flagImageUrl
      }
      company {
        city
        name
        industry
        url
      }
      openPosition {
        title
        seniority
        field
        skills
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSingleTables = /* GraphQL */ `
  query ListSingleTables(
    $pk: ID
    $sk: ModelStringKeyConditionInput
    $filter: ModelSingleTableFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSingleTables(
      pk: $pk
      sk: $sk
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        pk
        sk
        gsi1pk
        gsi1sk
        location {
          country
          flagImageUrl
        }
        company {
          city
          name
          industry
          url
        }
        openPosition {
          title
          seniority
          field
          skills
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItemByGSI = /* GraphQL */ `
  query GetItemByGSI(
    $gsi1pk: ID!
    $gsi1sk: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSingleTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getItemByGSI(
      gsi1pk: $gsi1pk
      gsi1sk: $gsi1sk
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        pk
        sk
        gsi1pk
        gsi1sk
        location {
          country
          flagImageUrl
        }
        company {
          city
          name
          industry
          url
        }
        openPosition {
          title
          seniority
          field
          skills
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
