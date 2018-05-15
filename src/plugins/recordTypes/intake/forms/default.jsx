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

        <Field name="entryNote" />
        <Row>
          <Field name="entryDate" />
          <Field name="entryMethods">
            <Field name="entryMethod" />
          </Field>
        </Row>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
