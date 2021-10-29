import { HeadCell } from '../interfaces/HeadCell'
export const headCells: readonly HeadCell[] = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title'
  },
  {
    id: 'postType',
    numeric: true,
    disablePadding: false,
    label: 'Type'
  },
  {
    id: 'lastModifyDate',
    numeric: true,
    disablePadding: false,
    label: 'Last Modified'
  },
  {
    id: 'publicationDate',
    numeric: true,
    disablePadding: false,
    label: 'Published'
  },
  {
    id: 'expirationDate',
    numeric: true,
    disablePadding: false,
    label: 'Expiry Date'
  },
  {
    id: 'author',
    numeric: true,
    disablePadding: false,
    label: 'Author'
  },
  {
    id: 'topics',
    numeric: true,
    disablePadding: false,
    label: 'Topics'
  }
]
