//Part 1

/*
1.manages asynchronous callbacks and allows Node.js to execute nonblocking operations.
2.libuv is a C++ library used by node.js to provide asynchronous I/O operations.
3.node.js handles asynchronous operations by delegating them to the operating system or to libuv's thread pool.
4.the call stack is where js executes functions.
  the event queue contains callbacks that are ready to be executed. 
  the event loop continuously checks the call stack and the queues and moves ready callbacks to the call stack when it is empty.
5.the node.js thread pool is a set of worker threads provided by libuv to handle certain expensive operations without blocking the main JavaScript thread.
  UV_THREADPOOL_SIZE
6.node.js uses non-blocking asynchronous execution to avoid waiting for slow operations. Blocking operations stop the main thread until they finish, while non-blocking operations allow the main thread to continue executing other code and handle the result later through callbacks, promises, or async await.  
*/

