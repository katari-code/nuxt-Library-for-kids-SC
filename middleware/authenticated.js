export default async function ({ $auth,redirect }) {
  
    let uerLoggedIn = $auth.loggedIn;
    // console.log(uerLoggedIn)
    if (uerLoggedIn) { }
    else {
      return redirect('/')
    }
  
  }
  
  