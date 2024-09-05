function getAddMessage() {
  return 'changesets: publish new package version to npm';
}

function getVersionMessage(releasePlan) {
  return releasePlan.releases.find((x) => x.newVersion).newVersion;
}

module.exports = { getAddMessage, getVersionMessage };
