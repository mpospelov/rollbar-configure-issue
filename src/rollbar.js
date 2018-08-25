import RollbarClass from 'rollbar';

const configureOptions = {
  enabled: false,
  accessToken: "527822d76f884f1d9f40a2e3afd6cb77",
  captureUncaught: true,
};

export const Rollbar = new RollbarClass({
  ...configureOptions,
  payload: {
    environment: 'development',
    client: {
      javascript: {
        code_version: process.env.GIT_SHA,
        guess_uncaught_frames: true,
      },
    },
  },
});
