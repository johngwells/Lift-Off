import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        photo
        name
        id
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  console.log({ data });
  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracksForHome?.map(card => (
          <TrackCard key={card.id} track={card} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
