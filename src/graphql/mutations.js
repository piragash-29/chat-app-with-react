/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSingleTable = /* GraphQL */ `
  mutation CreateSingleTable(
    $input: CreateSingleTableInput!
    $condition: ModelSingleTableConditionInput
  ) {
    createSingleTable(input: $input, condition: $condition) {
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
export const updateSingleTable = /* GraphQL */ `
  mutation UpdateSingleTable(
    $input: UpdateSingleTableInput!
    $condition: ModelSingleTableConditionInput
  ) {
    updateSingleTable(input: $input, condition: $condition) {
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
export const deleteSingleTable = /* GraphQL */ `
  mutation DeleteSingleTable(
    $input: DeleteSingleTableInput!
    $condition: ModelSingleTableConditionInput
  ) {
    deleteSingleTable(input: $input, condition: $condition) {
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
