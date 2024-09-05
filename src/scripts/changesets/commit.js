async function getAddMessage() {
  return 'changesets: publish new package version to npm';
}

async function getVersionMessage(releasePlan) {
  return releasePlan.releases.find((x) => x.newVersion).newVersion;
}

module.export = { getAddMessage, getVersionMessage };
