/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
  query products($title: String) {
    products(title: $title) {
      title
      subtitle
      url
    }
  }
`;
export const USERS_QUERY = gql`
  query users {
    users {
      _id
      email
      createdAt
      updatedAt
    }
  }
`;
export const USER_QUERY = gql`
  query user($id: ID) {
    user(_id: $id) {
      _id
      email
      createdAt
      updatedAt
    }
  }
`;
