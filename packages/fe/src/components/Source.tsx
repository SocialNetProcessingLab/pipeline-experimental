import { Box, MenuItem, Paper, Select, SelectChangeEvent, Stack } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { Handle, NodeProps, Position, useReactFlow } from 'react-flow-renderer'

export type Data = {
  id: number
  value: string
}

const data: Data[] = [
  {
    id: 1,
    value: 'himself65 is a github user'
  },
  {
    id: 2,
    value: 'lidangzzz is a twitter user'
  },
  {
    id: 3,
    value: 'apple is a company'
  }
]

export const Source: React.FC<NodeProps> = (props) => {
  console.log('source')
  const { setEdges } = useReactFlow()
  const [id, setID] = useState<number>(1)
  const handleChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      const value = +event.target.value
      console.log('selected value:', value)
      setID(value)

      setEdges((edges) => {
        return edges.map((edge) => {
          if (edge.source === props.id) {
            return {
              ...edge,
              data: {
                binding: data.find((d) => d.id === id)!
              }
            }
          }
          return edge
        })
      })
    },
    [id, props.id, setEdges]
  )
  return (
    <Box component='div'>
      <Handle type='target' position={Position.Left} />
      <Paper component='div'>
        <Stack spacing={1}>
          <Box component='label'>Select Data Source</Box>
          <Select<number> value={id} onChange={handleChange}>
            {data.map((item) => (
              <MenuItem value={item.id} key={item.id}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Paper>
      <Handle type='source' position={Position.Right} />
    </Box>
  )
}
