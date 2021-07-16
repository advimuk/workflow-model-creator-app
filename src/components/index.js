import React, { useState } from "react";
import EntityCreator from "./EntityCreator";
import ModelCreator from "./ModelCreator";

import styles from "./index.module.css";
const WorkFlowSpace = () => {
  const [isEntityCreatorTab, setIsEntityCreatorTab] = useState(true);
  const [components, setComponents] = useState({});

  return (
    <>
      <div className={styles.subTabsContainer}>
        <div className={styles.subTabs}>
          <span
            className={
              isEntityCreatorTab ? styles.activeLink : styles.inactiveLink
            }
            onClick={
              !isEntityCreatorTab
                ? () => setIsEntityCreatorTab(toggle => !toggle)
                : null
            }
          >
            Entity Creator
          </span>
          <span
            className={
              !isEntityCreatorTab ? styles.activeLink : styles.inactiveLink
            }
            onClick={
              isEntityCreatorTab
                ? () => setIsEntityCreatorTab(toggle => !toggle)
                : null
            }
          >
            Model Creator
          </span>
        </div>
      </div>
      {isEntityCreatorTab ? (
        <EntityCreator setComponents={setComponents} components={components} />
      ) : (
        <ModelCreator components={components} />
      )}
    </>
  );
};

export default WorkFlowSpace;
