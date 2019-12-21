const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="objectEntryInfo" collapsible>
        <Cols>
          <Col>
            <Field name="entryNumber" />

            <Field name="interviewStatusGroupList" subpath="ns2:intakes_dvp">
              <Field name="interviewStatusGroup">
                <Field name="interviewStatus" />
                <Field name="interviewDate" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="currentOwner" />
            <Field name="depositor" />
          </Col>
        </Cols>

        <Field name="approvalGroupList">
          <Field name="approvalGroup">
            <Field name="approvalGroup" />
            <Field name="approvalIndividual" />
            <Field name="approvalStatus" />
            <Field name="approvalDate" />
            <Field name="approvalNote" />
          </Field>
        </Field>

        <Field name="entryNote" />

        <Row>
          <Col>
            <Field name="entryDate" />
          </Col>

          <Col>
            <Field name="entryMethods">
              <Field name="entryMethod" />
            </Field>
          </Col>
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
