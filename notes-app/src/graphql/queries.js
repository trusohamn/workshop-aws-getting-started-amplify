/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      note
      owner
      sentiment
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        note
        owner
        sentiment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const notesByOwner = /* GraphQL */ `
  query NotesByOwner(
    $owner: String
    $note: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByOwner(
      owner: $owner
      note: $note
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        note
        owner
        sentiment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
