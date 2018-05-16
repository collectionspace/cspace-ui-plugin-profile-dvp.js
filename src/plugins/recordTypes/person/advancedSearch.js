export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termDisplayName',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termFlag',
      },
      {
        op: OP_RANGE,
        path: 'ns2:persons_common/birthDateGroup',
      },
      {
        op: OP_RANGE,
        path: 'ns2:persons_common/deathDateGroup',
      },
      //
      // Custom DVP fields
      //
      {
        op: OP_EQ,
        path: 'ns2:persons_dvp/dartmouthGroupList/dartmouthGroup/dartmouthConnection',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:persons_dvp/dartmouthGroupList/dartmouthGroup/dartmouthConnectionOther',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_dvp/dartmouthGroupList/dartmouthGroup/collegeBranch',
      },
      {
        op: OP_RANGE,
        path: 'ns2:persons_dvp/dartmouthGroupList/dartmouthGroup/yearsOfAttendanceDate',
      },
      {
        op: OP_RANGE,
        path: 'ns2:persons_dvp/dartmouthGroupList/dartmouthGroup/yearOfGraduationDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
