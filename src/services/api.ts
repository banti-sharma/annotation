import { generateDataPoints, generateDataSet, generateUsers } from '../mocks/generator'
import { DataPoint, DataSet, Role, User } from '../types'

export const getDataSets = async (): Promise<DataSet[]> => {
  return new Promise((resolve) => {
    resolve(generateDataSet(20))
  })
}

export const getDataSet = async (id: number): Promise<DataSet> => {
  return new Promise((resolve) => {
    const dataSets = generateDataSet(id)
    resolve(dataSets[0])
  })
}

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    resolve(generateUsers(10))
  })
}

function getRandomInt(max: number) {
  return Math.ceil(Math.random() * max)
}

export const getUser = async (role: Role): Promise<User> => {
  return new Promise((resolve) => {
    resolve({
      id: getRandomInt(10),
      name: `${role} User`,
      member_since: new Date().toISOString(),
      last_active: new Date().toISOString(),
      score: 0,
      role: role,
    })
  })
}

export const getDataPoints = async (): Promise<DataPoint[]> => {
  return new Promise((resolve) => {
    resolve(generateDataPoints(20))
  })
}
