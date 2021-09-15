# Time Spent
1. I spent about 8 hours completing this task.
- I would add an instant search functionality (show results as typed), and make a much better user interface.
- I would utizilize other open Library APIs such as Search inside API to provide a better and functional user experience. 
- Add parameters to allow search by author, search by text, search by query
- Show autocomplete suggestions for books as typed
- Implement pagination for better functionality
- Add unit test cases for every component and some integration testing

# Useful feature in React 16
2. The most useful feature were react hooks. I have utilized useState, useEffect, useReducer, useRef inside my Search functional component, this has allowed me to skip making class
   component all together, this helps with less boilerplate code and more logical code. A snippet is shown here - 
   ```js
   useEffect(() => {
        window.addEventListener('keypress', e => {
            if(e.key == "Enter") {
                var searchInput = document.getElementById('searchBar');
                var isFocused = (document.activeElement === searchInput);
                if(isFocused) {
                    search();
                }
            }
        });
    ```
    useEffect behaves similar to componentDidMount lifecycle for a class component, it's much more readable and manageable. 

# Reporting services
3. To track down performance issues and bug issues I would use a reporting services such as Sentry or New Relic. Yes, I have used error reporting services such as Sentry before. This helps
    to find bugs before customers report it to us.

# API Improvement
4. I would improve the api by 
    - Allowing a limit parameter making query results much faster and constant 
    - Provide the book description on the ISBN endpoint itself 
    - Fix CORS issues for authors endpoint 
    - Boolean value indicating whether cover image exists to show a placeholder image instead
    - Improve the documentation providing extensive detail to acceptable parameters

# About me
5. Please refer to about_me.json
