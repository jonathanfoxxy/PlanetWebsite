So i created the api using AWS the API gateway and Lambda and built the project website with visual studio(created a new aspx website with the .net framework)

I included the code for the API in the API javascript file(it does not do anything just included it if you want to check it)

You should be able to open the project build and run it and it should work for you.

Had issues with Cors so I inserted a proxy to get past it.

The Javascript is kept in a js file in the scripts folder.

Its using Ajax to make a call to the api then it inserts the planets into a table on the webpage

the html is in the index file in the views folder.