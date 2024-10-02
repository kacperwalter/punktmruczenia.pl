const qualifications = {
  name: 'qualificationsYear',
  title: 'Qualifications Year',
  type: 'object',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}

export default qualifications