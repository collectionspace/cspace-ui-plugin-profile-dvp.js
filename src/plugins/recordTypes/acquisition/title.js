export default configContext => (data) => {
  const {
    getPart,
    deepGet,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'acquisitions_common');

  if (!common) {
    return '';
  }

  const acquisitionReferenceNumber = common.get('acquisitionReferenceNumber');
  const owner = getDisplayName(deepGet(common, ['acquisitionSources', 'acquisitionSource', 0]));

  return [acquisitionReferenceNumber, owner].filter(part => !!part).join(' – ');
};
