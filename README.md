Modal bootstrap, change style, flexbox, gap, api call, hooks, components, useeffect for realtime search and update, get data from api and use it (template literals)
Movie info Modal with API call information using flexbox
TODO : get array od IDs and translate to genre(if array includes id and pass variable), DEBOUNCE function to reduce api calls
UseEffect run after render so its not effective for api calls, we need paralel fetching data
REACT SPRING TO ANIMATE
Genre id is integer, function to map api response and return ids name - make function function genres(genre_ids) which take array of IDs from api response as argument and let it be String from table of ids, this function is also reused on Modal
POssible change to GraphQL
21/11 :implementation of clickable genres which value can be stored and then used for next Fetch {for example; fetch only Acton, HOrror etc.} This needs to be done by not rendering Genres as array/string, byt using map to render every array value as separate clickable DOM element
