import { Box, Paper } from '@mui/material'
import React, { useMemo } from 'react'
import { Handle, NodeProps, Position, useStore } from 'react-flow-renderer'

export const Target: React.FC<NodeProps> = (props) => {
  const edges = useStore((store) => store.edges)
  const inComerEdges = useMemo(() => edges.filter((edge) => edge.target === props.id), [edges, props.id])
  console.log('incomer', inComerEdges)
  return (
    <Box component='div'>
      <Handle type='target' position={Position.Left} />
      <Paper>
        <Box>Target {edges[0]?.data?.binding.value ?? 'no'}</Box>
      </Paper>
      <Handle type='target' position={Position.Right} />
    </Box>
  )
}
