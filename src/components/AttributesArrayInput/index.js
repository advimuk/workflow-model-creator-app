import React from "react";
import { FieldArray, Field, ErrorMessage } from "formik";
import { Button } from "reactstrap";
import styles from "./index.module.css";
const AttributesArrayInput = ({ typeValues, name, index }) => {
  const initialValues = {
    attributeKey: "",
    attributeValue: ""
  };
  return (
    <FieldArray name={name}>
      {({ form, remove, push }) => (
        <>
          {typeValues.length > 0 &&
            typeValues.map((item, index) => (
              <div
                key={`-${name}.${index}.attributeContainer`}
                className={styles.attributeContainer}
              >
                <div>
                  <div>
                    <label
                      key={`label-${name}.${index}.attributeKey`}
                      htmlFor={`${name}.${index}.attributeKey`}
                    >
                      Attribute Key
                    </label>
                    <Field
                      key={`Field-${name}.${index}.attributeKey`}
                      name={`${name}.${index}.attributeKey`}
                      type="text"
                    />
                    <ErrorMessage
                      key={`Err-${name}.${index}.attributeKey`}
                      name={`${name}.${index}.attributeKey`}
                    />
                  </div>
                  <div>
                    <label
                      key={`label-${name}.${index}.attributeValue`}
                      htmlFor={`${name}.${index}.attributeValue`}
                    >
                      Attribute Value
                    </label>
                    <Field
                      key={`field-${name}.${index}.attributeValue`}
                      name={`${name}.${index}.attributeValue`}
                      type="text"
                    />
                    <ErrorMessage
                      key={`Err-${name}.${index}.attributeValue`}
                      name={`${name}.${index}.attributeValue`}
                    />
                  </div>
                </div>
                <Button color="danger" onClick={() => remove(index)}>
                  X
                </Button>
              </div>
            ))}
          <Button color="primary" onClick={() => push(initialValues)}>
            Add Attributes
          </Button>
        </>
      )}
    </FieldArray>
  );
};

export default AttributesArrayInput;
