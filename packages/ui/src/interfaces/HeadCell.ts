import { PostTable } from './PostTable'

export interface HeadCell {
  disablePadding: boolean
  id: keyof PostTable
  label: string
  numeric: boolean
}
