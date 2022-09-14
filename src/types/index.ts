import Action from '../store/actionTypes'

export interface DataPointLabel {
  user_id: number
  labels: string[]
}

export interface DataPointAlternative {
  user_id: number
  label: string[]
}

export interface DataPoint {
  id: number
  dataset_id: number
  audio: string
  created_on: string
  last_updated_on: string
  alternatives: [DataPointAlternative[]]
  tagged_by: number[]
  labels: DataPointLabel[]
  score: number
  state: string
  is_delete: boolean
}

export enum Role {
  Admin = 'admin',
  Member = 'member',
  Reviewer = 'reviewer',
}

export enum DataPointState {
  Pending = 'Pending',
  Conflicting = 'Conflicting',
  Complete = 'Complete',
}

export interface User {
  id: number
  name: string
  member_since: string
  last_active: string
  score: number
  role: Role
}

export interface DataSet {
  id: number
  source: number // project-id
  description: string // description of the project
  type: number[]
  labels: string[]
  created_on: string
  modified_on: string
  maximum_voters: number
  minimum_voters: number
  minumum_consensus: number
  is_tagged: boolean
  is_delete: boolean
}

export interface IAction {
  type: Action
  payload?: any
}
