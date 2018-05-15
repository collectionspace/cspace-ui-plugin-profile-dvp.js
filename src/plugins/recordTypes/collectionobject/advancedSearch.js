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
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/responsibleDepartments/responsibleDepartment',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_publicart/publicartCollections/publicartCollection',
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
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/materialGroupList/materialGroup/material',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_publicart/publicartProductionDateGroupList/publicartProductionDateGroup/publicartProductionDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_publicart/publicartProductionPersonGroupList/publicartProductionPersonGroup/publicartProductionPerson',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
