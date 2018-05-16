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
        path: 'ns2:intakes_common/entryNumber',
      },
      {
        op: OP_RANGE,
        path: 'ns2:intakes_common/entryDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:intakes_common/entryMethods/entryMethod',
      },
      {
        op: OP_EQ,
        path: 'ns2:intakes_common/currentOwner',
      },
      {
        op: OP_EQ,
        path: 'ns2:intakes_common/depositor',
      },
      //
      // DVP custom fields
      //
      {
        op: OP_EQ,
        path: 'ns2:intakes_dvp/interviewStatusGroupList/interviewStatusGroup/interviewStatus',
      },
      {
        op: OP_RANGE,
        path: 'ns2:intakes_dvp/interviewStatusGroupList/interviewStatusGroup/interviewDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
