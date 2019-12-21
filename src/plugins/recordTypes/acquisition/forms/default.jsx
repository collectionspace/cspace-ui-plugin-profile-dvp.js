import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="acquisitionReferenceNumber" />
            <Field name="accessionDateGroup" />

          </Col>
          <Col>
            <Field name="archivesSpaceRecordId" subpath="ns2:acquisitions_dvp" />
            <Field name="acquisitionDateGroupList">
              <Field name="acquisitionDateGroup" />
            </Field>
          </Col>

        </Cols>

        <Row>
          <Col>
            <Field name="acquisitionMethod" />
          </Col>
          <Col>
            <InputTable name="acquisitionAuthorizer">
              <Field name="acquisitionAuthorizer" />
              <Field name="acquisitionAuthorizerDate" />
            </InputTable>

          </Col>
        </Row>

        <Row>
          <Col>
            <Field name="acquisitionSources">
              <Field name="acquisitionSource" />
            </Field>
          </Col>
          <Col>
            <Field name="owners">
              <Field name="owner" />
            </Field>
          </Col>
        </Row>

        <Row>
          <Field name="restrictionsApply" subpath="ns2:acquisitions_dvp" />
          <Field name="publish" subpath="ns2:acquisitions_dvp" />
          <Field name="accessRestrictions" subpath="ns2:acquisitions_dvp" />
          <Field name="useRestrictions" subpath="ns2:acquisitions_dvp" />
        </Row>

        <Field name="acquisitionNote" />
        <Field name="acquisitionProvisos" />

      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.acquisition.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
