const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  const time = new Date().toTimeString();
  const githubContext = JSON.stringify(github.context, undefined, 2);

  console.log(`Hello ${nameToGreet}!`);
  console.log(`The event github context: \n\n\n ${githubContext}`);

  // core.setOutput('time', time);
} catch (error) {
  core.setFailed(error.message);
}
