import { Box, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import type { Connection, Edge, Node } from 'react-flow-renderer'
import ReactFlow, { addEdge, Controls, updateEdge, useEdgesState, useNodesState } from 'react-flow-renderer'

import { Source } from './components/Source'
import { Target } from './components/Target'

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'dataSource',
    data: {},
    position: { x: 250, y: 0 }
  },
  {
    id: '2',
    data: {},
    type: 'dataTarget',
    position: { x: 100, y: 200 }
  },
  {
    id: '3',
    data: { label: 'Node C' },
    position: { x: 400, y: 200 }
  }
]

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    label: 'connected edge'
  }
]

const nodeTypes = {
  dataSource: Source,
  dataTarget: Target
}

export const App: React.FC = function App () {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  console.log('edges', edges)
  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) => setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    [setEdges]
  )
  const onConnect = useCallback((params: Edge | Connection) => setEdges((els) => addEdge(params, els)), [setEdges])

  return (
    <>
      <Typography variant='h1'>Hello world!</Typography>
      <Box
        component='div'
        sx={{
          height: '700px',
          width: '900px'
        }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          snapToGrid
          onEdgeUpdate={onEdgeUpdate}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition='top-right'>
          <Controls />
        </ReactFlow>
      </Box>
    </>
  )
}
