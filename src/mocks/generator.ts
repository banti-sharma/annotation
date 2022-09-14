import _ from 'lodash'
import {
  DataSet,
  Role,
  DataPointState,
  User,
  DataPoint,
  DataPointLabel,
  DataPointAlternative,
} from '../types'

export const generateUsers = (limit: number): User[] => {
  return _.range(limit).map((i: number) => ({
    id: i,
    name: `temp - ${i}`,
    member_since: new Date().toISOString(),
    last_active: new Date().toISOString(),
    score: 0,
    role: Role.Admin,
  }))
}

export const generateDataPoints = (limit: number): DataPoint[] => {
  return _.range(limit).map((i: number) => ({
    id: i,
    dataset_id: 1,
    audio: 'https://staging.fewcents.co/assets/media/audio.mp3',
    created_on: new Date().toISOString(),
    last_updated_on: new Date().toISOString(),
    alternatives: [new Array<DataPointAlternative>()],
    tagged_by: new Array<number>(),
    labels: new Array<DataPointLabel>(),
    score: 0,
    state: DataPointState.Pending,
    is_delete: false,
  }))
}

export const generateDataSet = (limit: number): DataSet[] => {
  return _.range(limit).map((i: number) => ({
    id: i,
    source: i, // project-id
    description: `Test Description ${i}`, // description of the project
    type: [],
    labels: ['Cat', 'Dog', 'Mouse'],
    created_on: new Date().toISOString(),
    modified_on: new Date().toISOString(),
    maximum_voters: 10,
    minimum_voters: 2,
    minumum_consensus: 7,
    is_tagged: false,
    is_delete: false,
  }))
}
