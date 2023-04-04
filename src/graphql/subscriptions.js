/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $owner: String
  ) {
    onCreateConversation(filter: $filter, owner: $owner) {
      id
      name
      messages {
        items {
          id
          conversationId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $owner: String
  ) {
    onUpdateConversation(filter: $filter, owner: $owner) {
      id
      name
      messages {
        items {
          id
          conversationId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $owner: String
  ) {
    onDeleteConversation(filter: $filter, owner: $owner) {
      id
      name
      messages {
        items {
          id
          conversationId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
      id
      conversationId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
      id
      conversationId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
      id
      conversationId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
