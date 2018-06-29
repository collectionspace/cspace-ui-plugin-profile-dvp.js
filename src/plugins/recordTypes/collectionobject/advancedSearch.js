export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
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
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/responsibleDepartments/responsibleDepartment',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/recordStatus',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/titleGroupList/titleGroup/title',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectNameList/objectNameGroup/objectName',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
