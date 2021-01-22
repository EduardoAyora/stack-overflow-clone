jest.mock('./util')
import {addId} from './util'

test('agrega id a documento', () => {
    expect(addId({id: '123'})).toEqual({id: '123'})
})