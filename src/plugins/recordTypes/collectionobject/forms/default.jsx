import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  // const {
  //   extensions,
  // } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />

            <Field name="otherNumberList">
              <Field name="otherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

          </Col>
          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>
          </Col>
        </Row>

        <Row>
          <Field name="titleGroupList">
            <Field name="titleGroup">
              <Field name="title" />
            </Field>
          </Field>
        </Row>

        <Row>
          <Col>
            <Field name="objectNameList">
              <Field name="objectNameGroup">
                <Field name="objectName" />
              </Field>
            </Field>
          </Col>
          <Col>
            <Field name="collection" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Field name="recordStatus" />
          </Col>
          <Col>
            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>
          </Col>
        </Row>

      </Panel>

      <Panel name="desc" collapsible>

        <Row>
          <Col>
            <Field name="contentActivities">
              <Field name="contentActivity" />
            </Field>

            <Field name="contentConcepts">
              <Field name="contentConcept" />
            </Field>

            <Field name="contentDateGroup" />

            <Field name="contentEventNameGroupList">
              <Field name="contentEventNameGroup">
                <Field name="contentEventName" />
                <Field name="contentEventNameType" />
              </Field>
            </Field>

            <Field name="contentLanguages">
              <Field name="contentLanguage" />
            </Field>

            <Field name="contentOrganizations">
              <Field name="contentOrganization" />
            </Field>

            <Field name="contentOtherGroupList">
              <Field name="contentOtherGroup">
                <Field name="contentOther" />
                <Field name="contentOtherType" />
              </Field>
            </Field>

            <Field name="contentPeoples">
              <Field name="contentPeople" />
            </Field>

          </Col>

          <Col>
            <Field name="contentDescription" />
            <Field name="contentNote" />

            <Field name="contentPersons">
              <Field name="contentPerson" />
            </Field>

            <Field name="contentPlaces">
              <Field name="contentPlace" />
            </Field>

          </Col>
        </Row>


        <Field name="measuredPartGroupList">
          <Field name="measuredPartGroup">
            <Panel>
              <Field name="dimensionSummary" />
              <Row>
                <Field name="dimensionSubGroupList">
                  <Field name="dimensionSubGroup">
                    <Field name="measurementUnit" />
                    <Field name="dimension" />
                    <Field name="value" />
                  </Field>
                </Field>
              </Row>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="prod" collapsible>
        <Row>
          <Col>
            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>

            <Field name="objectProductionOrganizationGroupList">
              <Field name="objectProductionOrganizationGroup">
                <Field name="objectProductionOrganization" />
                <Field name="objectProductionOrganizationRole" />
              </Field>
            </Field>

            <Field name="objectProductionPeopleGroupList">
              <Field name="objectProductionPeopleGroup">
                <Field name="objectProductionPeople" />
                <Field name="objectProductionPeopleRole" />
              </Field>
            </Field>

            <Field name="objectProductionPersonGroupList">
              <Field name="objectProductionPersonGroup">
                <Field name="objectProductionPerson" />
                <Field name="objectProductionPersonRole" />
              </Field>
            </Field>

            <Field name="objectProductionPlaceGroupList">
              <Field name="objectProductionPlaceGroup" >
                <Field name="objectProductionPlace" />
                <Field name="objectProductionPlaceRole" />
              </Field>
            </Field>

          </Col>

          <Col>
            <Field name="objectProductionNote" />
            <Field name="objectProductionReasons">
              <Field name="objectProductionReason" />
            </Field>
          </Col>

        </Row>
      </Panel>

      <Panel name="reference" collapsible>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  sortOrder: 0,
  template: template(configContext),
});
