creted the Navbar using css-flex, a logo and a button(add user).
Creted loading state, and users state using useState hook in react.
In App.js if the loading is true then show <Loading/>  which is the loading component, and if the users is not null and loading stops the show <Users/>
The Add user button has a setLoading and setUsers, when the button is clicked the setLoading  is used to change the loading state  of the application and after that a axios request is made to the url to get the data. After getting the data setUsers is used to change the state.
