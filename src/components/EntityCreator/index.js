import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import { isEmpty } from "lodash";
import AttributesArrayInput from "../AttributesArrayInput";
import styles from "./index.module.css";

const EntityCreator = ({ setComponents, components }) => {
  const initialValues = isEmpty(components)
    ? {
        entityTypes: [{ entityTypeName: "", entityTypeValues: "" }]
      }
    : components;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        const comps = JSON.stringify(values, null, 2);
        toast.success("comps");
        setComponents(values);
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="entityTypes">
            {({ insert, remove, push }) => (
              <>
                <div className={styles.entityWrapper}>
                  {values.entityTypes.length > 0 &&
                    values.entityTypes.map((entityType, index) => (
                      <div className={styles.entityContainer} key={index}>
                        <div className="entityType">
                          <label
                            htmlFor={`entityTypes.${index}.entityTypeName`}
                          >
                            Entity Type
                          </label>
                          <Field
                            name={`entityTypes.${index}.entityTypeName`}
                            type="text"
                          />
                          <ErrorMessage
                            name={`entityTypes.${index}.entityTypeName`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <AttributesArrayInput
                          key={`entityTypes.${index}.entityTypeValues`}
                          typeValues={entityType.entityTypeValues}
                          name={`entityTypes.${index}.entityTypeValues`}
                        />
                        <ErrorMessage
                          name={`entityTypes.${index}.entityTypeValues`}
                          component="div"
                          className="field-error"
                        />
                        <div className="col">
                          <Button color="danger" onClick={() => remove(index)}>
                            X
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
                <Button
                  color="primary"
                  onClick={() =>
                    push({ entityTypeName: "", entityTypeValues: "" })
                  }
                >
                  Add Entity
                </Button>
                {""}
              </>
            )}
          </FieldArray>
          <Button type="submit" color="primary">
            Create Entity
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EntityCreator;
