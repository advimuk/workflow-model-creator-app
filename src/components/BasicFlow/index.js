import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  removeElements,
  addEdge
} from "react-flow-renderer";
const initialElements = [
  { id: "1", data: { label: "Node 1" }, position: { x: 250, y: 5 } }
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Sidebar = ({ components }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  console.log(components);
  return (
    <aside>
      <div>You can drag these nodes to the pane.</div>
      <div onDragStart={event => onDragStart(event, "input")} draggable>
        Input Node
      </div>
      <div onDragStart={event => onDragStart(event, "default")} draggable>
        Default Node
      </div>
      <div onDragStart={event => onDragStart(event, "output")} draggable>
        Output Node
      </div>
    </aside>
  );
};
const BasicFlow = ({ components }) => {
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = params => setElements(els => addEdge(params, els));
  const onElementsRemove = elementsToRemove =>
    setElements(els => removeElements(elementsToRemove, els));

  const onLoad = _reactFlowInstance => setReactFlowInstance(_reactFlowInstance);

  const onDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = event => {
    event.preventDefault();

    // const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX,
      y: event.clientY - 40
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type} node` }
    };

    setElements(es => es.concat(newNode));
  };

  return (
    <ReactFlowProvider>
      {/* <div className={styles.reactflow_wrapper} ref={reactFlowWrapper}> */}
      <div>
        <Sidebar components={components} />
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={onLoad}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          {/* <Controls /> */}
        </ReactFlow>
      </div>
      {/* </div> */}
    </ReactFlowProvider>
  );
};

export default BasicFlow;
