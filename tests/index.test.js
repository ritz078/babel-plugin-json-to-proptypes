import test from 'ava'
import { transform } from 'babel-core'
import plugin from '../src'

const json = `{
  "hello": [
    {
      "_id": "5988946e45e52d60b33a25c7",
      "latitude": 50.087977,
      "longitude": 72.167197,
      "tags": [
        "nulla",
        "ullamco"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Robinson Woods"
        },
        {
          "id": 1,
          "name": "Lottie Hogan"
        }
      ]
    },
    {
      "_id": "5988946ef6090217857d7b0f",
      "latitude": 47.460772,
      "longitude": 85.95137,
      "tags": [
        "aliqua",
        "nulla"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Mamie Wyatt"
        },
        {
          "id": 1,
          "name": "Alejandra Mcdaniel"
        }
      ]
    }
  ]
}`

test('Add', (t) => {
	const {code} = transform(`const propTypes = ${json}`, {
		plugins: [plugin]
	})

	t.snapshot(code)
})
