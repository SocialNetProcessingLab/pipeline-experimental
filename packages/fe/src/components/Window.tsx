import CloseIcon from '@mui/icons-material/Close'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import { Box, styled } from '@mui/material'
import React from 'react'
import { NodeProps } from 'react-flow-renderer'
const BarButton = styled(Box)({
  display: 'flex',
  width: '11px',
  height: '11px',
  borderRadius: '50%',
  cursor: 'pointer'
})

export const Window: React.FC<NodeProps> = (props) => {
  return (
    <Box
      aria-label='window'
      // fixme: using constants in @mui
      sx={{
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
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
          display: 'flex',
          color: '#4d494d',
          textAlign: 'center',
          height: '20px',
          borderTop: '1px solid #f3f1f3',
          borderBottom: '1px solid #b1aeb1',
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          userSelect: 'none',
          cursor: 'grab'
        }}>
        <Box
          aria-label='buttons'
          sx={{
            paddingLeft: '8px',
            paddingTop: '3px',
            display: 'flex',
            flexDirection: 'row',
            gap: '6px'
          }}>
          <BarButton
            aria-label='delete'
            sx={{
              backgroundColor: '#ff5c5c',
              border: '1px solid #e33e41',
              '&:active': {
                backgroundColor: '#c14645'
              }
            }}>
            <CloseIcon
              style={{
                width: '11px',
                height: '11px'
              }}
            />
          </BarButton>
          <BarButton
            aria-label='minimize'
            sx={{
              backgroundColor: '#00ca56',
              border: '1px solid #14ae46',
              '&:active': {
                backgroundColor: '#029740'
              }
            }}>
            <OpenInFullIcon
              style={{
                width: '11px',
                height: '11px'
              }}
            />
          </BarButton>
        </Box>
        <Box
          aria-label='header'
          sx={{
            flex: '1 1 auto'
          }}>
          {props.data.title}
        </Box>
      </Box>
      <Box
        aria-label='content'
        className='nodrag'
        sx={{
          flex: '1 1 auto',
          cursor: 'default'
        }}>
        {props.data.label}
      </Box>
    </Box>
  )
}
