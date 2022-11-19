function addUser(newUser) {
  axios
    .request({
      method: "post",
      url: "http://localhost:3000/api/interns",
      data: newUser,
    })
    .then((response) => {
      console.log("user added");
    })
    .catch((err) => console.log(err));
}
function createUser(username,email,team,password) {
  const User = {
    username: username,
    email: email,
    team: team,
    password: password
  };
  addUser(User);
  console.log(User);
}


const form = document.forms[0];

const newUser = {
  username: form.fname,
  email: form.email,
  team: form.team.options[form.team.selectedIndex].text,
  password: form.password,
  repassword: form.repassword,
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let validated = 0
  const user = val_username(newUser.username)
  const email = val_email(newUser.email )
  const pass = val_password(newUser.password,newUser.repassword)
  const cred = [user,email,pass]
  for(i=0;i<cred.length;i++){
    if(cred[i] == undefined)
      break
    else    
      validated += 1
    }
    if(validated == 3)
      createUser(user,email,newUser.team,pass)
});

function val_username(username) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (username.value.match(letters)) {
    return username.value;
  } else {
    alert("Username must have alphanumeric characters only"); 
    username.title = 'error'
  }
}

function val_email(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return email.value;
  } else {
    alert("You have entered an invalid email address!");
    email.value = ''
  }
}

function val_password(password,re_password) {
  if(password.value.length >= 8)  {
    if(password.value == re_password.value) {
      return password.value
    }
    else {
      alert("Passwords don't match")
    }
  }
  else {
    alert("Password too short")
  }

}

