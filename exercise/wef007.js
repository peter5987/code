function newArray(size) {
    let array = new Array(size)
    function getElement(index) {
      if (index >= 0 && index < size) {
        return array[index]
      } else {
        throw new Error(
          `Invalid index, should be 0 to ${size - 1}, but got: ${index}`,
        )
      }
    }
    function setElement(index, value) {
      if (index >= 0 && index < size) {
        array[index] = value
      } else {
        throw new Error(
          `Invalid index, should be 0 to ${size - 1}, but got: ${index}`,
        )
      }
    }
    function getSize() {
      return size
    }
    return {
      getElement,
      setElement,
      getSize,
    }
  }
  
  // let prices = newArray(3)
  // prices.setElement(0, 10)
  // prices.setElement(1, 20)
  // prices.setElement(2, 30)
  // console.log(prices.getElement(0))
  // console.log(prices.getElement(1))
  // console.log(prices.getElement(2))
  // console.log(prices.getElement(3))
  // console.log(prices.getElement(-1))
  // prices.setElement('length', 1)
  
  function newArrayList(size) {
    let array = newArray(size)
    function add(value) {
      // TODO
    }
    function deleteByIndex(index) {
      // TODO
    }
    return {
      ...array,
      add,
      deleteByIndex,
    }
  }
  
  function newLinkedList() {
    function getValue(index) {
       return{
        value,
        next,
       }
    }
    function setValue(index, value) {
      // T
    }
    function add(value) {
      // TODO
    }
    function deleteByIndex(index) {
      // TODO
    }
    function getSize() {
      // TODO
    }
    return {
      getValue,
      setValue,
      add,
      deleteByIndex,
      getSize,
    }
  }
  
  function newStack(capacity) {
        function pushToTop() {
            const store = []
            return {
              enqueue(item){
                  store.push(item)
              },
              dequeue(){
                  return store.shift()
              },
              store(){
                  return store
              }
            }
          }
      
    function popFromTop() {
      // TODO
    }
    function getSize() {
      // TODO
    }
    return {
      pushToTop,
      popFromTop,
      getSize,
    }
  }
  
  function newQueue(capacity) {
    function enqueue(value) {
      // TODO
    }
    function dequeue(value) {
      // TODO
    }
    function getSize() {
      // TODO
    }
    return {
      enqueue,
      dequeue,
      getSize,
    }
  }
  
  function newTree() {
    function addNode(key, value) {
      // TODO bn                    
    }
    function getNode(key) {
      // TODO
    }
    return {
      addNode,
      getNode,
    }
  }
  
  // function newFileSystem() {
  //   function addFolder() {}
  //   function addFile() {}
  // }