import { Queue } from "../Queue";

describe( 'tests Queue Class', () => {
  let q = null
  beforeEach( () => {
    q = new Queue();
  } )
  
  it( 'tests the creation of the queue', () => {
    expect( q ).toBeInstanceOf( Queue );
    expect( q.getSize() ).toBe( 0 )
    expect( q.isEmpty() ).toBe( true )
  } )
  
  it( 'checks the enqueue function', () => {
    q.enqueue( 5 )
    expect( q.getSize() ).toBe( 1 )
    expect( q.dll.head.value ).toBe( 5 )
    q.enqueue( 6 )
    expect( q.getSize() ).toBe( 2 )
    expect( q.dll.tail.value ).toBe( 6 )
    q.enqueue( 7 )
    expect( q.getSize() ).toBe( 3 )
    expect( q.dll.tail.value ).toBe( 7 )
  } )
} )
