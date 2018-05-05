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
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="objectEntryInfo" collapsible>
        <Cols>
          <Col>
            <Field name="entryNumber" />

            <InputTable name="proposedTreatmentEst">
              <Field name="interviewStatus" subpath="ns2:intakes_dvp" />
              <Field name="interviewStatusDate" subpath="ns2:intakes_dvp" />
            </InputTable>

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
