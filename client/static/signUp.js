function formValues(form) {
    const user = {
        username : form.fname.value,
        email : form.email.value,
        team : form.team.options[form.team.selectedIndex].text,
        password : form.password.value
    }
    console.log(user)
  }
