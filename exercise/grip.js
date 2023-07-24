let alice = {
    id: 1,
    name: 'alice wong',
    follows: [],
  }
  
  let bob = {
    id: 2,
    name: 'bob wong',
    follows: [],
  }

  alice.follows.push(bob)
  bob.follows.push(alice)

  console.dir(
    {
        alice,
        bob,
    },
    {depth: 20},
  )