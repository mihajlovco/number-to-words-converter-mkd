import { CommitFunctions, ReleasePlan } from '@changesets/types';

async function getAddMessage(): Promise<string> {
  return 'changesets: publish new package version to npm';
}

async function getVersionMessage(releasePlan: ReleasePlan): Promise<string> {
  return releasePlan.releases.find((x) => x.newVersion).newVersion;
}

const defaultCommitFunctions: CommitFunctions = {
  getAddMessage,
  getVersionMessage
};

export default defaultCommitFunctions;
