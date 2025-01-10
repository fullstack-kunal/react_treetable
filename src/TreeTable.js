import React, { useState, useEffect } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { NodeService } from "./service/NodeService";

export default function BasicDemo() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    NodeService.getTreeTableNodes().then((data) => setNodes(data));
  }, []);

  return (
    <div className="card">
      <TreeTable
        value={nodes}
        tableStyle={{ minWidth: "50rem" }}
        onExpand={(e) => {
          console.log(e);
        }}
      >
        <Column field="name" header="Name" expander></Column>
        <Column field="size" header="Size"></Column>
        <Column field="type" header="Type"></Column>
      </TreeTable>
    </div>
  );
}
