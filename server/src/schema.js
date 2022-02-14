const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome:[Track!]
  }

  "A track is a group of modules that teach a specific topic"
  type Track {
    id: ID!
    "the tracks title"
    title: String!
    "the tracks main author"
    author: Author!
    "URL to the image for the track's card"
    thumbnail: String
    "length to complete"
    length: Int
    "number of modules this track contains"
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
