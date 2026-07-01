What is Pagination?

Pagination is the technique of dividing a large dataset into smaller chunks so that only a limited number of records are fetched at a time.

What is limit?

It specifies the maximum number of records returned by the server.

What is skip?

It specifies how many records should be ignored before returning the next set of data.

Why use Pagination?
Better performance
Faster loading
Lower memory usage
Reduced network traffic
Improved user experience


Definition (Interview)

IntersectionObserver is a browser API that asynchronously observes when an element enters or leaves the viewport without continuously listening to scroll events.


Why is it better than scroll events?

Because it avoids firing hundreds of scroll events, resulting in better performance and lower CPU usage.

What is isIntersecting?

It is a boolean that indicates whether the observed element is currently visible inside the viewport.

What is observe()?

It tells the browser which element should be monitored.




Timeline

Page Opens

↓

Observer Created

↓

Watching Loader

↓

User Scrolls

↓

Loader Visible

↓

Callback Runs

↓

Load More Products


Why is it Faster?

Old Way

Scroll Event

↓

500 Times

New Way

Scroll

↓

Nothing

↓

Nothing

↓

Nothing

↓

Loader Visible

↓

One Callback

Huge performance improvement.




