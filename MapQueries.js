import React from "react";
import { graphql } from "react-apollo";

import gql from "graphql-tag";

export const BUSLIST = gql`
  query searchAllBusList($name: String!) {
    searchAllBusList(name: $name) {
      list {
        id
        name
        x
        y
      }
    }
  }
`;
