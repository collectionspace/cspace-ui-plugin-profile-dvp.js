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
    InputTable,
    Field,
    Subrecord,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="personTermGroupList">
          <Field name="personTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="nameDetail">
                <Field name="salutation" />
                <Field name="title" />
                <Field name="foreName" />
                <Field name="middleName" />
                <Field name="surName" />
                <Field name="nameAdditions" />
                <Field name="initials" />
              </InputTable>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Col>
            <Row>
              <Field name="birthDateGroup" />
              <Field name="birthPlace" />
            </Row>

            <Row>
              <Field name="deathDateGroup" />
              <Field name="deathPlace" />
            </Row>
          </Col>
        </Row>
      </Panel>

      <Panel name="connections" collapsible>
        <Field name="dartmouthGroupList" subpath="ns2:persons_dvp">
          <Field name="dartmouthGroup">
            <Panel>
              <Row>
                <Field name="dartmouthConnection" />
                <Field name="dartmouthConnectionOther" />
              </Row>

              <InputTable>
                <Field name="collegeBranch" />
                <Field name="yearsOfAttendanceDate" />
                <Field name="yearOfGraduationDate" />
              </InputTable>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Subrecord name="contact" />

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
