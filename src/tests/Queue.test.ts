import { Queue } from "../Queue";

describe('tests Queue Class', () => {
  let q = null
  beforeEach(() => {
    q = new Queue();
  })
  
  it('tests the creation of the queue', () => {
    expect(q).toBeInstanceOf(Queue);
    expect(q.getSize()).toBe(0)
    expect(q.isEmpty()).toBe(true)
  })
})
