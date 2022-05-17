import { Box } from '@mui/material'
import React from 'react'
import { NodeProps } from 'react-flow-renderer'

export const Window: React.FC<NodeProps> = (props) => {
  return (
    <Box
      aria-label='window'
      // fixme: using constants in @mui
      sx={{
        backgroundColor: '#fff',
        minWidth: '300px',
        minHeight: '400px',
        width: 'auto',
        height: 'auto',
        border: '1px solid #acacac',
        borderRadius: '6px',
        boxShadow: '0px 0px 20px #acacac'
      }}>
      <Box
        aria-label='title-bar'
        sx={{
          color: '#4d494d',
          textAlign: 'center',
          height: '20px',
          borderTop: '1px solid #f3f1f3',
          borderBottom: '1px solid #b1aeb1',
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          userSelect: 'none',
          cursor: 'default'
        }}>
        <Box aria-label='buttons'>
          <Box aria-label='delete' />
          <Box aria-label='minimize' />
        </Box>
        <Box aria-label='header'>{props.data.title}</Box>
      </Box>
      <Box aria-label='content'>{props.data.label}</Box>
    </Box>
  )
}
