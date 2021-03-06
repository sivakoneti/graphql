// @flow

import { graphql, RestApiMock } from '../../../common/services/TestingTools';
import config from '../../../../config/application';
import PrgMexDataset from '../../datasets/prg-mex.json';

beforeEach(() => {
  RestApiMock.onGet(
    config.restApiEndpoint.allFlights({
      flyFrom: 'PRG',
      to: 'MEX',
      dateFrom: '08/08/2017',
      dateTo: '08/09/2017',
    }),
  ).replyWithData(PrgMexDataset);

  RestApiMock.onGet(
    config.restApiEndpoint.allFlights({
      flyFrom: 'PRG',
      to: 'MEX',
      dateFrom: '08/08/2017',
      dateTo: '08/09/2017',
      adults: 3,
    }),
  ).replyWithData(PrgMexDataset);

  RestApiMock.onGet(
    config.restApiEndpoint.allFlights({
      flyFrom: 'PRG',
      to: 'MEX',
      dateFrom: '08/08/2017',
      dateTo: '08/09/2017',
      locale: 'cz',
    }),
  ).replyWithData(PrgMexDataset);
});

describe('All Flights booking URL', () => {
  it('should return booking urls', async () => {
    const allFlightsSearchQuery = `
    query ($input: FlightsSearchInput!) {
      allFlights(search: $input) {
        edges {
          node {
            departure { time }
            bookingUrl
          }
        }
      }
    }`;
    const variables = {
      input: {
        from: { location: 'PRG' },
        to: { location: 'MEX' },
        date: {
          from: '2017-08-08',
          to: '2017-09-08',
        },
      },
    };
    expect(await graphql(allFlightsSearchQuery, variables)).toMatchSnapshot();
  });

  it('should return booking urls for more passengers', async () => {
    const allFlightsSearchQuery = `
    query ($input: FlightsSearchInput!) {
      allFlights(search: $input) {
        edges {
          node {
            departure { time }
            bookingUrl
          }
        }
      }
    }`;
    const variables = {
      input: {
        from: { location: 'PRG' },
        to: { location: 'MEX' },
        date: {
          from: '2017-08-08',
          to: '2017-09-08',
        },
        passengers: { adults: 3 },
      },
    };
    expect(await graphql(allFlightsSearchQuery, variables)).toMatchSnapshot();
  });

  it('should return booking urls with locale', async () => {
    const allFlightsSearchQuery = `
    query ($input: FlightsSearchInput!, $options: FlightsOptionsInput) {
      allFlights(search: $input, options: $options) {
        edges {
          node {
            departure { time }
            bookingUrl
          }
        }
      }
    }`;
    const variables = {
      input: {
        from: { location: 'PRG' },
        to: { location: 'MEX' },
        date: {
          from: '2017-08-08',
          to: '2017-09-08',
        },
      },
      options: {
        locale: 'cs_CZ',
      },
    };
    expect(await graphql(allFlightsSearchQuery, variables)).toMatchSnapshot();
  });
});
