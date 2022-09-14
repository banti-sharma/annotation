import {
  CheckCircle,
  CheckCircleOutlined,
  Circle,
  CircleOutlined,
  Close,
  Dataset,
  Save,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import { FC, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import Action from '../../store/actionTypes'
import { DataPoint, DataPointState, DataSet } from '../../types'
import _ from 'lodash'

interface ComponentProps extends DialogProps {
  row: DataPoint
  dataSet: DataSet
  onClose: () => void
  onConfirm: (dataPoint: DataPoint) => void
}

export const DataPointEditor: FC<ComponentProps> = ({
  row,
  onClose,
  onConfirm,
  dataSet,
  ...props
}) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((x) => x.auth.user)
  const rows = useAppSelector((x) => x.dataPoints.data)
  const [dataPoint, setDataPoint] = useState<DataPoint>(row)
  const [userlabels, setSelectedOption] = useState<string[]>([])

  useEffect(() => {
    const userLabel = dataPoint.labels.find((x) => x.user_id === user?.id)
    setSelectedOption(userLabel?.labels || [])
  }, [dataPoint?.id])

  const handleClose = () => {
    markSelectedTag()
    onClose()
  }

  const handleNextClick = () => {
    if (userlabels) {
    }
    const index = rows.indexOf(dataPoint)
    if (index < rows.length - 1) {
      const nextRow = rows[index + 1]
      markSelectedTag()
      setDataPoint(nextRow)
    }
  }

  const handlePreviousClick = () => {
    const index = rows.indexOf(dataPoint)
    if (index > 0) {
      const previousRow = rows[index - 1]
      markSelectedTag()
      setDataPoint(previousRow)
    }
  }

  const handleSelection = (option: string) => {
    setSelectedOption((x) => [option])
  }

  const maskDataPointState = (point: DataPoint) => {
    const allLabels = _(point.labels)
      .map((x) => x.labels)
      .flatten()
      .value()

    const labelsPerValue = dataSet.labels.map((x) => {
      const xLabels = allLabels.filter((y) => y === x)
      return { key: x, value: xLabels.length } //[{key:'Cat', value:3}, ...]
    })
    let max = { key: 'temp', value: -1 }
    let allLabelCount = 0
    labelsPerValue.forEach((x) => {
      if (x.value > max.value) {
        max = x
      }
      allLabelCount += x.value
    })
    point.score = (max.value / allLabelCount) * 100
  }

  const markSelectedTag = () => {
    if (user && userlabels.length) {
      const otherLabels = _(dataPoint.labels)
        .filter((x) => x.user_id !== user?.id)
        .value()

      const taggedPoint = {
        ...dataPoint,
        labels: [
          ...otherLabels,
          {
            user_id: user.id,
            labels: userlabels,
          },
        ],
      } as DataPoint

      maskDataPointState(taggedPoint)
      const mapped = rows.map((x) => {
        return x.id === dataPoint.id ? taggedPoint : x
      })
      dispatch({ type: Action.SET_DATA, payload: mapped })
    }
  }

  return (
    <Dialog {...props} onClose={handleClose}>
      <DialogTitle sx={{ borderBottom: '1px solid lightgray' }}>
        <Box display="flex" flexDirection="row">
          <Box flexGrow="1">
            <label>{`Data Point ${dataPoint.id}`}</label>
          </Box>
          <Box>
            <IconButton size="small" onClick={() => handleClose()}>
              <Close fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            paddingTop: '20px',
            gap: '20px',
            flexDirection: 'column',
          }}
        >
          <Typography fontSize="15px">
            Listen the following audio carefully and tag it's sound as of a "Dog" or a "Cat".
          </Typography>
          <Box sx={{ width: '100%' }}>
            <audio controls style={{ minHeight: '60px', minWidth: '400px', width: '100%' }}>
              <source src={`${dataPoint.audio}`} type="audio/mpeg" />
            </audio>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '16px' }}>
            {dataSet.labels.map((x) => (
              <Button
                key={x}
                startIcon={userlabels.includes(x) ? <CheckCircle /> : <CircleOutlined />}
                variant={`${userlabels.includes(x) ? 'contained' : 'outlined'}`}
                sx={{ borderRadius: '17px' }}
                onClick={() => handleSelection(x)}
              >
                {x}
              </Button>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ borderTop: '1px solid lightgray', padding: '16px' }}>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button sx={{ width: '100px' }} variant="contained" onClick={handlePreviousClick}>
            Previous
          </Button>
          <Button sx={{ width: '100px' }} variant="contained" onClick={handleNextClick}>
            Next
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}
