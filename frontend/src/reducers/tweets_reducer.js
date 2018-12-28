import {
  RECEIVE_TWEETS,
  RECEIVE_USER_TWEETS,
  RECEIVE_NEW_TWEET
} from '../actions/tweet_actions';

const initialState = {
  all: {},
  user: {},
  new: undefined
};

const TweetReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TWEETS:
      newState.all = action.tweets.data;
      return newState;
    case RECEIVE_USER_TWEETS:
      newState.user = action.tweets.data;
      return newState;
    case RECEIVE_NEW_TWEET:
      newState.new = action.tweet.data;
      return newState;
    default:
      return state;
  }
};

export default TweetReducer;