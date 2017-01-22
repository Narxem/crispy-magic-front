import fetch from 'isomorphic-fetch';

import { ApiUrl } from '../../shared/constants';
import {
  beginFetchingContainer,
  finishFetchingContainer,
  failFetchingContainer,
} from './container-actions';

const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';
const receiveEntities = (entityType, json) => ({
  type: RECEIVE_ENTITIES,
  payload: {
    entityType,
    entities: json,
    receivedAt: Date.now(),
  },
});

const fetchEntities = (entityType, criteria, container) => (dispatch) => {
  dispatch(beginFetchingContainer(container, entityType));
  return fetch(ApiUrl[entityType].retrieve(criteria))
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(json => {
      dispatch(receiveEntities(entityType, json));
      dispatch(finishFetchingContainer(container, json.map(entity => entity.id)));
    })
    // .catch(error => dispatch(failFetchingContainer(container, entityType, error)));
};

export {
  RECEIVE_ENTITIES, receiveEntities,
  fetchEntities
}
