/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String!) {
    onCreateNote(owner: $owner) {
      id
      note
      owner
      sentiment
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String!) {
    onUpdateNote(owner: $owner) {
      id
      note
      owner
      sentiment
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String!) {
    onDeleteNote(owner: $owner) {
      id
      note
      owner
      sentiment
      createdAt
      updatedAt
    }
  }
`;
