// @flow

import { Booking } from '../../../datasets/index';
import { graphql, RestApiMock } from '../../../services/TestingTools';
import config from '../../../../config/application';

const { allBookings } = config.restApiEndpoint;

beforeEach(() => {
  RestApiMock.onGet(allBookings).replyWithData(Booking.all);
  RestApiMock.onGet(
    `${allBookings}/2707251\\?simple_token=[0-9a-f-]{36}`,
  ).replyWithData(Booking[2707251]);
  RestApiMock.onGet(
    `${allBookings}/2707229\\?simple_token=[0-9a-f-]{36}`,
  ).replyWithData(Booking[2707229]);
  RestApiMock.onGet(
    `${allBookings}/2707224\\?simple_token=[0-9a-f-]{36}`,
  ).replyWithData(Booking[2707224]);
});

it('should return baggage parameters', async () => {
  const baggageQuery = `{
      allBookings {
        edges {
          node {
            databaseId
            allowedBaggage {
              cabin { height, length, width, weight, note }
              checked { height, length, width, weight, note }
            }
          }
        }
      }
    }`;
  expect(await graphql(baggageQuery)).toMatchSnapshot();
});