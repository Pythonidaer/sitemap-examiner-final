# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can set up the project in two ways:

### Bash

1. `./build.sh` - installs dependencies
2. `./run.sh` - equal to `npm run dev`

### npm

1. `npm run install-both` - installs dependencies
2. `npm run dev` - equal to `./run.sh`

## How it works

1. When the app runs in development, both the client and server run on separate localhost ports.

2. On React page load, a useEffect hook calls an xmlFetcher function that leads to all the available SKUs and URLs\* being available for selection/search/fetching.

3. After a user selects a SKU and clicks 'Search', that URL is sent to the server to fetch book data.

   a. From there, the expected outcome is for data to be returned and written into the card in the UI!

## How could I scale my system to search across all sitemap files?

I am not sure. Going back to needing to batch my xmlFetcher function, perhaps there would also be a way to batch fetch requests for all sitemap files, or to add some dynamic logic in case all needed to be available, but not all would be used.

I would love to learn more about how this could scale and perform better, if you ever get the chance to teach me!

## How will my system perform with 100 users? 10,000 users? 1,000,000 users?

I am not sure. This isn't an area I currently know a whole lot about.

## What documentation, websites, papers, etc did I consult in doing this assignment?

[axios](https://www.npmjs.com/package//axios)

[xmldom](https://www.npmjs.com/package/@xmldom/xmldom)

[mdn docs, DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)

[cheerio](https://www.npmjs.com/package/cheerio)

[Stack Overflow, re: CORS, Node](https://stackoverflow.com/questions/57009371/access-to-xmlhttprequest-at-from-origin-localhost3000-has-been-blocked)

[mdn docs, CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

[This code repo was my first attempt of this project without React, which led me to switching over to Vite React.](https://github.com/Pythonidaer/sitemap-examiner)

[This code repo was my second attempt of this project with Vite React. Since I couldn't get past an API snag, I switched over to a generic Create React App setup, where I am more versed in (sitemap-examiner-final).](https://github.com/Pythonidaer/sitemap-examiner-react)

[Vite's documentation, which didn't help me connect my frontend to my backend in time, so I switched over to a CRA.](https://vitejs.dev/config/server-options.html#server-proxy)

[My Reddie app](https://reddie.herokuapp.com/)

[My Reddie app repo, where I was able to rebuild the Typeahead search dropdown, and determine what libraries would be needed for a frontend and backend concurrent build.](https://github.com/Pythonidaer/reddie/tree/main)

[Christianbook](https://www.christianbook.com/?navcat=toplogo)

[Sample Page](https://www.christianbook.com/101-dalmatians-ebook-dodie-smith/9781101153642/pd/47060EB?product_redirect=1&Ntt=47060EB&item_code=&ps_exit=RETURN|legacy&Ntk=keywords&event=ESRCG)

[Rapid API](https://rapidapi.com/guides/axios-different-data-formats)

[Axios](https://www.npmjs.com/package//axios)

[@xmldom/xmldom](https://www.npmjs.com/package/@xmldom/xmldom)

[Instructions](https://docs.google.com/document/d/1pFDrmq8h50E4Xe0cY8T6AZvJge9jO9B3foKqkdDmcq8/edit)

[My Old App](https://github.com/Pythonidaer/reddie/blob/main/frontend/src/components/Header.js)

[Axios Docs](https://axios-http.com/docs/instance)

[MDN CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

[SearchBox](https://github.com/Pythonidaer/reddie/blob/main/frontend/src/components/SearchBox.js)

[Typeahead](http://ericgio.github.io/react-bootstrap-typeahead/)

[Ania Kubow](https://www.youtube.com/watch?v=1wXYg8Eslnc)

[React Bootstrap - Cards](https://react-bootstrap.netlify.app/docs/components/cards/)

[ChatGPT Prompt 1 - Fetching XML, misc.](https://chat.openai.com/share/464bdfc6-6550-4a3d-acac-31f94a1e906b)

[ChatGPT Prompt 2 - Background fetching, misc.](https://chat.openai.com/share/192339fd-109d-4118-bd0e-b0a512092394)

[ChatGPT Prompt 3 - Filtering, misc.](https://chat.openai.com/share/3b86bac6-b615-4bf5-8ac9-6c361028683f)

[ChatGPT Prompt 4 - React Bootstrap](https://chat.openai.com/share/81313b8f-77d7-449b-9090-d4d311db6727)

[ChatGPT Prompt 5 - Bash](https://chat.openai.com/share/f531b640-bc49-4395-9376-9deff747db32)

## How long did I spend on this exercise?

I spent around 20-25 quality hours on this exercise.

Please note, I have been sick during this assessment also, so most of this challenge time regarded me being heavily exhausted, caffeine-deprived, struggling to look at a screen and barely able to concentrate for periods of time. Luckily I got the RESTful API Service to run the morning this was due.

## If I had unlimited more time to spend on this, how would I spend it and how would I prioritize each item?

I would probably eat my frog and try to learn more about performance. For example, several experienced engineers offered to help me out on this one but I turned it down since I couldn't collaborate with others.

What I would do is show them my code, and see how I could make my application more performant. This is an area I am not really versed in due to not having needed to be in the past. I would prioritize this because performance matters as much as appearance and accessibility. If something takes too long, people might leave your webpage. Or, it could simply crash.

I would spend more time working on the UI. I like to go to [awwwards.com](http://www.awwwards.com) for design inspiration, so I would probably work on a better card and expand the UI into a more unique mobile/laptop appearance. This may include shifting columns, dynamic component sections, etc. Assuming there would be more new features to add as well.

## If I were to crique my code, what would I have to say about it?

\* One critique I have of my xmlFetcher function is that it currently only writes 1,000 of the fetched items into a books array. I would like to write this into a while loop. I feel like batches is a common pattern, but I didn't have enough time to go back to this, so just left it as is.

\+ Another critique I have of my code is that it could be more custom and more accessible.

\++ I have full stack experience mostly only limited to personal projets and school, so I imagine in a professional environment there are a slew of best practices and techniques/patterns I am missing out on. In short, my critique is that I don't know what I don't know. That and there aren't any tests.

\+++ Not knowing Bash definitely didn't do me any favors. I feel like I just wrote the scripts to accomodate for the requirement, but it basically just does invokes the npm run scripts.

## How can I change my system to be updated to support simple keyword searches?

I might consider data manipulation for each URL string within the bookUrls array. Since each URL appears to contain both Title and Author as well as SKU, I might remove the dashes and consider capitalizing words for search.

The issue I would then have to deal with is deciding which array, if any, would appear in the typeahead component. I might consider not using one, but then I wouldn't know exactly how to set up the search. So it would take a lot of consideration.
